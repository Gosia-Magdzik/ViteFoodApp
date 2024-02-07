import React, { useEffect, useState } from 'react';
import { MealItem } from './MealItem';

export const Meals = () => {

    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals () {

            const response = await fetch("http://localhost:3000/meals");
            if (!response.ok) {           
                //...
            }
            const meals = await response.json();  //JSON converted to JS
            setLoadedMeals(meals);
        }
    
        fetchMeals();
    }, []);

  return (
    <ul id="meals">
        {loadedMeals.map(meal => 
            <MealItem key={meal.id} meal={meal}/>
        )}
        
    </ul>
    )
}
