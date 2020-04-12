import React, { Component } from 'react'
import * as d3 from 'd3'

class BeanSoup extends Component {

  componentDidMount() {
    var svg = d3.selectAll('#bean-soup')
    var svg_width = svg.style('width').replace('px','')

    var flaxScheme = ['#d0dd09', '#9ee109', '#bfee3c']
    var beanScheme = ['#b25f27', '#dd8b53', '#e5d3c6', '#94613f']

    // beans
    var data = []
    for (let i=0; i < 300; i++) { data.push(i) }

    svg.append("g")
      .attr("class", "beans")
      .selectAll("circle")
      .data(data).enter().append("circle")
        .attr('cx', function(d) {
          return Math.floor(Math.random() * svg_width)
        })
        .attr('cy', function(d) {
          return Math.floor(Math.random() * 400)
        })
        .attr("r", function(d) {
          return Math.floor(Math.random() * 50)
        })
        .attr('fill', function(d) {
          let r = Math.floor(Math.random() * beanScheme.length)
          return beanScheme[r]
        })
      .style("filter", "url(#blur)");

    // blur
    var defs = svg.append("defs")
    defs.append("defs")
      .append("filter")
      .attr("id", "blur")
      .append("feGaussianBlur")
      .attr("stdDeviation", 3)

    // opaque layer
    svg.append('rect')
      .attr('class', 'opaque-layer')
      .attr('stroke','#777')
      .attr('fill','#e1c4bd')
      .attr('width','100%')
      .attr('opacity', 0.5)

    function rando(lim) { return Math.floor(Math.random() * lim) }

    // oil bubbles
    data = []
    for (let i=0; i < 100; i++) { data.push(i) }

    svg.append("g")
      .attr("class", "oil-bubbles")
      .selectAll("circle")
      .data(data).enter().append("circle")
        .attr('id', function(d, i) { return i })
        .attr("r", function(d) { return rando(20) })
        .attr('cx', function(d) { return rando(svg_width) })
        .attr('cy', function(d) { return rando(400) })
        .attr('fill', function(d) { return flaxScheme[rando(flaxScheme.length)] })
        .attr('stroke-width', '1.5px')
        .attr('stroke', 'yellow')
        .attr('opacity', 0.5)
  }

  render(){
    return(
      <div className='card'>
        <svg id='bean-soup' width='100%' height='400px'></svg>
      </div>
    )
  }
}

export default BeanSoup;
