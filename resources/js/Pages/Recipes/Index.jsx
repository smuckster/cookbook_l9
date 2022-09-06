import React from 'react'
import Layout from '../../Shared/Layout'
import { Link } from '@inertiajs/inertia-react'

export default function Index(props) {
    return (
        <Layout>
            <h1 className="font-bold text-3xl mb-4">Browse Recipes</h1>
            <div className="flex flex-row flex-wrap gap-3">
                {props.recipes.map((recipe) =>
                    <Link href={`/recipes/${recipe.slug}`}>
                        <div key={recipe.id} className="rounded-md shadow-md p-4 h-48 w-48">
                            <h2 className="font-bold text-lg">{recipe.name}</h2>
                        </div>
                    </Link>
                )}
            </div>
        </Layout>
    )
}
