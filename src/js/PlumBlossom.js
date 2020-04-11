import React, { Component } from 'react'
import * as d3 from 'd3'

class PlumBlossom extends Component {

  componentDidMount() {
    var svg = d3.selectAll('#plum-blossom')
    var svg_width = svg.style('width').replace('px','')
    var svg_height = svg.style('height').replace('px','')

    var xScale = d3.scaleLinear()
      .domain([0, 1]).range([0, svg_width])

    var yScale = d3.scaleLinear()
      .domain([0, 1]).range([0, svg_height])

    function rando(lim) { return Math.floor(Math.random() * lim) }

    // background box
    svg.append('rect')
      .attr('class', 'background-box')
      .attr('x', 1).attr('y', 0)
      .attr('stroke','#777')
      .attr('stroke-width','0.3em')
      // .attr('fill','#f5f2e3')
      .attr('fill','#b0a79e')
      .attr('width','100%')

    var lineGenerator = d3.line();

    var points = [[700, 340], [680, 180], [500, 120], [400, 200]];
    var pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', 'black')
    .attr('stroke-width', 30)
    .attr('fill', 'none')

    points = [[520, 180], [700, 80], [500, 10]];
    var pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', 'black')
    .attr('stroke-width', 20)
    .attr('fill', 'none')

    points = [[680, 180], [400, 60], [230, 200]];
    var pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', 'black')
    .attr('stroke-width', 20)
    .attr('fill', 'none')

    // circles
    var data = []
    for (let i=0; i < 300; i++) { data.push(i)}

    svg.append("g")
      .attr("class", "blue-circles")
      .selectAll("circle")
      .data(data).enter().append("circle")
        .attr('id', function(d, i) { return i })
        .attr("r", function(d) { return Math.random()*25 })
        .attr('cy', function(d) { return yScale(Math.random())/1.7 })
        .attr('cx', function(d) { return xScale(Math.random())/1.7 + svg_width/7 })
        .attr('fill', function(d) { return d3.interpolateBlues(d/1000) })
        .attr("opacity", function(d) { return Math.random() + 0.7 })
        // .attr('stroke', 'black')
        .attr('stroke-width', '1.5px')

    data = []
    for (let i=0; i < 150; i++) { data.push(i)}

    svg.append("g")
      .attr("class", "pink-circles")
      .selectAll("circle")
      .data(data).enter().append("circle")
        .attr('id', function(d, i) { return i })
        .attr("r", 3)
        .attr('cy', function(d) { return yScale(Math.random())/2 })
        .attr('cx', function(d) { return xScale(Math.random())/2 + svg_width/6 })
        .attr('fill', function(d) { return d3.interpolateReds(d/200) })
        // .attr('stroke', 'black')
        .attr('stroke-width', '1.5px')
  }

  render(){
    return(
      <div className='card'>
        <svg id='plum-blossom' width='100%' height='400px'></svg>
      </div>
    )
  }
}

export default PlumBlossom;
