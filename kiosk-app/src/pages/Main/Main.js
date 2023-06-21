import React from 'react'
import './Main.css'
import Content from '../Content'
import IntroHeader from '../../components/IntroHeader'

export default function Main() {
  return (
    <>
      <IntroHeader/>
      <section className='section1'>
          <Content/>1
      </section>
    </>
  )
}
