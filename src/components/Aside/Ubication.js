import React, {useContext} from 'react'
import {MdLocationOn} from 'react-icons/md'
// import { LocationContext } from '../../context/LocationContext';

export const Ubication = () => {

  // const {location} = useContext(LocationContext);

  // const {name} = location.currentPlace;

  return (
    <div className='ubication__container'>
      <MdLocationOn /> <span> Monterrey</span>
    </div>
  )
}
