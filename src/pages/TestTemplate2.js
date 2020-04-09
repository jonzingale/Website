import React, { Component } from 'react'
import './../css/test-template2.css'

class TestTemplate2 extends Component {
  render() {
    return(
      <div className='container'>
        <header>This is the Header</header>

        <aside className='sidebar-left'>
          <h1>This is the Margin Header.</h1>

          <div className='card'>
            This a Sidebar for putting who knows what?
          </div>
        </aside>

        <article>
          <h2 className='title'>Template for Looking at Themes</h2>

          <div className='content'>
            Recently, I have found myself leading a Haskell programming group in Santa
            Fe, New Mexico. These meetings have been a great opportunity to actually
            learn to apply Haskell. Included here are some of my notes.
          </div>

          <div className='card'>
            <h2><a href="./haskell_on_jupyter/HTF.html">Haskell Test Framework</a></h2>
            Having a reliable test framework is an amazing thing. Here is a small
            collection of notes describing some of the features and organizational
            structure of the <code>Haskell Test Framework</code>​ (HTF). Most of the
            examples are designed for my recent work developing a ray tracing algorithm.
          </div>
        </article>

        <aside className='sidebar-right'>this is another sidebar</aside>
        <footer>This is the Footer</footer>
      </div>
    )
  }
}

export default TestTemplate2;
