// hooks/useFetch.ts
import { useState, useEffect } from 'react';

export const useFetch = <T>(url: string): { data: T | null; loading: boolean } => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(setData)
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading };
};
