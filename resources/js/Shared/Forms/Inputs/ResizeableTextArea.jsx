import React, { useState, useRef } from 'react'

const MIN_TEXTAREA_HEIGHT = 40;

export default function ResizeableTextArea(props) {
    const textareaRef = useRef(null);

    function handleChange(event) {
        // Reset textarea height.
        textareaRef.current.style.height = `${MIN_TEXTAREA_HEIGHT}px`;

        textareaRef.current.style.height = `${Math.max(
            textareaRef.current.scrollHeight,
            MIN_TEXTAREA_HEIGHT
        )}px`;

        props.changeHandler(event);
    }

    return (
        <textarea
            name={props.name}
            data-index={props.index}
            onChange={handleChange}
            value={props.value}
            className={props.classes}
            ref={textareaRef}
            style={{
                minHeight: MIN_TEXTAREA_HEIGHT,
                height: MIN_TEXTAREA_HEIGHT
            }}
        />
    )
}
