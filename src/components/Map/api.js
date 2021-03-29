import axios from 'axios';

const api = axios.create({
    baseURL: 'https://munddi.com/dev/pdvs?ne_lat=-23.27153&ne_lng=-45.91969&sw_lat=-24.06141&sw_lng=-47.22157',
});

export default api;