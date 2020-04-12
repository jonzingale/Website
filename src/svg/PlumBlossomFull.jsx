import React, { Component } from 'react'
import * as d3 from 'd3'

// FullPage version of PlumBlossom
class PlumBlossom extends Component {

  componentDidMount() {
    var svg = d3.selectAll('#plum-blossom')
    var svg_width = svg.style('width').replace('px','')
    var svg_height = svg.style('height').replace('px','')

    var xScale = d3.scaleLinear()
      .domain([0, 1]).range([100, 750])

    var yScale = d3.scaleLinear()
      .domain([0, 1]).range([0, svg_height])

    // background box
    svg.append('rect')
      .attr('class', 'background-box')
      .attr('width','100%')

    var lineGenerator = d3.line().curve(d3.curveBasis)
    var pathData, points

    // abstract line
    points = [[0, 360],[100, 400],[300, 380],[700, 340],[svg_width, 380]];
    pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', 'black')
    .attr('fill', 'none')

    // tree lines
    lineGenerator = d3.line()
    points = [[700, 440], [680, 280], [500, 220], [400, 300]];
    pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', '#2c202f')
    .attr('stroke-width', 30)
    .attr('fill', 'none')

    points = [[710, 438], [690, 280]];
    pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', '#6f4891')
    .attr('stroke-width', 10)
    .attr("opacity", 0.5)

    points = [[400, 160], [300, 120]];
    pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', '#23242b')
    .attr('stroke-width', 12)
    .attr('fill', 'none')

    points = [[520, 280], [700, 180], [500, 110]];
    pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', '#23242b')
    .attr('stroke-width', 17)
    .attr('fill', 'none')

    points = [[680, 280], [400, 160], [230, 300]];
    pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', '#23242b')
    .attr('stroke-width', 17)
    .attr('fill', 'none')

    // tree circles
    var data = []
    for (let i=0; i < 300; i++) { data.push(i)}

    svg.append("g")
      .attr("class", "blue-circles")
      .selectAll("circle")
      .data(data).enter().append("circle")
        .attr("r", d => Math.random()*30 )
        .attr('cy', d => yScale(Math.random())/2.2 + 40)
        .attr('cx', d => xScale(Math.random()))
        .attr('fill', d => d3.interpolateBlues(d/1200) )
        .attr("opacity", d => Math.random() + 0.7 )
        .attr('stroke-width', '1.5px')
        .style("filter", d => d < 200 ? "url(#blur)" : ""); // blur

    // blur
    var defs = svg.append("defs")
    defs.append("defs")
      .append("filter")
      .attr("id", "blur")
      .append("feGaussianBlur")
      .attr("stdDeviation", 3)

    data = []
    for (let i=0; i < 150; i++) { data.push(i)}

    svg.append("g")
      .attr("class", "pink-circles")
      .selectAll("circle")
      .data(data).enter().append("circle")
        .attr("r", 3)
        .attr('cy', d => yScale(Math.random())/2.2 + 40)
        .attr('cx', d => xScale(Math.random())*0.9 + 60)
        .attr('fill', d => d3.interpolateReds(d/200) )
        .attr('stroke-width', '1.5px')
  }

  render(){
    return(<svg id='plum-blossom' width='100%' height='600px'></svg>)
  }
}

export default PlumBlossom;
