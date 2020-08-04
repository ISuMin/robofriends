import React from 'react'
import './CardList.css'
import Card from '../Card/Card'

const CardList = (props) => {
  const { robots } = props;
  const cardArray = robots.map((robot, i) => {
    return <Card key={robot.id} id = {robot.id} name ={robot.name} site = {robot.email}/>
  })
  return (
    <section className='card-container'>
      {cardArray}
    </section>
  )
}
export default CardList;