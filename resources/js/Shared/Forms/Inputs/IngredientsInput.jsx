import React, { useState, useEffect, useRef } from 'react'
import TextInput from './TextInput'

export default function IngredientsInput(props) {
    const [ingredients, setIngredients] = useState(props.value);
    const [currentlyEditing, setCurrentlyEditing] = useState(null);

    function handleChange(event) {
        setCurrentlyEditing(event.target.dataset.index);

        // Make an editable copy of the ingredients in state.
        let newIngredients = ingredients;

        // If the updated ingredient has an index, update it:
        if (event.target.dataset.index !== undefined) {
            newIngredients[event.target.dataset.index] = event.target.value;
        }

        // Save the new ingredients array in state.
        setIngredients(newIngredients);

        // Call the parent component's change handler with the updated ingredients array.
        props.changeHandler({
            target: {
                name: "ingredients",
                value: ingredients
            }
        });
    }

    return (
        <div className="mb-5">
            <label htmlFor="ingredients" className="block font-bold text-lg">Ingredients</label>
            {props.value.map((ingredient, index) =>
                <input
                    name="ingredients[]"
                    data-index={index}
                    key={index}
                    type="text"
                    onChange={handleChange}
                    value={ingredient}
                    className={`rounded-md focus:border-2 mb-3 ${props.classes}`}
                    size={props.size}
                />
            )}

            {/* Create a blank input at the end so the user always has one to tab into. */}
            <input
                name="ingredients[]"
                data-index={ingredients.length}
                key={ingredients.length}
                type="text"
                onChange={handleChange}
                value=""
                className={`rounded-md focus:border-2 mb-3 ${props.classes}`}
                size={props.size}
            />
        </div>
    )
}
