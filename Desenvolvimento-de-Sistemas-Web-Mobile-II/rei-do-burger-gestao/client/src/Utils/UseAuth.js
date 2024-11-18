import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './AxiosInstance';

const useAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axiosInstance.get('/get/all', { withCredentials: true });
            } catch (error) {
                navigate('/login');
            }
        };

        checkAuth();
    }, [navigate]);
};

export default useAuth;