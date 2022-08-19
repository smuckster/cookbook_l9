import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import TextInput from './Inputs/TextInput'
import TextArea from './Inputs/TextArea'
import IngredientsInput from './Inputs/IngredientsInput'

export default function CreateRecipeForm() {
    const [values, setValues] = useState({
        name: '',
        description: '',
        yield: '',
        time: '',
        ingredients: [
            '1 c. flour',
            '1 c. sugar',
            '1/2 c. butter',
            ''
        ],
    });

    function handleInputChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(values);
        Inertia.post('/recipes', values);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <TextInput
                name="name"
                value={values.name}
                label="Name"
                changeHandler={handleInputChange}
                classes="w-full"
            />

            <TextArea
                name="description"
                value={values.description}
                label="Description"
                changeHandler={handleInputChange}
                classes="w-full"
                rows="3"
            />

            <TextInput
                name="yield"
                value={values.yield}
                label="Yield"
                changeHandler={handleInputChange}
                classes="w-full"
            />

            <TextInput
                name="time"
                value={values.time}
                label="Preparation time"
                changeHandler={handleInputChange}
                classes="w-full"
            />

            <IngredientsInput
                value={values.ingredients}
                changeHandler={handleInputChange}
                classes="w-full"
            />

            <div className="text-center">
                <button
                    type="submit"
                    className="bg-rose-500 hover:bg-rose-600 rounded-full text-white font-bold px-5 py-2 mt-4"
                >Submit</button>
            </div>
        </form>
    )
}
