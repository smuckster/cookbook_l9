import React, { useState } from 'react'
import { Inertia, useForm } from '@inertiajs/inertia-react'
import TextInput from './Inputs/TextInput'
import TextArea from './Inputs/TextArea'
import IngredientsInput from './Inputs/IngredientsInput'
import StepsInput from './Inputs/StepsInput'
import SingleFileUpload from './Inputs/SingleFileUpload'
import Slug from './Inputs/Slug'

export default function CreateRecipeForm() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        yield: '',
        time: '',
        ingredients: [''],
        steps: [''],
        notes: [''],
        picture: '',
    })
    const [values, setValues] = useState({
        name: 'Chocolate chip cookies',
        slug: 'Chocolate chip cookies',
        description: 'These are really nice cookies that don\'t get enough appreciation.',
        yield: '2 dozen cookies',
        time: '45 minutes',
        ingredients: ['2 c. flour', '1 c. sugar', '1 1/2 c. chocolate chips', ''],
        steps: ['Combine the dry ingredients.', 'Cream the sugar and butter together.', 'Bake for 12 minutes at 350 degrees.', '']
    });

    const acceptableFileTypes = {
        'image/*': ['.png', '.gif', '.jpeg', '.jpg']
    }

    function handleInputChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
        setData(event.target.name, event.target.value);
        console.log(`change to ${event.target.name}: ${event.target.value}`);
    }

    function handleFileChange(event) {
        console.log('In handleFileChange().');
        console.log(`change to ${event.target.name} file: ${event.target.files[0]}`);
        setData(event.target.name, event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(values);
        post('/recipes', {picture: data.picture});
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <TextInput
                name="name"
                value={data.name}
                label="Name"
                changeHandler={handleInputChange}
                classes="w-full"
            />

            <TextArea
                name="description"
                value={data.description}
                label="Description"
                changeHandler={handleInputChange}
                classes="w-full"
                rows="3"
            />

            <TextInput
                name="yield"
                value={data.yield}
                label="Yield"
                changeHandler={handleInputChange}
                classes="w-full"
            />

            <TextInput
                name="time"
                value={data.time}
                label="Preparation time"
                changeHandler={handleInputChange}
                classes="w-full"
            />

            <IngredientsInput
                value={data.ingredients}
                changeHandler={handleInputChange}
                classes="w-full"
            />

            <StepsInput
                value={data.steps}
                changeHandler={handleInputChange}
                classes="w-full"
            />

            <SingleFileUpload
                name="picture"
                label="Picture"
                accept={acceptableFileTypes}
                value={data.picture}
                changeHandler={handleFileChange}
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
