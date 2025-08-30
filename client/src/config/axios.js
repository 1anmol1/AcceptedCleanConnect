import axios from 'axios';

const isProduction = window.location.hostname !== 'localhost';

const instance = axios.create({
    baseURL: isProduction 
        ? 'https://cleanconnect-backend.onrender.com' // We'll deploy the backend to render.com
        : 'http://localhost:5000'
});

export default instance;
