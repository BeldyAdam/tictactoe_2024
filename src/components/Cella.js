import React from 'react'
import './Cella.css'
import { useContext } from 'react'
import { KattContext } from '../context/KattContext'

function Cella(props) {
  const {katt}=useContext(KattContext);
  function kattintas(){
    katt(props.index)
  }

  return (
    <div className='cella' onClick={()=>{kattintas()}}>
        {props.jel}
    </div>
  )
}

export default Cella