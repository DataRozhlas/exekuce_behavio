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
  
  Highcharts.chart('graf4', {
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
        text: 'Co si spojíte s exekutory?',
        useHTML: true,
      },
      subtitle: {
        text: 'dotázaní mohli volit více možností',
        // + '<br><span style="color: #fff">.</span>',
        useHTML: true,
      },
      xAxis: {
        categories: ['vydělávají na cizím neštěstí',
        'přemrštěné odměny',
        'nevěřím jim',
        'nelítostní podnikatelé',
        'zkorumpovaní',
        'jen dělají svou práci',
        'nečestní',
        'profese jako každá jiná',
        'vazby na politiky',
        'bohatí',
        'nespravedlivě je napadají',
        'prosazují spravedlnost',
        'nedocenění',],
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
        valueSuffix: 'procent dotázaných souhlasí',
        shared: true
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
          pointPadding: 1,
        },
      },
      series: [
        {
          name: 'procent dotázaných souhlasí',
          data: [{ y: 72, color: colors['2020'] },
            { y: 56, color: colors['2020'] },
            { y: 39, color: colors['2019'] },
            { y: 38, color: colors['2020'] },
            { y: 33, color: colors['2020'] },
            { y: 33, color: colors['2018'] },
            { y: 28, color: colors['2020'] },
            { y: 21, color: colors['2018'] },
            { y: 19, color: colors['2020'] },
            { y: 11, color: colors['2020'] },
            { y: 10, color: colors['2017'] },
            { y: 9, color: colors['2017'] },
            { y: 3, color: colors['2017'] },
        ],
        },
      ],
    });