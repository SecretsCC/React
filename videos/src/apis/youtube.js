import axios from 'axios';


const KEY = 'AIzaSyDLfArSzeq-P5w3sA6ZtYQil8GgMi21APE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});



