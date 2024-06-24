import { Alert } from 'react-native';
import { BASE_URL } from '../constants/constants.js';
import axios from 'axios';

async function scrapingOfert({ url, email }) {
    try {
        const response = await axios.post(`${BASE_URL}/api/add-product`, {
            url: url,
            email: email
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default scrapingOfert;