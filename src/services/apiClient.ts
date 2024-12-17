import axios, { AxiosRequestConfig } from 'axios';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 5000,
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
export const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiClient.get<T>(url, config);
    return response.data;
};

export const post = async <T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
): Promise<T> => {
    const response = await apiClient.post<T>(url, data, config);
    return response.data;
};
