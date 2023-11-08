import React, { useState } from 'react';

const DatabaseConnectionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    databaseType: 'postgres',
    hostname: '',
    username: '',
    password: '',
    databaseName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de conexión a la base de datos con los datos de formData.
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded p-4">
      <h2 className="text-2xl font-semibold mb-4">Conexión a Base de Datos</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="database_type" className="block text-sm font-medium text-gray-600">Tipo de Base de Datos</label>
          <select
            name="databaseType"
            id="database_type"
            value={formData.databaseType}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          >
            <option value="postgres">PostgreSQL</option>
            <option value="mysql">MySQL</option>
            <option value="sqlite">SQLite</option>
            {/* Agrega otras opciones de bases de datos relacionales aquí */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="hostname" className="block text-sm font-medium text-gray-600">Hostname</label>
          <input
            type="text"
            name="hostname"
            id="hostname"
            value={formData.hostname}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">Nombre de Usuario</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="database_name" className="block text-sm font-medium text-gray-600">Nombre de la Base de Datos</label>
          <input
            type="text"
            name="databaseName"
            id="database_name"
            value={formData.databaseName}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mt-4">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Conectar</button>
        </div>
      </form>
    </div>
  );
};

export default DatabaseConnectionForm;
