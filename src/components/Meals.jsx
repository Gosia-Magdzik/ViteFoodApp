import { MealItem } from './MealItem';
import useHttp from '../hooks/useHttp';

const requestConfig = {};

export const Meals = () => {
    const { 
        data: loadedMeals, 
        isLoading, 
        error 
    } = useHttp('http://localhost:3000/meals', requestConfig, []);

    if (isLoading) {
        return <p>Fetching meals...</p>
    }

    return (
    <ul id="meals">
        {loadedMeals && loadedMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal}/>
        ))}
    </ul>
    );
}
