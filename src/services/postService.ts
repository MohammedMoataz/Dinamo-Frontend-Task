// services/userService.ts
import axios from 'axios';

const BASIC_URL = 'https://jsonplaceholder.typicode.com/'

export const getPosts = async () => {
    const response = await axios.get(`${BASIC_URL}/posts`);
    return response.data;
};
