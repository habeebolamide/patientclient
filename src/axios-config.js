import axios from "axios";

const token = JSON.parse(localStorage.getItem('auth_info'))?.auth_token; // Use optional chaining to handle null value

const appAxios = axios.create({
    headers: {
        authorization: token ? `Bearer ${token}` : null,
    },
});

const onErrorResponse = async (error) => {
    if (error.response) {
        if (
            error.response.status === 401 
        ) {
            localStorage.clear();
            // this.$route.push("/login");
            location.href = "/login";
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

// Before a request is made, start the NProgress
appAxios.interceptors.request.use(config => {
    NProgress.start()
    return config
})

// Before a response is returned, stop the NProgress
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

export default appAxios;
