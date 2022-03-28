import axios from 'axios'

export default axios.Create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: process.env.YOUTUBE_KEY
    }
})