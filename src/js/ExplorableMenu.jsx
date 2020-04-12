import React, { Component } from 'react'
import * as d3 from 'd3'

class ExplorableMenu extends Component {

  componentDidMount() {
    const yHeight = 60
    const modelColors = [
      '#8c510a','#bf812d','#dfc27d', '#FFD700',
      '#80cdc1',
      '#35978f',
      '#01665e',
      '#435084',
      // '#2E48A5',
      '#613375',
      '#9C3DF4'
    ]

    const urlStub = 'https://jonzingale.github.io'

    const data =
      [ {'id': 'Contagion Network', 'url': "/explorables/epidemics/epidemics.html"},
        {'id': 'Schelling Segregation', 'url': "/explorables/schelling/schelling.html"},
        {'id': 'Nagel-Schreckenberg Traffic', 'url': "/explorables/nagelschreckenberg/nagelSchreckenberg.html"},
        {'id': 'Cellular Automata', 'url': "/explorables/briansBrain/briansBrain.html"},
        {'id': 'The Lorenz System', 'url': "/explorables/lorenz/lorenz.html"},
        // {'id': 'Ann Nitze Hiking Trails', 'url': "/maps/hiking.html"},
        {'id': 'Dynamical Monads', 'url': "/dynamical-monads/dynamical.html"},
        {'id': 'Primitive Roots', 'url': "/galois/index.html"},
        {'id': 'Covid 19 Visualizer', 'url': "/covid19/covid19.html"},
        {'id': 'Deep Image Networks', 'url': 'neural-nets'},
        // {'id': 'Color Summaries', 'url': "/colorSummaries/index.html"},
      ]

    var col = d3.select('#buttons')
                 .attr('height', 550).attr('width', 470)

    var modelLinks = col.selectAll("text").data(data).enter()

    modelLinks.append('g')
        .selectAll("circle").data(data)
        .enter().append("circle")
          .attr('id', function(d) { return d.id })
          .attr("cx", 17).attr("r", 16)
          .attr("cy", function(d, i) { return i*yHeight + 30 })
          .attr('fill', function(d, i) { return modelColors[i] })

    modelLinks.append('a')
        .attr('href', function(d) { return urlStub+d.url })
        .append('text').attr('class', 'menu').attr('x', 43)
        .attr('y', function(d, i) { return i*yHeight + 41})
        .attr('font-family', 'Nunito Sans')
        .attr("font-size", "30px")
        .text(function(d) {return d.id})
  }

  render(){
    return(<svg id='buttons' width='100%'></svg>)
  }
}

export default ExplorableMenu;
