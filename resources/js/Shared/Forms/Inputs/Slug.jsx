import React, { useState, useEffect, createRef } from 'react'

export default function Slug(props) {
    const [edited, setEdited] = useState(false);
    const [slug, setSlug] = useState('');
    let slugRef = createRef();

    useEffect(() => {
        slugRef.current.value = getSlugValue(props.nameValue);
        // setSlug(getSlugValue(props.nameValue));
        // if (!edited) {
        //     // slugRef.current.value = getSlugValue(props.nameValue);
        //     console.log('Slugref current value: ', slugRef.current.value);
        // }
    }, []);

    const getSlugValue = (name) => {
        return name.replace(/[^-a-zA-Z0-9\s+]+/ig, '').replace(/\s+/gi, "-").toLowerCase();
    };

    const changeHandler = (event) => {
        let slugValue = getSlugValue(event.target.value);
        let modifiedEvent = event;
        modifiedEvent.target.value = slugValue;

        props.changeHandler(modifiedEvent);
    };

    return (
        <div className="mb-5">
            <label htmlFor={props.name} className="block font-bold text-lg">{props.label}</label>
            <input
                ref={slugRef}
                id={props.name}
                name={props.name}
                type="text"
                onChange={changeHandler}
                value={props.value != props.nameValue ? props.value : props.nameValue}
                className={`rounded-md focus:border-2 ${props.classes}`}
                size={props.size}
            />
        </div>
    )
}
