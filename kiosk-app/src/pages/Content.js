import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const MainCategory = styled.div`
  margin-top: 30px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

export default function Content() {
  return (

    <MainCategory className='category_list'>
      
      <div className='left'>
        <div className='icecream'>
          <Link to='/subpage/icecream' style={{width:500,height:280}}>
            <h2 style={{color: '#ff91bc'}}>ICECREAM</h2>
            <p>아이스크림의 기준<br/>배스킨라빈스!</p>
            <p className='go'><span>→ go</span></p>
            <img src={process.env.PUBLIC_URL + './assets/images/ice01.png'} alt='img' style={{width:300}}/>
            <img className='co' src={process.env.PUBLIC_URL + '/assets/images/corn.png'} alt='img' style={{width:110}}/>
          </Link>
        </div>
          
        <div style={{display:'flex'}}>
         <div className='coffee'>
          <Link to='/subpage/coffee' style={{width:300,height:370}}>
            <h2 style={{color:'#bb7b4c'}}>COFFEE</h2>
            <p>배스킨라빈스만의<br/>부드러운 촉감과<br/>달콤한 풍미!</p>
            <p className='go'><span>→ go</span></p>
          </Link>
         </div>

          <div className='drink'>
            <Link to='/subpage/cake' style={{width:329,height:370}}>
              <h2 style={{color:'#febb01'}}>ICECREAM<br/>CAKE</h2>
              <p>아이와 어른이 좋아하는<br/>아이스크림을 하나의 케이크에서<br/>모두 즐기세요!</p>
              <p className='go'><span>→ go</span></p>
            </Link>
          </div>
        </div>
      </div>

      <div className='right'>
        <div className='beverage'>
          <Link to='/subpage/drink' style={{width:306,height:460}}>
            <h2 style={{color: '#ff8d9a'}}>BEVERAGE</h2>
            <p>아이스크림으로 즐기는<br/>배스킨라빈스만의 음료!</p>
            <p className='go'><span>→ go</span></p>
          </Link>
        </div>

        <div className='dessert'>
          <Link to='/subpage/dessert' style={{width:280,height:250}}>
            <h2 style={{color: '#ff8d9a'}}>DESSERT</h2>
            <p>아이스크림으로 더욱 재미있게!<br/>간편하게 즐기는 방법!</p>
            <p className='go'><span>→ go</span></p>
          </Link>
        </div>
      </div>

    </MainCategory>
  )
}
