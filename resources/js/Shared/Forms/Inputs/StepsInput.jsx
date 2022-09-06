import React, { useState } from 'react'
import ResizeableTextArea from './ResizeableTextArea'

export default function StepsInput(props) {
    function handleChange(event) {
        // Reverse the array and loop through it.
        let reversedSteps = props.value.reverse();
        reversedSteps.every((step, index, array) => {
            // If the step is empty, remove it from the array.
            if (step === '') {
                array = reversedSteps.splice(index, 1);
            } else {
                // As soon as we encounter a non-empty item, break the loop.
                return false;
            }
        });
        let newSteps = reversedSteps.reverse();

        // Update the steps based on the index of the changed step.
        newSteps[event.target.dataset.index] = event.target.value;

        props.changeHandler({
            target: {
                name: "steps",
                value: [...newSteps, '']
            }
        });
    }

    return (
        <div className="mb-5">
            <label htmlFor="steps" className="block font-bold text-lg">Steps</label>
            {props.value.map((step, index) =>
                <ResizeableTextArea
                    name="steps[]"
                    index={index}
                    key={index}
                    changeHandler={handleChange}
                    value={step}
                    classes={`rounded-md focus:border-2 mb-3 ${props.classes}`}
                />
            )}
        </div>
    )
}
