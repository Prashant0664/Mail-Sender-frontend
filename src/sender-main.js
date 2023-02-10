import React from 'react'
import App from './App'
import Sender from './sender'
const Sendermain = () => {
  const [isActiveS, changeS] = React.useState(false)
  return (
    <>
    <div className={isActiveS?'hide':""}>
    <App/>
      <div className={isActiveS?'hide':"Footer"} onClick={()=>{changeS(!isActiveS)}}>SEND MAIL TO ADMIN :)</div>
    </div>
    
    <div className={isActiveS?'':"hide"}>
    <Sender/>
      <div className={isActiveS?'Footer':"hide"} onClick={()=>{changeS(!isActiveS)}}>GO TO MAIN PAGE :)</div>
    </div>
    </>
  )
}

export default Sendermain