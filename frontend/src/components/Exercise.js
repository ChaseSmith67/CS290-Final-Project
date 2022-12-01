import React from 'react';
import { RiEdit2Line, RiDeleteBin7Line } from 'react-icons/ri';

function Exercise({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.toLocaleString("en-US").slice(0,10)}</td>
            <td><RiDeleteBin7Line onClick={() => onDelete(exercise._id)} /></td>
            <td><RiEdit2Line onClick={() => onEdit(exercise)} /></td>
        </tr>
    );
}

export default Exercise;