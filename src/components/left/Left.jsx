import accessories from '../../alpaca/accessories/index'
import backgrounds  from '../../alpaca/backgrounds/index'
import ears  from '../../alpaca/ears/index'
import eyes  from '../../alpaca/eyes/index'
import hair  from '../../alpaca/hair/index'
import leg from '../../alpaca/leg/index'
import mouth  from '../../alpaca/mouth/index'
import neck  from '../../alpaca/neck/index'
import './left.css'
import React, {useState, useEffect} from 'react'


export default function Left({customizations}){

    return (
      // <div className="col-md-6 col-xs-12 p-5" id="left">
      <div className="p-5 d-flex justify-content-center" id="left">
        <img
          src={`${backgrounds[customizations.background]}`}
          alt="test3"
          className="background"
        />
          <img
            src={`${neck[customizations.neck]}`}
            alt="1"
            className="alpaca-images "
          />
          <img
            src={`${ears[customizations.ears]}`}
            alt="3"
            className="alpaca-images "
          />
          <img
            src={`${hair[customizations.hair]}`}
            alt="5"
            className="alpaca-images "
          />
          <img
            src={`${eyes[customizations.eyes]}`}
            alt="4"
            className="alpaca-images "
          />
          <img
            src={`${leg[customizations.leg]}`}
            alt=""
            className="alpaca-images "
          />
          <img
            src={`${mouth[customizations.mouth]}`}
            alt="7"
            className="alpaca-images "
          />
          <img
            src={`${accessories[customizations.accessory]}`}
            alt="2"
            className="alpaca-images accessories"
          />
      </div>
    );
    
}