import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercisePage = () => {

    const [name, setName]       = useState('');
    const [reps, setReps]       = useState('');
    const [weight, setWeight]   = useState('');
    const [unit, setUnit]       = useState('');
    const [date, setDate]       = useState('');
    
    const history = useHistory();

    const CreateExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Add to the collection</h2>
            <p>
                Use this page to add an exercise to the collection. Provide the exercise
                name, the number of reps performed, the weight used (can also be the number
                of laps, etc), the unit of the weight used (lbs, kgs, laps, etc), and the 
                date the exercise was performed.
            </p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which exercise are you adding?</legend>
                    <label for="name">Exercise name</label>
                    <input
                        type="text"
                        placeholder="Name of the exercise"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="reps">Reps done</label>
                    <input
                        type="number"
                        value={reps}
                        placeholder="Reps of the exercise performed"
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label for="weight">Weight used</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label for="unit">Unit</label>
                    <input
                        type="text"
                        placeholder="Primary unit of the exercise"
                        value={unit}
                        onChange={e => setUnit(e.target.value)} 
                        id="unit" />

                    <label for="Date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={CreateExercise}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreateExercisePage;