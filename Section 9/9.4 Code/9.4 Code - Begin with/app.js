var treeData =
	{
    "name": "Level 1",
    "children": [{ 
        "name": "Level 2: A",
        "children": [
          { "name": "Level 3: A" },
          { "name": "Level 3: B" }
        ]},
      	{ "name": "Level 2: B" }
    ]};


// Set the dimensions and padding of the diagram
var padding = 60,
    barchart_width = 800,
    barchart_height = 600;

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
var svg = d3.select("#barchart")
			.append("svg")
    		.attr("width", barchart_width + padding)
    		.attr("height", barchart_height + padding)
  			.append("g")
    		.attr('transform', 'translate(' + padding +',0)');

var i = 0,
    duration = 750,
    root;

// declares a tree layout and assigns the size
var treemap = d3.tree().size([barchart_height, barchart_width]);

// Assigns parent, children, barchart_height, depth
root = d3.hierarchy(treeData, function(d) { return d.children; });
root.x0 = barchart_height / 2;
root.y0 = 0;

update(root);

function update(source) {
	var treeData = treemap(root);

	var nodes = treeData.descendants(),
		links = treeData.descendants().splice(1);

	nodes.forEach(function(d){
		d.y = d.depth * 180;
	});

	// ------------------- NODES --------------------------

	var node = svg.selectAll('g.node')
				   .data(nodes,function(d) {
				   		return d.id || (d.id = ++i);
				   });

	var nodeEnter = node.enter()
						.append('g')
						.attr('class', 'node')	
						.attr('transform', function(d) {
							return 'translate(' + source.y0 + ',' + source.x0 + ')';
						})
						.on('click', click);

	// Add circle for the nodes
	nodeEnter.append('circle')
			 .attr('class', 'node')
			 .attr('r', 6);

	// Add labels for the nodes
	nodeEnter.append('text')
			 .attr('x', function(d) {
			 	return d.children || d._children ? -13 : 13;
			 })						   
			 .attr('text-anchor', function(d) {
			 	return d.children || d._children ? 'end' : 'start';
			 })
			 .text(function(d) {
			 	return d.data.name;
			 });


}

