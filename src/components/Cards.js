import React from 'react';
import Cardsitems from './Cardsitems';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
        <h1>Check Out the Destination Images</h1>
        <div className="crads__container">
            <div className="cards__wrapper">
                <div className="cards__items">
                <Cardsitems 
                src="images/img-9.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle."
                lable="Advanture"
                path="/services"
                />  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
