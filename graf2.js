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
      text: 'Na co by se měl stát zaměřit při podpoře?',
      useHTML: true,
    },
    subtitle: {
      text: 'Odborníci vybírali z deseti problémů, u kterých předpokládali největší výskyt',
      // + '<br><span style="color: #fff">.</span>',
      useHTML: true,
    },
    xAxis: {
      categories: ['Závislost člena rodiny na drogách',
      'Závislost člena rodiny na alkoholu',
      'Psychická onemocnění, deprese',
      'Fyzické, psychické vyčerpání rodičů',
      'Snížení příjmu',
      'Sociální vyloučení',
      'Fyzické, psychické násilí v rodině',
      'Ztráta zaměstnání',
      'Zadlužení, exekuce',
      'Ztráta bydlení'],
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
      href: 'https://nadacesirius.cz/soubory/aktuality/Prognoza-vyvoje-situace-pro-rodiny-s-detmi-a-podpurne-sluzby.pdf',
      text: 'Zdroj: Median a Nadace Sirius',
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
        data: [{ y: 12.24489796, color: colors['2020'] },
          { y: 16.32653061, color: colors['2020'] },
          { y: 22.44897959, color: colors['2020'] },
          { y: 38.7755102, color: colors['2020'] },
          { y: 40.81632653, color: colors['2020'] },
          { y: 54.08163265, color: colors['2019'] },
          { y: 56.12244898, color: colors['2020'] },
          { y: 71.42857143, color: colors['2019'] },
          { y: 72.44897959, color: colors['2020'] },
          { y: 83.67346939, color: colors['2020'] }],
      },
    ],
  });
  