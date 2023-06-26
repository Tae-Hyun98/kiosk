import React from 'react'
import {NavLink, Link, useMatch} from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`

const Li = styled.li`
  width: 20%;
`

export default function Nav() {

    const active = useMatch('/subpage/icecream');
    

  return (
    <nav>
        <Ul>
          <Li ><NavLink to='/subpage/icecream' style={({active}) ? active :{}}>아이스크림</NavLink>
          </Li>
          <Li><NavLink to='/subpage/drink'>음료</NavLink></Li>
          <Li><NavLink to='/subpage/coffee'>커피</NavLink></Li>
          <Li><NavLink to='/subpage/cake'>케이크</NavLink></Li>
          <Li><NavLink to='/subpage/dessert'>디저트</NavLink></Li>
        </Ul>
      </nav>
  )
}
