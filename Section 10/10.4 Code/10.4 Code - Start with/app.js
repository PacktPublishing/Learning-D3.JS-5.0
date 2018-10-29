var barchart_width = 800;
var barchart_height = 600;

// Projection
var path = d3.geoPath()
			 .projection(d3.geoMercator());

var svg =  d3.select('#barchart')
			.append('svg')
			.attr('height', barchart_height)
			.attr('width', barchart_width);

// Loading the data
d3.json('data.json').then(function(data){
	svg.selectAll('path')
		.data(data.features)
		.enter()
		.append('path')
		.attr('d', path);
});
