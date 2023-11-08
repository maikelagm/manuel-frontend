import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Logo from '../components/Logo';

const ErrorPage: React.FC = () => {
    const err = useRouteError() as any;
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Logo text={false} width={120} height={120} />
            <h1 className="text-4xl font-bold mb-4">
                {err.status ? err.status : 500}
            </h1>
            <pre>{err.statusText ? err.statusText : "Something went wrong"}</pre>
            <Link to="/" className="text-blue-500 hover:underline">Volver a la página principal</Link>
        </div>
    );
};




export default ErrorPage;