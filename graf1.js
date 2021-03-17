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
      text: '',
      // + '<br><span style="color: #fff">.</span>',
      useHTML: true,
    },
    xAxis: {
      categories: ['Dlužník má splatit aspoň část dluhu',
      'Měl by splatit všechny dluhy, ale ne další částky(penále, úroky)',
      'Měl by splatit všechno včetně penále, nákladů, úroků.',
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
  