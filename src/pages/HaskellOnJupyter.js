import React, { Component } from 'react'

// TODO:
// - Rename: HaskellCoding
// - develop Card components
// - abstract out links

class HaskellOnJupyter extends Component {
  render() {
      return(
      <div className='content'>
        <h1 className='title'>Haskell on Jupyter</h1>

        <img className="header-img" alt='xkcd' 
          src='/images/haskelltospreadsheet.png'
        />
        <div>
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
          a class <a href="./haskell_on_jupyter/listable.html">Listable</a>
          handling both.
        </div>
        <div className='card'>
          <h2><a href="./haskell_on_jupyter/sortable.html">Sortable</a></h2>
          Now that there is a Listable class, we extend Listable things to be Sortable
          things. Put another way, given <code>(Ord a, Listable a) => a</code> we
          define a class whose instances can be sorted via <code>sort</code> and
          shuffled via <code>shuffle</code>. The sort is a quick-sort and the shuffle
          is a key-shuffle.
        </div>
        <div className='card'>
          <h2><a href="./haskell_on_jupyter/vector.html">Vector</a></h2>
          <a href="./haskell_on_jupyter/vector.html">Vector</a> is a module designed to
          facilitate mathematical vector operations in the Hermitian style. For
          simplicity, I model only three-dimensional vectors but allow the underlying
          fields to be arbitrary. Complex and Double serve as example fields
          throughout.
        </div>
        <div className='card'>
          <h2><a href="./haskell_on_jupyter/abelian_actions.html">Abelian Actions on a Zipper</a></h2>
          The goal here is to write an <code>Action</code> class which depends on an
          <code>Abelian</code> data type and acts on a <code>Zipper</code> type.
          Composition of left Abelian actions <code>Ab x G -> G</code> and evaluation
          are then given in the instance declaration for
          <code>Action (Zipper v)</code>.
        </div>
        <div className='card'>
          <h2><a href="./haskell_on_jupyter/havelHakimi.html">Havel Hakimi Graphs</a></h2>
          The Swiss-McMahon tournament can be seen as a special case of the
          Erdős–Gallai theorem and as such, the Havel-Hakimi algorithm can be used to
          produce graphic tournaments. This module is designed to facilitate the
          production of these graphs.
        </div>
        <div className='card'>
          <h2><a href="./haskell_on_jupyter/umeboshi.html">Umeboshi</a></h2>
          <a href="./haskell_on_jupyter/umeboshi.html">Umeboshi</a> is a drum machine
          written in Haskell and built from a Roland 808 sound bank. The drum machine
          is designed to facilitate poly-rhythmic percussion in non-standard time
          signatures. It relies heavily <code>Unboxed Vector</code> types and
          the <code>Data.WAVE</code> library.
        </div>
      </div>
    )
  }
}

export default HaskellOnJupyter;
