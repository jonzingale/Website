import React, { Component } from 'react'
import * as d3 from 'd3'

class NoteBook extends Component {

  componentDidMount() {
    var svg = d3.selectAll('#notebook')
    var svg_width = svg.style('width').replace('px','')
    var svg_height = svg.style('height').replace('px','')

    svg.append('rect')
      .attr('id','paper-box')
      .attr('stroke', '#777')
      .attr('width','100%')
      .attr('fill','#e3dedd')

    // Paper
    svg.append('rect')
      .attr('y', 100)
      .attr('class', 'paper')
      .attr('width','70%')
      .attr('fill','white')

    // Lines
    function yScale(i) { return(i*40 + 180) }
    var data = []
    for (let i=0; i < 13; i++) { data.push([0, yScale(i)]) }

    var lineGenerator = d3.line();

    svg.selectAll('horizontal-lines')
       .data(data).enter()
       .append("path")
       .attr('stroke', '#754d3d')
       .attr('d', function(d, i) {
          let pathData = lineGenerator([d, [svg_width*0.7, yScale(i)]])
          return(pathData)
        })

    data = [[100, 100], [100, svg_height]]
    svg.append('path').attr('d', lineGenerator(data))
       .attr('stroke', '#ddd')

    // Text
    data = ["Notebook: A home for explorations.", "",
            "Bean Soup", "Ornamental Plum", "Cottonwood"]
    svg.selectAll('notes').data(data).enter()
      .append('text').text(d => d)
      .attr('id', 'lights-label')
      .attr('x', 120)
      .attr('y', (d,i) => 215 + i*41 )
  }   

  render(){
    return(
      <div className='card'>
        <svg id='notebook' width='100%' height='700px'></svg>
      </div>
    )
  }
}

export default NoteBook;
