var slices = [100, 200, 300, 400];

var scale = d3.scaleLinear()
			.domain([
				d3.min(slices), d3.max(slices)
			])
			.range([10, 200]);