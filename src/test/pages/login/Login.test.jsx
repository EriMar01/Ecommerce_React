import {describe, test, expect, afterEach, vi} from "vitest";
import {cleanup, render, screen, waitFor} from "@testing-library/react";
import Login from "../../../pages/login/Login"
import userEvent from '@testing-library/user-event'

afterEach(() => {
  cleanup();
});

describe("Test <Login />", () => {
  test("It should render the form correctly", () => {
    // Arrange
		render(<Login />);

		const inputEmail = screen.getByRole("email");
		const inputPassword = screen.getByRole("password");
    const buttonSubmit = screen.getByRole("button");

    // Assert
    expect(inputEmail).toBeDefined();
    expect(inputEmail.getAttribute("type")).toBe("email");

    expect(inputPassword).toBeDefined();
    expect(inputPassword.getAttribute("type")).toBe("password");

    expect(buttonSubmit).toBeDefined();
    expect(buttonSubmit.getAttribute("type")).toBe("submit");
	});

	test("Must allow writing in the fields", async() => {
    // Arrange
    render(<Login />);
    
    const user = userEvent.setup();
    const inputEmail = screen.getByRole("email");
    const inputPassword = screen.getByRole("password");
    const buttonSubmit = screen.getByRole("button");

    // Act
    await user.type(inputEmail, "eri@correo.com");
    await user.type(inputPassword, "123");
    await user.click(buttonSubmit);

    // Assert
    expect(inputEmail.value).toBe("eri@correo.com");
    expect(inputPassword.value).toBe("123");
	});

  test("Should display an error if the form is not filled out", async () => {
    // Arrange
    render(<Login />);
    
    const buttonSubmit = screen.getByRole("button");

    // Act
    await userEvent.click(buttonSubmit);

    // Assert
    const errorMessage = screen.getByText(/Please fill in all the fields!/i);
    expect(errorMessage).toBeDefined();
  });

  test("Must display 'Logging in...' text when sending", async () => {
    // Arrange
    render(<Login />);
    
    const user = userEvent.setup();
    const inputEmail = screen.getByRole("email");
    const inputPassword = screen.getByRole("password");
    const buttonSubmit = screen.getByRole("button");

    // Act
    await user.type(inputEmail, "eri@correo.com");
    await user.type(inputPassword, "123");
    await user.click(buttonSubmit);

    // Assert
    expect(buttonSubmit).toHaveTextContent("Logging in...");
  });

  test("Should redirect to profile after successful login", async () => {
    // Arrange
    render(<Login />);
    const user = userEvent.setup();
    const inputEmail = screen.getByRole("email");
    const inputPassword = screen.getByRole("password");
    const buttonSubmit = screen.getByRole("button");

    // Simulamos que el token es válido (sin backend real)
    const navigate = vi.fn(); // Mock de la función de navegación
    const handleLogin = vi.fn(); // Mock del método handleLogin

    // Reemplazamos el contexto useAuth para utilizar el mock
    render(<Login navigate={navigate} handleLogin={handleLogin} />);

    // Act
    await user.type(inputEmail, "eri@correo.com");
    await user.type(inputPassword, "123");
    await user.click(buttonSubmit);

    // Esperar que el método handleLogin haya sido llamado
    await waitFor(() => {
      expect(handleLogin).toHaveBeenCalledWith("123456"); // Asegúrate de que handleLogin fue llamado con el token
      expect(navigate).toHaveBeenCalledWith("/profile"); // Verifica que la navegación ocurrió
    });
  });

  test("Should display an error message when credentials are incorrect", async () => {
    // Arrange
    render(<Login />);
    
    const user = userEvent.setup();
    const inputEmail = screen.getByRole("email");
    const inputPassword = screen.getByRole("password");
    const buttonSubmit = screen.getByRole("button");

    // Simulamos un fallo de autenticación
    const errorMessage = "Invalid credentials, please try again.";

    // Act
    await user.type(inputEmail, "wrongemail@correo.com");
    await user.type(inputPassword, "wrongpassword");
    await user.click(buttonSubmit);

    // Assert
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeDefined();
  });

});
