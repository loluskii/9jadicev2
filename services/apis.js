import axios from '~/plugins/axios'
export default {
  async createTournament(data){
    return axios.post('/tournaments/create',data).then(response =>  {
        return response.data
    }).catch(error => {
        return error.data
    });
  }
}
