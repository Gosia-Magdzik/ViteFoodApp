import React from 'react'

export const MealItem = ({meal}) => {
  return (
    <li className="meal-item">
        <article>
            <img src={meal.image} alt={meal.name}/>
            <div>
                
            </div>
        </article>
    </li>
  )
}
