
const setUser = params => dispatch => {
  axios.get('/user',{id:params.id}).then(data=>{
    dispatch()
  })
}