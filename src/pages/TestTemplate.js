import React, { Component } from 'react'
import './../css/test-template.css'

class TestTemplate extends Component {
  render() {
    return(
      <div className='content'>
        <h1 className='title'>Template for Looking at Themes</h1>
        <div>
          Recently, I have found myself leading a Haskell programming group in Santa
          Fe, New Mexico. These meetings have been a great opportunity to actually
          learn to apply Haskell. Included here are some of my notes.
        </div>
        <div className='card'>
          <h2><a href="./haskell_on_jupyter/HTF.html">Linked Title H2</a></h2>
          Having a reliable test framework is an amazing thing. Here is a small
          collection of notes describing some of the features and organizational
          structure of the <code>SOME CODE THAT YEAH</code>​ (HTF). Most of the
          examples are designed for my recent work developing a ray tracing algorithm.
        </div>
      </div>
    )
  }
}

export default TestTemplate;
