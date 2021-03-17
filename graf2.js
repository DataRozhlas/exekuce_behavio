// Nastaveni max sirky grafu
//const chartWidthNehody = document.getElementById('vis-column-chart-simple').offsetWidth > 600
 // ? 600
  //: document.getElementById('vis-column-chart-simple').offsetWidth;

  function onChartLoad(e) {
    const plotBack = document.getElementById(e.renderTo.id).getElementsByClassName('highcharts-plot-background')[0];
    const shouldBeHeight = (plotBack.width.baseVal.value / 4) * 3.5;
    const heightDiff = shouldBeHeight - plotBack.height.baseVal.value;
    if (heightDiff > 0) {
      document.getElementById(e.renderTo.id).style.height = `${e.chartHeight + heightDiff}px`;
      e.reflow();
    }
  }
  
  Highcharts.chart('graf2', {
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
      text: 'Kdo má exekutora vybírat?',
      useHTML: true,
    },
    subtitle: {
      text: '',
      // + '<br><span style="color: #fff">.</span>',
      useHTML: true,
    },
    xAxis: {
      categories: ['věřitel',
      'dlužník',
      'soud',
      'bez odpovědi',],
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
        name: 'Index závažnosti',
        data: [{ y: 7, color: colors['2020'] },
          { y: 4, color: colors['2020'] },
          { y: 87, color: colors['2020'] },
          { y: 3, color: colors['2020'] },],
      },
    ],
  });
  