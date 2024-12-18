import axios, { AxiosRequestConfig } from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

// Handle request and response errors
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error.response || 'Something went wrong');
    }
);

// Generic GET and POST methods
export const get = async <T>(
    url: string,
    config?: AxiosRequestConfig
): Promise<T> => {
    const response = await apiClient.get<T>(url, config);
    return response.data;
};

export const post = async <T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
): Promise<T> => {
    const response = await apiClient.post<T>(url, data, config);
    return response.data;
};

export const patch = async <T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
): Promise<T> => {
    const response = await apiClient.patch<T>(url, data, config);
    return response.data;
};


export const remove = async <T>(
    url: string,
    config?: AxiosRequestConfig
): Promise<T> => {
    const response = await apiClient.delete<T>(url, config);
    return response.data;
};
