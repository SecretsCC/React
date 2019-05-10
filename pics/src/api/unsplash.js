import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b55b9047318159dd24cf4f327fa3975a4d20a647372ff591cd0810fe47a9e502'
    }
});