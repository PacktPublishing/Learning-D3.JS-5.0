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

	// Call the function for the cities
	create_city_circles();
	
});


function create_city_circles(){
	d3.json('data.json').then(function(capitals_data){
		svg.selectAll("circle")
			.data(capitals_data)
			.enter()
			.append("circle")
			.style("fill", "red")
			.style("opacity", 0.6)
			.attr("cx", function(d){
				return projection([d.lon, d.lat])[0];
			})
			.attr("cy", function(d){
				return projection([d.lon, d.lat])[1];
			})
			.attr("r", function(d){
				return Math.sqrt(parseInt(d.population) * 0.0001);
			})
			.append("title")
			.text(function(d){
				return d.city;
			});

	});
}
