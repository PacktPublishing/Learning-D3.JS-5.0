var data = [];

for (var i = 0; i < 20; i++) {
	var num = Math.floor(d3.randomUniform(1,60)());
	data.push(num);
}

//create an SVG element
var svg = d3.select("#barchart")
		.append("svg")
		.attr("width", 800)
		.attr("height", 400)

//Bind data and create the bars
svg.selectAll("rect")
	.data(data)
	.enter()
	.append("rect")
	.attr('x', function(d, i){
		return i*(1000/data.length)
	})
	.attr('y', 0)
	.attr('width', 800/data.length - 5)
	.attr('height', function(d){
		return d;
	});