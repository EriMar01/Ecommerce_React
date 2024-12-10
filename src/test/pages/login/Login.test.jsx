import { describe, test, afterEach, vi, beforeEach, expect } from "vitest";
import { render, cleanup, screen } from "@testing-library/react";
import Login from "../../../pages/login/Login";
import { useNavigate } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import userEvent from '@testing-library/user-event'

vi.mock('react-router', async () => {
    const actual = await vi.importActual('react-router');
    return {
        ...actual,
        useNavigate: vi.fn(),
    };
});

vi.mock("../../../hooks/useAuth", async () => {
    const actual = await vi.importActual("../../../hooks/useAuth");
    return {
        ...actual,
        useAuth: vi.fn(),
    };
});

// Limpia después de cada prueba
afterEach(() => cleanup());

// Tests para el componente <Login />
describe("<Login /> Tests", () => {
    let mockNavigate;
    let mockAuth;

    beforeEach(() => {
        mockNavigate = vi.fn();
        (useNavigate).mockReturnValue(mockNavigate);

        mockAuth = vi.fn();
        (useAuth).mockReturnValue(mockAuth);
    });

    test("It should render the form correctly", () => {
        render(
            <Login />
        );

        const inputEmail = screen.getByTestId("email");
        const inputPassword = screen.getByTestId("password");
        const buttonSubmit = screen.getByRole("button");

        expect(inputEmail).toBeDefined();
        expect(inputEmail.getAttribute("type")).toBe("email");

        expect(inputPassword).toBeDefined();
        expect(inputPassword.getAttribute("type")).toBe("password");

        expect(buttonSubmit).toBeDefined();
        expect(buttonSubmit.getAttribute("type")).toBe("submit");
    });

    test("Must allow writing in the fields", async () => {
        render(
            <Login />
        );

        const user = userEvent.setup();
        const inputEmail = screen.getByRole("email");
        const inputPassword = screen.getByRole("password");
        const buttonSubmit = screen.getByRole("button");

        await user.type(inputEmail, "eri@correo.com");
        await user.type(inputPassword, "123");
        user.click(buttonSubmit)

        expect(inputEmail.value).toBe("eri@correo.com");
        expect(inputPassword.value).toBe("123");
    });

    test("Must display 'Logging in...' text when sending", async () => {
        render(
            <Login />
        );

        const user = userEvent.setup();
        const inputEmail = screen.getByRole("email");
        const inputPassword = screen.getByRole("password");
        const buttonSubmit = screen.getByRole("button");

        await user.type(inputEmail, "eri@correo.com");
        await user.type(inputPassword, "123");
        await user.click(buttonSubmit);

        expect(buttonSubmit.textContent).toBe("Logging in... ");
    });

});
