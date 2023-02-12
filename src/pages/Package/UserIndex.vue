<template>
  <div>
    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container" data-aos="fade-up">
        <div class="row">
          
          <div
            class="col-lg-4"
            v-for="(p, i) in packages"
            :key="i"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="box featured">
              <h3>{{ p.package_name }}</h3>
              <h4><sup>₦</sup>{{ p.package_price }}<span>per month</span></h4>
              <ul>
                <li v-for="(s, i) in p.services" :key="i">
                  <i class="bx bx-check pr-2"></i>{{ s.service_name }}
                </li>
              </ul>

              <div data-app>
                <Subscribe @subscribe="getPackages()" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <!-- End Pricing Section -->
  </div>
</template>

<script>

import Subscribe from "./Subscribe.vue";
export default {
  data() {
    return {
      packages: {},
    };
  },
  components: {
         Subscribe,
      },
  methods: {
    getPackages() {
      this.$api
        .get(this.dynamic_route("package_services"))
        .then((res) => {
          this.packages = res.data.packageservices;
        })
        .catch((err) => {})
        .finally(() => {
          this.loading = false;
          this.text = "";
        });
    },
    Subscribe(data) {
      let packageservice = data.id;
      // return console.log(packageservice.id);
      // return console.log(packageservice);;
      this.$swal({
        icon: "warning",
        title: "Subscribe ",
        text: "Are you sure you want to subscribe to this package?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes !",
        cancelButtonText: "No, Exit!",
        cancelButtonColor: "#d92550",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.$api.post(this.dynamic_route(`subscribe/store/${packageservice}`))
          .then((res) => {
            if (res.data.status) {
              this.$toast.success(res.data.message, {
              position: "top-right",
              timeout: 5000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: true,
              closeButton: "button",
              icon: true,
              rtl: false,
              });
            }else{
              console.log(res.data.message);
              this.$toast.error(res.data.message, {
              position: "top-right",
              timeout: 5000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: true,
              closeButton: "button",
              icon: true,
              rtl: false,
              });
            }

           
          })
        }
      });
    },
    setCurrent(data) {
          this.current = data;
        },
   
  },
  mounted() {
    this.getPackages();
  },
};
</script>


<style scoped>
.services .row {
  padding-top: 40px;
}

.services .box {
  padding: 30px 40px;
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
  font-family: "Rubik" !important;
  font-size: 19px !important;
  padding-bottom: 12px;
}

.services ul i {
  color: #28a745;
  font-size: 24px !important;
  /* position: absolute; */
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
