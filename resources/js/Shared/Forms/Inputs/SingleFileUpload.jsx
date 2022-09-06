import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

export default function SingleFileUpload(props) {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));

        props.changeHandler({
            target: {
                name: props.name,
                files: acceptedFiles
            }
        });
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        acceptedFiles,
        fileRejections
    } = useDropzone({
        onDrop: onDrop,
        accept: props.accept,
        multiple: false
    });

    const thumbs = files.map(file => (
        <div key={file.name} className="inline-block radius-md hover:opacity-30">
            <img src={file.preview} alt={file.name} height="120" width="120"/>
        </div>
    ));

    const getErrors = () => {
        let message = '';

        if (fileRejections.length > 0) {
            message += 'Could not accept that file.';
        }

        return message;
    }

    const getMessage = () => {
        let message = '';

        if (acceptedFiles.length < 1) {
            message += 'Drag and drop a file here or click to select a file.'
        }

        return message;
    };

    const handleChange = (event) => {
        onDrop([event.target.files[0]]);
        props.changeHandler(event);
    };

    useEffect(() => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <>
            <label htmlFor={props.name} className="block font-bold text-lg">{props.label}</label>
            <div {...getRootProps()} className="flex flex-col justify-center cursor-pointer text-slate-600 outline-dashed outline-2 active:outline-blue-600 bg-slate-200 rounded-md p-6 outline-slate-400 mt-2">
                <input {...getInputProps()} onChange={handleChange} />
                <p className="text-red-700">{getErrors()}</p>
                <p>{getMessage()}</p>
                <div>{thumbs}</div>
            </div>
        </>
    )
}
