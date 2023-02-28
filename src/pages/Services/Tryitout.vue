<template>
  <div class="dashboard-page">
    <h1 class="page-title">My Services</h1>

    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div
            class="col-lg-4"
            v-for="(service, i) in services"
            :key="i"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="box featured">
              <!-- <h3>Free Plan</h3> -->
              <h4>{{ service.service_name }}</h4>
              <ul>
                <li>{{ service.description }}</li>
              </ul>
              <button @click="AttachService(service)" class="buy-btn">
                Try It Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Pricing Section -->
  </div>
</template>

<script>
import VueElementLoading from "vue-element-loading";

export default {
  components: {
    VueElementLoading,
  },


  data() {
    return {
      services: {},
    };
  },
  methods: {
    getServices() {
      this.$api
        .get(this.dynamic_route("services"))
        .then((res) => {
          this.services = res.data.services;
        })
        .catch((err) => {})
        .finally(() => {
          this.loading = false;
          this.text = "";
        });
    },
    AttachService(data) {
      console.log(data);
      this.$router.push(data.service_url)
      // let service = data.id;
      // this.$api
      //   .post(this.dynamic_route(`user_services/${service}`))
      //   .then((res) => {
      //     if (res.data.status) {
      //       this.$toast.success(res.data.message, {
      //         position: "top-right",
      //         timeout: 5000,
      //         closeOnClick: true,
      //         pauseOnFocusLoss: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         draggablePercent: 0.6,
      //         showCloseButtonOnHover: false,
      //         hideProgressBar: true,
      //         closeButton: "button",
      //         icon: true,
      //         rtl: false,
      //       });
      //     } else {
      //       this.$toast.error(res.data.message, {
      //         position: "top-right",
      //         timeout: 5000,
      //         closeOnClick: true,
      //         pauseOnFocusLoss: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         draggablePercent: 0.6,
      //         showCloseButtonOnHover: false,
      //         hideProgressBar: true,
      //         closeButton: "button",
      //         icon: true,
      //         rtl: false,
      //       });
      //     }
      // });
      // this.$swal({
      //   icon: "warning",
      //   title: "Subscribe ",
      //   text: "Are you sure you want to want to carry out ths operation?",
      //   type: "warning",
      //   showCancelButton: true,
      //   confirmButtonText: "Yes !",
      //   cancelButtonText: "No, Exit!",
      //   cancelButtonColor: "#d92550",
      //   showCloseButton: true,
      //   showLoaderOnConfirm: true,
      // }).then((result) => {
      //   if (result.isConfirmed) {
         
      //   }
      // });
    },
  },
  mounted() {
    this.getServices();
  },
};
</script>

<style scoped>
.card {
  border: none;
  margin-bottom: 1.5rem;
  padding: 0 !important;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
}
.small-box {
  display: block;
  position: relative;
}
.small-box:hover {
  text-decoration: none;
}
.small-box > .inner {
  padding: 20px;
}
.small-box h3,
.small-box p {
  z-index: 5;
}
.small-box h3 {
  font-weight: 600;
  padding: 0;
  white-space: nowrap;
  color: #5e5873;
  font-size: 25px;
  margin-bottom: 5px !important;
}
.small-box p {
  font-size: 0.93rem;
  font-weight: 500;
  color: #999999;
}
.small-box .icon {
  color: rgba(0, 0, 0, 0.15);
  z-index: 0;
}
.small-box .icon > i.fa,
.small-box .icon > i.fab,
.small-box .icon > i.fad,
.small-box .icon > i.fal,
.small-box .icon > i.far,
.small-box .icon > i.fas,
.small-box .icon > i.ion {
  font-size: 70px;
  top: 20px;
}
.small-box .icon > i {
  position: absolute;
  right: 15px;
  top: 15px;
  transition: transform 0.3s linear, -webkit-transform 0.3s linear;
}
.small-box > .small-box-footer {
  border-top: 1px solid #f7f7f7;
  display: block;
  padding: 3px 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  z-index: 10;
}
.b-avatar.badge-light-primary {
  background-color: rgba(115, 103, 240, 0.12);
}
.b-avatar.badge-light-primary {
  color: #7367f0;
}
.b-avatar.badge-light-info {
  background-color: rgba(0, 207, 232, 0.12);
}
.b-avatar.badge-light-info {
  color: #00cfe8;
}
.b-avatar.badge-light-danger {
  background-color: rgba(234, 84, 85, 0.12);
}
.b-avatar.badge-light-danger {
  color: #ea5455;
}
.b-avatar.badge-light-success {
  background-color: rgba(40, 199, 111, 0.12);
}
.b-avatar.badge-light-success {
  color: #28c76f;
}
.b-avatar.badge-light-warning {
  background-color: rgba(255, 159, 67, 0.12);
}
.b-avatar.badge-light-warning {
  color: #ff9f43;
}
.b-avatar.badge-light-secondary {
  background-color: rgba(130, 134, 139, 0.12);
}
.b-avatar.badge-light-secondary {
  color: #82868b;
}
th,
tr {
  white-space: nowrap;
}
.requests-table th {
  font-weight: 600 !important;
}
.requests-table td {
  font-weight: 400 !important;
  font-size: 13px;
}
.card {
  min-height: 200px;
}
button {
  color: #ffffff;
}

.services .row {
  padding-top: 40px;
}

.services .box {
  padding: 60px 40px;
  box-shadow: 0 3px 20px -2px rgba(20, 45, 100, 0.1);
  background: #fff;
  height: 100%;
  border-top: 4px solid #fff;
  border-radius: 5px;
}

.services h3 {
  font-weight: 500;
  margin-bottom: 15px;
  font-size: 20px;
  color: #37517e;
}

.services h4 {
  font-size: 28px;
  color: #37517e;
  font-weight: 400;
  font-family: "Rubik";
  /* margin-bottom: 25px; */
}

.services h4 span {
  color: #47b2e4;
  font-size: 18px;
  display: block;
}

.services ul {
  padding: 20px 0;
  list-style: none;
  font-family: "Rubik";
  color: #999;
  text-align: left;
  line-height: 20px;
}

.services ul li {
  /* padding: 10px 0 10px 30px; */
  position: relative;
}

.services ul i {
  color: #28a745;
  font-size: 24px;
  position: absolute;
  left: 0;
  top: 6px;
}

.services ul .na {
  color: #ccc;
}

.services ul .na i {
  color: #ccc;
}

.services ul .na span {
  text-decoration: line-through;
}

.services .buy-btn {
  display: inline-block;
  padding: 12px 35px;
  border-radius: 50px;
  color: #47b2e4;
  transition: none;
  font-size: 16px;
  font-weight: 500;
  font-family: "Jost", sans-serif;
  transition: 0.3s;
  border: 1px solid #47b2e4;
}

.services .buy-btn:hover {
  background: #47b2e4;
  color: #fff;
}

.services .featured {
  border-top-color: #47b2e4;
}

.services .featured .buy-btn {
  background: #47b2e4;
  color: #fff;
}

.services .featured .buy-btn:hover {
  background: #23a3df;
}

@media (max-width: 992px) {
  .services .box {
    max-width: 60%;
    margin: 0 auto 30px auto;
  }
}

@media (max-width: 767px) {
  .services .box {
    max-width: 80%;
    margin: 0 auto 30px auto;
  }
}

@media (max-width: 420px) {
  .services .box {
    max-width: 100%;
    margin: 0 auto 30px auto;
  }
}
</style>
