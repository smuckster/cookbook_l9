import React from 'react'

export default function TextInput(props) {

  return (
    <div className="mb-5">
        <label htmlFor={props.name} className="block font-bold text-lg">{props.label}</label>
        <input
            id={props.name}
            name={props.name}
            type="text"
            onChange={props.changeHandler}
            value={props.title}
            className={`rounded-md focus:border-2 ${props.classes}`}
            size={props.size}
        />
    </div>
  )
}
