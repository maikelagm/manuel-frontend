import { Button, Input, Option, Select, Typography } from '@material-tailwind/react'
import { useState } from 'react';

const ConnectionDB = () => {

    const [formData, setFormData] = useState({
        db: '',
        host: '',
        dbName: '',
        username: '',
        password: ''
    });

    const databaseTypes = {
        postgres: 'PostgreSQL',
        mysql: 'MySQL',
        sqlserver: 'SQL Server',
        oracle: 'Oracle'
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Aquí puedes agregar la lógica para conectar a la base de datos
        // Puedes utilizar formData para obtener los valores de conexión.
    }

    return (
        <div className='p-4 w-fit'>
            <Typography variant="h4" color="blue-gray" className="dark:text-primary-300">
                Conectar a una base de datos
            </Typography>
            <Typography variant="small" color="blue-gray" className="dark:text-primary-400 w-80 max-w-screen-lg sm:w-96">
                Introduce los datos de tu base de datos para conectarla a la aplicación.
            </Typography>

            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-primary-300">
                        Selecciona un tipo de base de datos
                    </Typography>
                    <Select
                        value={formData.db}
                        onChange={handleChange}
                        size="lg"
                        name="db"
                        className="!border-blue-gray-200 focus:!border-gray-900 "
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        menuProps={{
                            className: "dark:bg-neutral-900 dark:border-neutral-500 shadow-lg shadow-primary-500/10"
                        }}
                    >
                        {Object.keys(databaseTypes).map((key) => (
                            <Option key={key} value={key}>
                                {databaseTypes[key]}
                            </Option>
                        ))}
                    </Select>
                    <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-primary-300">
                        Host
                    </Typography>
                    <Input
                        crossOrigin="anonymous"
                        size="lg"
                        name="host"
                        value={formData.host}
                        onChange={handleChange}
                        placeholder="localhost"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-primary-300">
                        Nombre de la base de datos
                    </Typography>
                    <Input
                        crossOrigin="anonymous"
                        size="lg"
                        name="dbName"
                        value={formData.dbName}
                        onChange={handleChange}
                        placeholder="mydatabase"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-primary-300">
                        Usuario
                    </Typography>
                    <Input
                        crossOrigin="anonymous"
                        size="lg"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="root"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-primary-300">
                        Contraseña
                    </Typography>
                    <Input
                        crossOrigin="anonymous"
                        type="password"
                        size="lg"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="********"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>

                <Button type="submit" className="mt-6 bg-primary-500 infinityBarLoader !h-fit" fullWidth >
                    Conectar
                </Button>
            </form>
        </div>
    )
}

export default ConnectionDB;
