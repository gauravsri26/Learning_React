import React from 'react'

const Cards = (props) => {
  return (
    <div className='parent'>
      <div className='card'>
      <h1>{props.user}</h1>
      <h3>I am {props.age} years old</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi velit neque provident quia a exercitationem voluptatem tenetur itaque reiciendis! Commodi!</p>
    </div>
    </div>
  )
}

export default Cards
