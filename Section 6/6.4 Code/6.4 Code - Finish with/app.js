var data = [];

var barchart_width = 800;
var barchart_height = 400;
var bar_padding = 5;


for (var i = 0; i < 20; i++) {
	var num = Math.floor(d3.randomUniform(1,60)());
	data.push(num);
}

//create an SVG element
var svg = d3.select("#barchart")
		.append("svg")
		.attr("width", barchart_width)
		.attr("height", 400)

//Bind data and create the bars
svg.selectAll("rect")
	.data(data)
	.enter()
	.append("rect")
	.attr('x', function(d, i){
		return i*(barchart_width/data.length)
	})
	.attr('y', function(d){
		return barchart_height - d * 5;
	})
	.attr('width', barchart_width/data.length - bar_padding)
	.attr('height', function(d){
		return d * 5;
	})
	.attr('fill', 'grey');

// Adding labels
svg.selectAll('text')
	.data(data)
	.enter()
	.append('text')
	.text(function(d){
		return d;
	})
	.attr('x', function(d, i){
		return i*(barchart_width/data.length) + 
				 (barchart_width/data.length - bar_padding) / 2;
	})
	.attr('y', function(d){
		return barchart_height - d * 5 + 15;
	})
	.attr('font-size', 16)
	.attr('fill', 'white')
	.attr('text-anchor', 'middle');