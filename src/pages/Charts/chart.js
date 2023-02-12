// import {Line} from 'vue-chartjs'

// export default {
//   props :{
//     sentiments:Array
//   },

//   extends: Line,
//   mounted() {
//     console.log(this.sentiments);
//     this.renderChart({
//       labels: ['Negative', 'Neutral', 'Postive'],
//       datasets: [
//         {
//           label: 'Sentiments',
//           fill: false,
//           lineTension: 0.1,
//           backgroundColor: '#002b49',
//           borderColor: '#002b49',
//           borderCapStyle: 'round',
//           borderDash: [],
//           borderDashOffset: 0.0,
//           borderJoinStyle: 'miter',
//           pointBorderColor: '#002b49',
//           pointBackgroundColor: '#ffffff',
//           pointBorderWidth: 2,
//           pointHoverRadius: 10,
//           pointHoverBackgroundColor: '#002b49',
//           pointHoverBorderColor: '#002b49',
//           pointHoverBorderWidth: 2,
//           pointRadius: 1,
//           pointHitRadius: 10,
//         //   data: [55,45,30]
//           data : this.sentiments
//         }
//       ]
//     }, {responsive: true, maintainAspectRatio: false})

//   }
// }


import {Bar} from 'vue-chartjs'

export default {
  props :{
    sentiments:Array
  },

  extends: Bar,
  mounted() {
    // console.log(this.sentiments);
    this.renderChart({
      labels: ['Negative', 'Neutral', 'Postive'],
      datasets: [
        {
          label: 'Sentiments',
          backgroundColor: [
            '#FC6E51',
            '#1ABC9C',
            '#8E44AD'
          ],
          borderColor: [
            '#FC6E51',
            '#1ABC9C',
            '#8E44AD'
          ],
          // borderWidth: 1,
          data: this.sentiments
        }
      ]
    }, {
      type: 'bar',
      responsive: true,
      maintainAspectRatio: false
    })
  }
}
