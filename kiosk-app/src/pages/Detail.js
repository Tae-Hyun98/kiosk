import React from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';

export default function Detail(props) {

  const {icecreams} = props;
  const {id} = useParams();

  return (
    <>
    <div className='detail_box'>
      <div>
        <img src={process.env.PUBLIC_URL + '/assets/images/spoon.png'} alt='spoon'/>
      </div>
      <h1>{icecreams[id].title}</h1>
      <p>{icecreams[id].desc}</p>
      
      <div className='imgs'>
        <img src={icecreams[id].image} alt='img'/>
      </div>
      
    </div>
   </>
  )
}
