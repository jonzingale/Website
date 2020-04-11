import React, { Component } from 'react'
import * as d3 from 'd3'

class TreeTemplate1 extends Component {

  componentDidMount() {
    var lights = [0,1,0,0,1,1,1,1]

    var svg = d3.selectAll('#tree1')
    var svg_width = svg.style('width').replace('px','')
    var svg_height = svg.style('height').replace('px','')

    var xScale = d3.scaleLinear()
      .domain([0, 1]).range([0, svg_width])

    var yScale = d3.scaleLinear()
      .domain([0, 1]).range([0, svg_height])

    // background box
    svg.append('rect')
      .attr('class', 'background-box')
      .attr('x', 1).attr('y', 0)
      .attr('stroke','#777')
      .attr('stroke-width','0.3em')
      .attr('fill','#f5f2e3')
      .attr('width','100%')

    var points = [
      [0  , 80],
      [100, 300],
      [300, 200],
      [500, 250],
      [700, 240],
      [900, 280]
    ];

    var lineGenerator = d3.line();
    var pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', 'black')
    .attr('fill', 'none')

    points = [[0, 0],[600, 180],[600, 250],[0, 400]];
    var pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', 'black')
    .attr('stroke-width', '2px')
    .attr('fill', 'none')

    function yScale(i) { return(i*80 + 180) }
    var data = []
    for (let i=0; i < 6; i++) { data.push([i*80 + 80, 0]) }

    svg.selectAll('horizontal-lines')
       .data(data).enter()
       .append("path")
       .attr('stroke', 'black')
       .attr('stroke-width', 20)
       .attr('fill', 'none')
       .attr('d', function(d, i) {
          let pathData = lineGenerator([d, [i*80 + 80, svg_width*0.3 - i*20 + 60]])
          return(pathData)
        })

    svg.selectAll('horizontal-lines')
       .data(data).enter()
       .append("path")
       .attr('stroke', '#ddd')
       .attr('stroke-width', 10)
       .attr('fill', 'none')
       .attr('d', function(d, i) {
          let pathData = lineGenerator([d, [i*80 + 75, svg_width*0.3 - i*20 + 60]])
          return(pathData)
        })

    // circles
    var data = []
    for (let i=0; i < 300; i++) { data.push(i)}

    svg.append("g")
      .attr("class", "blue-circles")
      .selectAll("circle")
      .data(data).enter().append("circle")
        .attr("r", function(d) { return Math.random()*25 })
        .attr('cy', function(d) { return yScale(Math.random())/2 - 50*(d/300)})
        .attr('cx', function(d) { return xScale(Math.random()) / 2 })
        .attr('fill', function(d) { return d3.interpolateGreens(d/1000) })
        .attr("opacity", function(d) { return Math.random() + 0.7 })
        .attr('stroke', 'black')
        .attr('stroke-width', '1.5px')
  }

  render(){
    return(
      <div className='card'>
        <svg id='tree1' width='100%' height='400px'></svg>
      </div>
    )
  }
}

export default TreeTemplate1;
