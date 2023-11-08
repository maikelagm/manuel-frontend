import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { Button, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const { signed, Login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(""); // Nuevo estado para manejar errores de correo

    console.log(signed);

    const handleLogin = async () => {
        // Validar el formato del correo electrónico antes de enviar
        if (!validateEmail(email)) {
            setEmailError("Correo electrónico no válido");
        } else {
            setEmailError(""); // Reiniciar el error si es válido
            await Login({
                email,
                password,
            });
        }
    }

    // Función para validar el formato de correo electrónico utilizando una expresión regular
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    useEffect(() => {
    }, [signed]);

    return (
        <div className='p-4 w-fit'>
            <Typography variant="h4" color="blue-gray" className="dark:text-primary-300">
                Iniciar sesión
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-primary-300">
                        Correo electrónico
                    </Typography>
                    <Input
                        crossOrigin="anonymous"
                        size="lg"
                        placeholder="name@mail.com"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        id="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError(""); // Reiniciar el error cuando el campo cambia
                        }}
                    />
                    {emailError && (
                        <Typography color="red" className="text-sm">
                            {emailError}
                        </Typography>
                    )}

                    <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-primary-300">
                        Contraseña
                    </Typography>
                    <Input
                        crossOrigin="anonymous"
                        type="password"
                        id="password"
                        size="lg"
                        placeholder="********"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <Button
                    onClick={handleLogin}
                    className="mt-6 bg-primary-500" fullWidth>
                    Entrar
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal dark:text-gray-400">
                    ¿Todavía no tienes una cuenta?{" "}
                    <Link to="/signup" className="font-medium text-neutral-900 dark:text-neutral-100 hover:underline hover:text-primary-500 hover:dark:text-primary-500">
                        Regístrate
                    </Link>
                </Typography>
            </form>
        </div>
    );
};

export default LoginPage;
