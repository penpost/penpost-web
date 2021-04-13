import React from 'react'
import { useLocation } from 'react-router-dom'

const Preview = () => {
  const location = useLocation()
  console.log(location.state)

  //will need to include back button and submit button

  //need to consider passing state *back* through back button
  
  return (
    <section className='preview'>
      <article className='front'>
        <img src={location.state.image} />
        <h1>PenPost</h1>
      </article>

      <article className='back'>
        <div>{location.state.message}</div>
      </article>
    </section>
  )
}

export default Preview
