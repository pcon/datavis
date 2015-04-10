/*jslint browser: true, regexp: true, nomen: true */
/*global jQuery, $, Highcharts, _ */

jQuery.getJSON('data.json', function (data) {
	'use strict';

	var price_data = [],
		weight_data = [];

	_.forEach(data.products, function (product) {
		price_data.push([product.size, product.price]);
		weight_data.push([product.size, product.weight]);
	});

	jQuery('#priceChart').highcharts({
		chart: {
			zoomType: 'xy'
		},
		title: {
			text: 'Price vs Size'
		},
		subtitle: {
			text: 'Source: Best Buy 2015-04-09'
		},
		xAxis: {
			title: {
				enabled: true,
				text: 'Size (in)'
			},
			//type: 'logarithmic',
			startOnTick: true,
			endOnTick: true,
			showLastLabel: true
		},
		yAxis: {
			title: {
				text: 'Price (USD)'
			}
		},
		legend: {
			layout: 'vertical',
			align: 'left',
			verticalAlign: 'top',
			x: 100,
			y: 70,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
			borderWidth: 1
		},
		plotOptions: {
			scatter: {
				marker: {
					radius: 5,
					states: {
						hover: {
							enabled: true,
							lineColor: 'rgb(100,100,100)'
						}
					}
				},
				states: {
					hover: {
						marker: {
							enabled: false
						}
					}
				},
				tooltip: {
					headerFormat: '<b>{series.name}</b><br>',
					pointFormat: '{point.x} in, ${point.y}'
				}
			}
		},
		series: [{
			name: 'Price',
			type: 'scatter',
			color: 'rgba(223, 83, 83, .5)',
			data: price_data,
			regression: true,
			regressionSettings: {
				type: 'polynomial',
				color: 'rgba(223, 83, 83, .9)'
			}
		}]
	});

	jQuery('#weightChart').highcharts({
		chart: {
			zoomType: 'xy'
		},
		title: {
			text: 'Weight vs Size'
		},
		subtitle: {
			text: 'Source: Best Buy 2015-04-09'
		},
		xAxis: {
			title: {
				enabled: true,
				text: 'Size (in)'
			},
			//type: 'logarithmic',
			startOnTick: true,
			endOnTick: true,
			showLastLabel: true
		},
		yAxis: {
			title: {
				text: 'Weight (lbs)'
			}
		},
		legend: {
			layout: 'vertical',
			align: 'left',
			verticalAlign: 'top',
			x: 100,
			y: 70,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
			borderWidth: 1
		},
		plotOptions: {
			scatter: {
				marker: {
					radius: 5,
					states: {
						hover: {
							enabled: true,
							lineColor: 'rgb(100,100,100)'
						}
					}
				},
				states: {
					hover: {
						marker: {
							enabled: false
						}
					}
				},
				tooltip: {
					headerFormat: '<b>{series.name}</b><br>',
					pointFormat: '{point.x} in, {point.y} lbs'
				}
			}
		},
		series: [{
			type: 'scatter',
			name: 'Weight',
			color: 'rgba(119, 152, 191, .5)',
			data: weight_data,
			regression: true,
			regressionSettings: {
				type: 'polynomial',
				color: 'rgba(119, 152, 191, .9)'
			}
		}]
	});
});