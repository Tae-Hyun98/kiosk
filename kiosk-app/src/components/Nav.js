import React from 'react'
import {Link} from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
        <ul>
          <li><Link to='/subpage/icecream'>아이스크림</Link></li>
          <li><Link to='/subpage/drink'>음료</Link></li>
          <li><Link to='/subpage/coffee'>커피</Link></li>
          <li><Link to='/subpage/cake'>케이크</Link></li>
          <li><Link to='/subpage/dessert'>디저트</Link></li>
        </ul>
      </nav>
  )
}
