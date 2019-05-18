import React from 'react';
import './Card.css';

import CardContent from './CardContent'
import CardBanner from './CardBanner'

const CardContainer = () => {
  return (
    <div>
      <a  href="https://www.reactjs.org" target="blank">
      <CardBanner />
      <CardContent />
      </a>
    </div>
  )
}

export default CardContainer
