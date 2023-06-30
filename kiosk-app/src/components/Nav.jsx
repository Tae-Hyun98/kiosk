import React from 'react'
import {NavLink, useMatch} from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const Li = styled.li`
  width: 20%;
`

export default function Nav() {

    const active = useMatch('/subpage/icecream');
    
  return (
    <motion.nav
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>

        <Ul>
          <Li ><NavLink to='/subpage/icecream' style={({active}) ? active :{}}>아이스크림</NavLink>
          </Li>
          <Li><NavLink to='/subpage/drink'>음료</NavLink></Li>
          <Li><NavLink to='/subpage/coffee'>커피</NavLink></Li>
          <Li><NavLink to='/subpage/cake'>케이크</NavLink></Li>
          <Li><NavLink to='/subpage/dessert'>디저트</NavLink></Li>
        </Ul>

    </motion.nav>
  )
}
