import React from 'react';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
import './Header.css';

const HeaderContainer = () => {
  return (
    <div className="header">
      <ImageThumbnail />
      <HeaderContent />
    </div>
  )
}








export default HeaderContainer
