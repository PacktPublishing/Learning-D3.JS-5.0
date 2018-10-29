// data is an array of objects 
// with two properties: date and number
var data = [
	{ date: 2000, number: 23 },
	{ date: 2001, number: 25 },
	{ date: 2002, number: 28 },
	{ date: 2003, number: 30 },
	{ date: 2004, number: -31 },
	{ date: 2005, number: 35 },
	{ date: 2006, number: 38 },
	{ date: 2007, number: 42 },
	{ date: 2008, number: 45 },
	{ date: 2009, number: 51 },
	{ date: 2010, number: 54 },
	{ date: 2011, number: 56 },
	{ date: 2012, number: 57 },
	{ date: 2013, number: 60 },
	{ date: 2014, number: 61 },
	{ date: 2015, number: -62 },
	{ date: 2016, number: 64 },
	{ date: 2017, number: 67 },
	{ date: 2018, number: 69 },
	{ date: 2019, number: -75 },
	{ date: 2020, number: 78 },
];

// Date Formats
var time_parse  = d3.timeParse('%Y');  // Converting the year to the date object
var time_format = d3.timeFormat('%Y'); //Converting the date object to the year

var barchart_width  = 800;
var barchart_height = 600;
var padding         = 40;


// The date format
data.forEach(function(e,i) {
	data[i].date = time_parse(e.date);
});


// Creating scales
var x_scale = d3.scaleTime()
				.domain([
					d3.min(data, function(d) {
						return d.date;
					}),
					d3.max(data, function(d) {
						return d.date;
					})
				])
				.range([padding, barchart_width - padding]);
var y_scale = d3.scaleLinear()
				.domain([
					0, d3.max(data, function(d) {
						return d.number;
					})
				])
				.range([barchart_height - padding, padding]);


// Creating elements
var svg =  d3.select('#barchart')
			.append('svg')  
			.attr('height', barchart_height)
			.attr('width', barchart_width);

// Creating axis
// The x-axis
var x_axis = d3.axisBottom(x_scale)
			.ticks(5)
			.tickFormat(time_format);

// The y-axis
var y_axis = d3.axisLeft(y_scale)
			   .ticks(8);

// Draw and position the axis
svg.append('g')
   .attr('transform', 'translate(0,'+ (barchart_height-padding) +')')
   .call(x_axis);
svg.append('g')
   .attr('class', 'y-axis')
   .attr('transform', 'translate(' + padding +',0)')
   .call(y_axis);