import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import MathJax from 'react-mathjax'
import './../../css/main.css'

import { code1, code2, code3 } from './../../js/havelHakimiCode.js'
import CottonWood from './../../svg/CottonWood.jsx'

class HavelHakimi extends Component {
  render() {
    const tournamentUrl = "https://github.com/jonzingale/Haskell/blob/master/tournament/Documentation/Graph.ipynb"

    return(
      <div className='theme-container'>
        <header>{this.props.title}</header>

        <aside className='sidebar-left'>
          <h1>Swiss-McMahon Tournaments</h1>

          <div className='sidebar-content'>
            TODO: Write this for a general audience. Express the idea of
            connecting the Erdős–Gallai theorem to Swiss-McMahon Tournaments.
            Let the link to the Jupyter notebook satisfying further readers.
          </div>
        </aside>

        <article>
          <h2 className='title'>{this.props.title}</h2>

          <CottonWood />

          <div className='introduction'>
            The Graph module offers data structures and methods for working with
            directed graphs in Haskell. The library is then extended to working
            examples of the Havel-Hakimi algorithm.
          </div>

          <div className='theme-card'>
            <code><ReactMarkdown source={code1()} /></code>

            The above data types Vertex, Edge and Graph are the heart of Graph
            module.<br></br>
            Each comes with some default methods for accessing sub-types.<br></br>
            Defined explicitly,<p/>
            <code>
            vertices :: Graph -> [Vertex]<br></br>
            degreesToVerts :: Degrees -> [Vertex]<p/>
            </code>
            Vertices returns the vertices for a graph, while degreesToVerts
            allows us to build a vertex set with expectations for the degree
            of each vertex. Next, Some instances of Show are a included to keep
            things pretty. Lastly, Ord is extended to Vertex so that we can sort
            on them.<p/>
            Now the work horse functions:
          </div>

          <div className='theme-card'>
            <code><ReactMarkdown source={code2()} /></code>

            <MathJax.Provider>
            vertsToGraph relies on some not so obvious methods, hhsort and
            rebuildDegs. The first is a specialized quicksort which orders
            vertices from largest degree to smallest. The algorithm deincrements
            on the degrees given for the vertices, and so rebuildDeg is needed
            to rebuild the degrees of each vertex. The method degreesToGraph
            checks that a given set of degrees is graphic in the sense of
            Erdős–Gallai, via the Havel-Hakimi algorithm. BadGraph is returned
            if the given set of degrees is not graphic, and returns a realization
            if the set of degrees is graphic. For example a list
            of <MathJax.Node inline formula={'n+1'} /> n’s represents
            an n-simplex in our scheme.<p/>
            </MathJax.Provider>

            <code><ReactMarkdown source={code3()} /></code>

            We then see that a 4-simplex is in fact graphic.<p/>

            For the gritty details see this project on GitHub:
            <a href={tournamentUrl}> Havel-Hakimi</a>.
          </div>
        </article>

        <aside className='sidebar-right'>.</aside>
      </div>
    )
  }
}

export default HavelHakimi;
