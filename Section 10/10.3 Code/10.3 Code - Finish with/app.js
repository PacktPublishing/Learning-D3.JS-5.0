var barchart_width = 800;
var barchart_height = 400;

// Projection
var projection = d3.geoMercator()
					.scale([600])
					.translate([barchart_width/3, barchart_height+350]);
var path = d3.geoPath(projection);

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
		.attr('d', path)
		.attr('fill', 'grey')
		.attr('stroke', 'black')
		.attr('stroke-width', 3);
});
