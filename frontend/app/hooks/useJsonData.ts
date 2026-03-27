import { useState, useEffect } from 'react';

// Hook para cargar un archivo JSON desde la carpeta public
export const  useJsonData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadJsonFile = async () => {
            try {
                setLoading(true);

                // Cargar archivo desde public
                const response = await fetch('/mexico.json');

                // Procesar respuesta
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                } else {
                    throw new Error(`Error al cargar el archivo: ${response.status}`);
                }

            } catch (err) {
                console.error('Error loading JSON file:', err);
                setError('Error al cargar el archivo JSON');
            } finally {
                setLoading(false);
            }
        };

        loadJsonFile();
    }, []);

    return {
        data,
        loading,
        error
    };
};
