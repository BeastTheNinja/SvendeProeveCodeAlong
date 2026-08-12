import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network response was not ok" + response.status);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error instanceof Error ? error : new Error(String(error)));
            } finally {
                setLoading(false);
            }

        }
        fetchData();
    }, [url]);

    return { data, loading, error };
}