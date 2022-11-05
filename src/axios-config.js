import axios from "axios";


let token = localStorage.getItem('auth_info') != null ? JSON.parse(localStorage.getItem('auth_info')).auth_token :null;
const appAxios = axios.create({
    headers:{
        authorization: `Bearer ${token}`
    }
});


// before a request is made start the nprogress
appAxios.interceptors.request.use(config => {
    NProgress.start()
    return config
  })
  
  // before a response is returned stop nprogress
//   appAxios.interceptors.response.use(response => {
//     alert(2)

//     NProgress.done()
//     return response
//   }, error => {
//     console.log(error)
//     NProgress.done()

//     alert(3)
//     return error

//   })
  


export default appAxios
