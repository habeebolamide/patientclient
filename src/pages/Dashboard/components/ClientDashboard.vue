<template>
  <div data-app>
      <div class="card">
          <div class="card-body">
              <b-row>
                  <b-col cols="12" class="" md="8">
                    <h2 class="mb-4">Services Report</h2>
                      <VueElementLoading
                          :active="loading"
                          spinner="bar-fade-scale"
                          color="var(--primary)"
                      />
                      <vue-apex-charts
                        v-if="!loading"
                          class="shadow-sm mt-3"
                          type="line"
                          :height="number"
                          :options="revenueComparisonLine.chartOptions"
                          :series="revenueComparisonLine.series"
                      />
                  </b-col>
                  
      
                  <b-col md="4" cols="12" class="">
                      <h2>Statistics</h2>
                      <div class="">
                          <div class="card">
                              <div class="card-body p-0">
                              <div class="small-box">
                                  <div class="d-flex inner">
                                  <div>
                                      <h3> {{stats ? Number(stats.total_message).toLocaleString() : 0}}</h3>
                                      <p>Total Message Sent</p>
                                  </div>
                                  <span class="b-avatar badge-light-warning rounded-circle ml-auto" style="width: 58px; height: 58px;">
                                      <span class="b-avatar-custom">
                                      <svg data-v-254b7dbb="" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-watch"><circle data-v-254b7dbb="" cx="12" cy="12" r="7"></circle><polyline data-v-254b7dbb="" points="12 9 12 12 13.5 13.5"></polyline><path data-v-254b7dbb="" d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
                                      </span><!---->
                                  </span>
                                  </div>
                                  <!-- <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> -->
                              </div>
                              </div>
                          </div>
                      </div>
                      <div class="">
                          <div class="card">
                              <div class="card-body p-0">
                              <div class="small-box">
                                  <div class="d-flex inner">
                                  <div>
                                      <h3>{{stats ? Number(stats.total_group).toLocaleString() : 0}}</h3>
                                      <p>Total Group</p>
                                  </div>
                                  <span class="b-avatar badge-light-warning rounded-circle ml-auto" style="width: 58px; height: 58px;">
                                      <span class="b-avatar-custom">
                                      <svg data-v-254b7dbb="" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-watch"><circle data-v-254b7dbb="" cx="12" cy="12" r="7"></circle><polyline data-v-254b7dbb="" points="12 9 12 12 13.5 13.5"></polyline><path data-v-254b7dbb="" d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
                                      </span><!---->
                                  </span>
                                  </div>
                                  <!-- <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> -->
                              </div>
                              </div>
                          </div>
                      </div>
                  </b-col>
      
              </b-row>

          </div>
      </div>
    </div>
</template>
<script>
import Widget from '@/components/Widget/Widget';
import VueElementLoading from 'vue-element-loading'
import BigStat from './BigStat/BigStat';
import mock from '../mock';
import Bar from '../Bar'
import { Chart } from 'highcharts-vue';
// import { mapState, mapActions } from 'vuex';
import axios from "axios"
import VueApexCharts from 'vue-apexcharts'
import laravelVuePagination from 'laravel-vue-pagination'
export default {
name: 'Dashboard',
components: {
  Bar, Widget, BigStat, highcharts: Chart, VueElementLoading,VueApexCharts,laravelVuePagination
},
data() {
  return {
    mock,
    dialog:false,
    chartData: {name:["Product 1", "Product 2", "Product 3"], values: [0,20,5]},
    tableData: {},
    revenueComparisonLine: {
      series: [
        {
          name: 'This Month',
          data: [0, 0, 0, 0],
          // data: [11,2,4,30,9,5,3,56],
        },
       
        
      ],
      chartOptions: {
        chart: {
          toolbar: { show: false },
          zoom: { enabled: false },
          type: 'line',
          offsetX: -10,
        },
        stroke: {
          curve: 'smooth',
          dashArray: [0, 12],
          width: [4, 3],
        },
        legend: {
          show: false,
        },
        colors: ['#d0ccff', '#ebe9f1'],
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            inverseColors: false,
            gradientToColors: ['#ebe9f1','#ebe9f1'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
          },
        },
        markers: {
          size: 0,
          hover: {
            size: 5,
          },
        },
        xaxis: {
          labels: {
            style: {
              colors: '#b9b9c3',
              fontSize: '1rem',
            },
          },
          axisTicks: {
            show: false,
          },
          categories: ['0', '0', '0', '0'], //all services
          axisBorder: {
            show: false,
          },
          tickPlacement: 'on',
        },
        yaxis: {
          tickAmount: 5,
          labels: {
            style: {
              colors: '#b9b9c3',
              fontSize: '1rem',
            },
            formatter(val) {
              return val > 999 ? `${(val / 1000).toFixed(0)}k` : val
            },
          },
        },
        grid: {
          borderColor: '#e7eef7',
          padding: {
            top: -20,
            bottom: -10,
            left: 20,
          },
        },
        tooltip: {
          x: { show: false },
        },
      },
    },
    stats: {
    },
    items: [
        'not completed',
        'success',
        'declined',
      ],
    number:290,
    filter:{},
    closeOnContentClick: true,
    transactions: {},
    loading: false,
    loading2: false,
    loading3: false
  };
},
mounted(){
    this.getDashboardStats()
    // this.getDashboardChartData()
},
computed:{
},
methods: {
  getDashboardStats(){
    this.$api
          .get(this.dynamic_route('dashboard/stats'), {
      }).then((res)=> {
        // return console.log(res.data.stats);
        this.stats = res.data.stats
        this.revenueComparisonLine.series[0].data =  res.data.stats
        this.revenueComparisonLine.chartOptions.xaxis.categories =  res.data.services
      })
  },


  // getDashboardChartData(){
  //   this.loading = true
  //   this.$api
  //     .get(this.dynamic_route('dashboard/user/chart_data'), {
  //     }).then((res)=> {
  //       this.revenueComparisonLine.series[0].data =  res.data.data
  //       this.revenueComparisonLine.chartOptions.xaxis.categories =  res.data.services

  //       setTimeout(function(){
  //         this.loading = false;
  //       }, 1000)
        
  //     }).catch((err)=>{
  //       this.loading = false;
  //     })
  // },
},
};
</script>

<style src="../Dashboard.scss" lang="scss" />
<style scoped>
.card {
    border: none;
    margin-bottom: 1.5rem;
    padding: 0  !important;
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
}
.small-box {
  display: block;
  position: relative;
}
.small-box:hover {
  text-decoration: none;
}
.small-box>.inner {
  padding: 20px;
}
.small-box h3, .small-box p {
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
  color: rgba(0,0,0,.15);
  z-index: 0;
}
.small-box .icon>i.fa, 
.small-box .icon>i.fab, 
.small-box .icon>i.fad, 
.small-box .icon>i.fal, 
.small-box .icon>i.far, 
.small-box .icon>i.fas, 
.small-box .icon>i.ion {
  font-size: 70px;
  top: 20px;
}
.small-box .icon>i {
  position: absolute;
  right: 15px;
  top: 15px;  
  transition: transform .3s linear,-webkit-transform .3s linear;
}
.small-box>.small-box-footer {
  border-top: 1px solid #f7f7f7;
  display: block;
  padding: 3px 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  z-index: 10;
}
th, tr {
    white-space: nowrap;
}
.requests-table th, .requests-table-two th {
  font-weight: 550 !important;
}
.requests-table td, .requests-table-two td {
  font-weight: 400 !important;
  font-size: 13px;
}
.tables-basic .widget {
  border: none;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  border-radius: 0.7rem !important;
  background-color: #ffffff !important;
}
.requests-table-two td {
  font-size: 14px;
  vertical-align: middle;
  padding-top: 1px !important;
  padding-bottom: 1px !important;
}
</style>
