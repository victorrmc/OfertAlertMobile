import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {errorTypeHandler} from '../utils/helper';
interface AuthResponse {
    success: boolean;
    data?: string;
    error?: string;
}
interface checkAuthStatusResponse extends Omit<AuthResponse, 'data'> {
    isAuthenticated: boolean;
    email?: string | null;
}

class AuthService {
    async sendVerificationCode(email: string): Promise<AuthResponse> {
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
                error: errorTypeHandler(error)
            };
        }
    }

    async verifyCode(email: string, code: string) : Promise<AuthResponse> {
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
                error: errorTypeHandler(error)
            };
        }
    }

    async logout() : Promise<AuthResponse> {
        try {
            await AsyncStorage.removeItem('userEmail');
            return { success: true };
        } catch (error) {
            console.error('Error during logout:', error);
            return {
                success: false,
                error: errorTypeHandler(error)
            };
        }
    }

    async checkAuthStatus(): Promise<checkAuthStatusResponse> {
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
                error: errorTypeHandler(error)
            };
        }
    }
}

export default new AuthService();