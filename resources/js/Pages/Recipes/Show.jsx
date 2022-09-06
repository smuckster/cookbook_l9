import React from 'react'
import Layout from '../../Shared/Layout'

export default function Show(props) {
    return (
        <Layout>
            <h1 className="font-bold text-3xl mb-4">{props.recipe.name}</h1>
            <pre className="whitespace-pre-wrap">{JSON.stringify(props.recipe, null, 4)}</pre>
        </Layout>
    )
}
