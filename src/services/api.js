import axios from 'axios'; 

//https://api.hgbrasil.com/weather?key=44d362b7&lat=-23.682&lon=-46.875

export const key = '44d362b7'; //786682d7 nova

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api;