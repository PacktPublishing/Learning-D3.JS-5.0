var el = d3.select('body')
		.append('p')
		// .attr('class', 'className')
		// .attr('class', 'className2')
		.text('this is a text')
		.classed('className', true)
		.classed('className2', true)
		.style('color', 'orange');