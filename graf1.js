//Nastaveni max sirky grafu
//const chartWidthNehody = document.getElementById('vis-column-chart-simple').offsetWidth > 600
//? 600
  //: document.getElementById('vis-column-chart-simple').offsetWidth;


  let chartWidth =
  document.getElementById("graf1").offsetWidth > 400
    ? 400
    : document.getElementById("graf1").offsetWidth;

let chartHeight =
document.getElementById("graf1").offsetHeight > 300
  ? 300
  : document.getElementById("graf1").offsetHeight;

  //function onChartLoad(e) {
    //const plotBack = document.getElementById(e.renderTo.id).getElementsByClassName('highcharts-plot-background')[0];
    //const shouldBeHeight = (plotBack.width.baseVal.value / 2) * 2;
    //const heightDiff = shouldBeHeight - plotBack.height.baseVal.value;
    //if (heightDiff > 0) {
     // document.getElementById(e.renderTo.id).style.height = `${e.chartHeight + heightDiff}px`;
     // e.reflow();
   // }
 // }
  
  Highcharts.chart('graf1', {
    chart: {
      type: 'bar',
      //width: chartWidthNehody,
      events: {
        load() {
          onChartLoad(this);
        },
      },
  
    },
    title: {
      text: 'Jak se má exekuce podle vás správně řešit?',
      useHTML: true,
    },
    subtitle: {
      text: 'Dlužník by měl splatit',
      // + '<br><span style="color: #fff">.</span>',
      useHTML: true,
    },
    xAxis: {
      categories: ['alespoň část dluhu',
      'všechny dluhy, ale ne další částky (penále, úroky)',
      'všechno včetně penále, nákladů, úroků',
    ],
      labels: {
        enabled: true,
      },
    },
    yAxis: {
      title: {
        text: '',
      },
      // labels: {
      //   formatter: function() {
      //     if (this.isLast) {
      //       return this.value + '<br>' +
      //                   '<span class="light-gray-text">jízd za</span>' + '<br>' +
      //                   '<span class="light-gray-text">návěstidla</span>'
      //     } else {
      //       return this.value
      //     }
      //   }
      // }
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: '',
      shared: false
    },
    exporting: {
      enabled: false,
    },
    credits: {
      href: '',
      text: 'Zdroj: Behavio',
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
        },
        // enableMouseTracking: false, // odkomentuj, pokud nechces tooltip
        pointPadding: 0,
      },
    },
    series: [
      {
        name: 'procent dotázaných souhlasí',
        data: [{ y: 19, color: colors['2020'] },
          { y: 63, color: colors['2020'] },
          { y: 16, color: colors['2020'] },],
      },
    ],
  });
  