import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import styles from './Login.module.css';
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const { handleLogin } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        if (!email || !password) {
            setError("Please fill in all the fields!");
            return;
        }

        setIsSubmitting(true); // Inicia el estado de envío
        setError(""); // Limpia los errores anteriores

        // Aquí simulamos un proceso de autenticación sin peticiones asincrónicas
        const token = "123456"; // Este es el token que se va a pasar a handleLogin
        
        // Simulando la autenticación
		setTimeout(() => {
			if (token) {
				handleLogin(token);  // Llama a handleLogin del contexto y pasa el token
				navigate("/profile"); // Redirige al perfil
			} else {
				setError("Invalid credentials, please try again.");
			}

			setIsSubmitting(false);  // Finaliza el estado de envío
		}, 2000);  // Añadir un pequeño retraso para simular la autenticación asincrónica
};

    return (
        <section className={styles.containerLogin}>
            <h1 className={styles.loginTitle}>Login</h1>
            <form className={styles.loginform} onSubmit={handleSubmit} data-testid="login-form">
                <label className={styles.loginLabel} htmlFor="email">
                    Email
                    <input className={styles.loginInput}
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        role="email"
                        data-testid="email"
                    />
                </label>
                <label className={styles.loginLabel} htmlFor="password">
                    Password
                    <input className={styles.loginInput}
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        role="password"
                        data-testid="password"
                    />
                </label>
                {/* Mostrar error si existe */}
                {error && <p style={{ color: "red" }}>{error}</p>}

                <button
                    className={styles.ctaButton}
                    type="submit"
                    disabled={isSubmitting} // Deshabilita el botón si está enviando
                >
                    {isSubmitting ? "Logging in..." : "Login"} {/* Muestra el texto dinámicamente */}
                </button>
            </form>

        </section>
    );
};

export default Login;
