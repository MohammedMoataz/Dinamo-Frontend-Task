import { useState } from 'react';
import { get } from '../services/apiClient';

interface UseApiReturn<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

export const useApi = <T>(url: string): UseApiReturn<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        try {
            const response = await get<T>(url);
            setData(response);
        } catch (err) {
            setError('Something went wrong while fetching data.');
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, fetchData };
};
