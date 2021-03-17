// Nastaveni max sirky grafu
//const chartWidthNehody = document.getElementById('vis-column-chart-simple').offsetWidth > 600
 // ? 600
  //: document.getElementById('vis-column-chart-simple').offsetWidth;

  function onChartLoad(e) {
    const plotBack = document.getElementById(e.renderTo.id).getElementsByClassName('highcharts-plot-background')[0];
    const shouldBeHeight = (plotBack.width.baseVal.value / 4) * 3.2;
    const heightDiff = shouldBeHeight - plotBack.height.baseVal.value;
    if (heightDiff > 0) {
      document.getElementById(e.renderTo.id).style.height = `${e.chartHeight + heightDiff}px`;
      e.reflow();
    }
  }
  
  Highcharts.chart('graf3', {
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
      text: 'Kdo má exekuce vykonávat?',
      useHTML: true,
    },
    subtitle: {
      text: 'Variantu, kdy exekutora nevykonává soukromý podnikatel, podporuje 78 procent Čechů',
      // + '<br><span style="color: #fff">.</span>',
      useHTML: true,
    },
    xAxis: {
      categories: ['soukromý podnikatel zastupující věřitele',
      'soukromý podnikatel zastupující stát',
      'zaměstnanec soudu či státu',
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
        name: 'procent dotázaných souhlasí',
        data: [{ y: 7, color: colors['2020'] },
          { y: 5, color: colors['2020'] },
          { y: 78, color: colors['2019'] },
          { y: 10, color: colors['2020'] },],
      },
    ],
  });
  