import React, { useState } from 'react'
import "./style.css"
const CoinDescription = ({name,desc}) => {
  const[more,setMore]=useState(false);
  const shortdesc=`${desc.slice(0,200)}+<p >Read more...</p>`
  return (
    <div className='desc-container'>
       <h1>{name}</h1>
       {desc.length>200 ?
        <p onClick={()=>setMore(!more)} dangerouslySetInnerHTML={{__html:more?desc:shortdesc}}></p> 
       : <p dangerouslySetInnerHTML={{__html:desc}}></p> 
      }
     
     
    </div>
  )
}

export default CoinDescription