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
        text: 'Kterým službám má stát pomoci?',
        useHTML: true,
      },
      subtitle: {
        text: '87 procent odborníků považuje za nutné podpořit sociálně aktivizační služby pro rodiny s dětmi',
        // + '<br><span style="color: #fff">.</span>',
        useHTML: true,
      },
      xAxis: {
        categories: ['Střediska výchovné péče',
        'Ubytovny',
        'Raná péče',
        'Psychiatr',
        'Adiktologické služby',
        'Asistenční služby',
        'Manželské poradny',
        'Psycholog',
        'Azylové domy',
        'Sociálně aktivizační služby'],
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
        href: 'https://nadacesirius.cz/soubory/aktuality/Prognoza-vyvoje-situace-pro-rodiny-s-detmi-a-podpurne-sluzby.pdf',
        text: 'Zdroj: Median a Nadace Sirius',
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
          data: [{ y: 17, color: colors['2020'] },
            { y: 25, color: colors['2020'] },
            { y: 33, color: colors['2020'] },
            { y: 36, color: colors['2019'] },
            { y: 46, color: colors['2020'] },
            { y: 41, color: colors['2020'] },
            { y: 44, color: colors['2020'] },
            { y: 62, color: colors['2019'] },
            { y: 70, color: colors['2020'] },
            { y: 86, color: colors['2020'] }],
        },
      ],
    });