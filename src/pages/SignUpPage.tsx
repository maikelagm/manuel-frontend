import { Button, Card, Checkbox, Input, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
    return (
        <div className='p-4 w-fit'>
            <Typography variant="h4" color="blue-gray" className="dark:text-primary-300">
                Registrar una cuenta
            </Typography>
            <Typography variant="small" color="blue-gray" className="dark:text-primary-400">
                Introduce tus datos para crear una cuenta nueva.
            </Typography>

            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-primary-300">
                        Nombre y apellidos
                    </Typography>
                    <Input
                        crossOrigin="anonymous"
                        size="lg"
                        placeholder="Jumisisleydi Pérez Pérez"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-primary-300">
                        Correo electrónico
                    </Typography>
                    <Input
                        crossOrigin="anonymous"
                        size="lg"
                        placeholder="user@mail.com"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />

                    <Card shadow={false} className="bg-info-100 border border-info-500 p-4">
                        <Typography variant="paragraph" color="gray" className="-mb-3">
                            La contraseña debe tener al menos 8 caracteres, letras mayúsculas y minúsculas, números y caracteres especiales (!@&#$%^.).
                        </Typography>
                    </Card>
                    <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-primary-300">
                        Una contraseña para tu cuenta
                    </Typography>
                    <Input
                        crossOrigin="anonymous"
                        type="password"
                        size="lg"
                        placeholder="********"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-primary-300">
                        Repite la contraseña
                    </Typography>
                    <Input
                        crossOrigin="anonymous"
                        type="password"
                        size="lg"
                        placeholder="********"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                <Checkbox
                    crossOrigin="anonymous"
                    label={
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal dark:text-gray-400"
                        >
                            Estoy de acuerdo con los
                            <Link
                                to="/terms-and-conditions"
                                className="font-medium transition-colors text-neutral-900 dark:text-neutral-100 hover:underline hover:text-primary-500 hover:dark:text-primary-500"
                            >
                                &nbsp;Términos y condiciones
                            </Link>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6 bg-primary-500" fullWidth>
                    sign up
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal dark:text-gray-400">
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/login" className="font-medium text-neutral-900 dark:text-neutral-100 hover:underline hover:text-primary-500 hover:dark:text-primary-500">
                        Inicia sesión
                    </Link>
                </Typography>
            </form>
        </div>
    )
}

export default SignUpPage
