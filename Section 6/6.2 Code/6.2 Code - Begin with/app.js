var data = [10, 15, 20, 25, 30]

d3.select("#barchart")
	.selectAll("div")
	.data(data)
	.enter()
	.append("div")
	.attr("class", "bar")
	.style ("height", function(d){
		return d + "px";
	});