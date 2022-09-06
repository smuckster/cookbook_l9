import React from 'react'

export default function IngredientsInput(props) {
    function handleChange(event) {
        // Reverse the array and loop through it.
        let reversedIngredients = props.value.reverse();
        reversedIngredients.every((ingredient, index, array) => {
            // If the step is empty, remove it from the array.
            if (ingredient === '') {
                array = reversedIngredients.splice(index, 1);
            } else {
                // As soon as we encounter a non-empty item, break the loop.
                return false;
            }
        });
        let newIngredients = reversedIngredients.reverse();

        // Update the ingredients based on the index of the changed ingredient.
        newIngredients[event.target.dataset.index] = event.target.value;

        // Call the parent component's change handler with the updated ingredients array.
        props.changeHandler({
            target: {
                name: "ingredients",
                value: [...newIngredients, '']
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
        </div>
    )
}
