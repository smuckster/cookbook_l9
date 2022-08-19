import React from 'react'

export default function TextArea(props) {

  return (
    <div className="mb-5">
        <label htmlFor={props.name} className="block font-bold text-lg">{props.label}</label>
        <textarea
            id={props.name}
            name={props.name}
            onChange={props.changeHandler}
            value={props.title}
            className={`rounded-md focus:border-2 ${props.classes}`}
            rows={props.rows}
            cols={props.cols}
        />
    </div>
  )
}
