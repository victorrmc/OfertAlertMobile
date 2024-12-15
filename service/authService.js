import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
    async sendVerificationCode(email) {
        try {
            const response = await axios.post(`${BASE_URL}/api/auth/send-code`, {
                email: email.trim()
            });
            return {
                success: true,
                data: response.data
            };
        } catch (error) {
            console.error('Error sending verification code:', error);
            return {
                success: false,
                error: error.response?.data || error.message
            };
        }
    }

    async verifyCode(email, code) {
        try {
            const response = await axios.post(`${BASE_URL}/api/auth/verify-code`, {
                email: email.trim(),
                code
            });

            if (response.data) {
                // Guardar el email en AsyncStorage después de la verificación exitosa
                await AsyncStorage.setItem('userEmail', email.trim());
            }

            return {
                success: true,
                data: response.data
            };
        } catch (error) {
            console.error('Error verifying code:', error);
            return {
                success: false,
                error: error.response?.data || error.message
            };
        }
    }

    async logout() {
        try {
            await AsyncStorage.removeItem('userEmail');
            return { success: true };
        } catch (error) {
            console.error('Error during logout:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    async checkAuthStatus() {
        try {
            const email = await AsyncStorage.getItem('userEmail');
            return {
                success: true,
                isAuthenticated: !!email,
                email
            };
        } catch (error) {
            console.error('Error checking auth status:', error);
            return {
                success: false,
                isAuthenticated: false,
                error: error.message
            };
        }
    }
}

export default new AuthService();