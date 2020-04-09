import React, { Component } from 'react'
import './../css/test-template.css'

class TestTemplate extends Component {
  render() {
    return(
      <div className='main'>
        <div className='header'>This is the Header</div>
        <div className='row'>
          <div className='column side'>
            <h1>This is the Margin.</h1>
            <div className='card'>
              <h2><a href="./haskell_on_jupyter/HTF.html">Haskell Test Framework</a></h2>
              Having a reliable test framework is an amazing thing. Here is a small
              collection of notes describing some of the features and organizational
              structure of the <code>Haskell Test Framework</code>​ (HTF). Most of the
              examples are designed for my recent work developing a ray tracing algorithm.
            </div>
          </div>
          
          <div className='column middle'>
            <h1 className='title'>Template for Looking at Themes</h1>

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
            <div className='card'>
              <h2><a href="./haskell_on_jupyter/listable.html">Listable</a></h2>
              Here we write some methods for treating Integers as lists in the sense that
              we can define notions of <code>take, drop, (:), (++), and unit </code>
              on Integers. From these we derive further functionality, namely:
              <code>length, reverse, head, tail, and (!!)</code>. Since clearly both
              Integers and Lists are both instances of the same functionality, we define
              a class <a href="./haskell_on_jupyter/listable.html"> Listable </a>
              handling both.
            </div>

          </div>
        </div>

        <div className='footer'>This is the Footer</div>
      </div>
    )
  }
}

export default TestTemplate;
