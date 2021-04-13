import React from 'react'
import { useLocation } from 'react-router-dom'

const Preview = () => {
  const location = useLocation()
  console.log(location.state)


  return (
    <section>
      <div>{location.state.message}</div>
      <img src={location.state.image} />
    </section>
  )
}

export default Preview
