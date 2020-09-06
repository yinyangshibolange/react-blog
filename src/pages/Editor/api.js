import axios from '../../axiosInstance'

export const getArticalById =  aid => {
    return axios.get('/artical/id')
}