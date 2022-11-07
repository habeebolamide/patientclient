import axios from "axios";


let token = localStorage.getItem('2@39$*8');
const appAxios = axios.create({
    headers: {
        authorization: `Bearer ${token}`
    }
});

const onErrorResponse = async (error) => {
    if (error.response) {
        if (
            error.response.status === 401 &&
            error.response.data.message === "Unauthenticated."
        ) {
            localStorage.clear();
            this.$route.push("/login");
            // this.$toast.error("Login expired", {
            //     position: "top-center",
            //     timeout: 5000,
            //     closeOnClick: true,
            //     pauseOnFocusLoss: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     draggablePercent: 0.6,
            //     showCloseButtonOnHover: false,
            //     hideProgressBar: true,
            //     closeButton: "button",
            //     icon: true,
            //     rtl: false,
            // });
        } else {
            return error.response;
        }
    }

    return error;
};

const onSuccessResponse = (response) => {
    return response;
};

appAxios.interceptors.response.use(onSuccessResponse, onErrorResponse);
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
