import React from 'react'
import Layout from '../../Shared/Layout'
import CreateRecipeForm from '../../Shared/Forms/CreateRecipe'

export default function CreateRecipe() {
  return (
    <Layout>
        <h1 className="font-bold text-3xl mb-4">Create Recipe</h1>
        <CreateRecipeForm />
    </Layout>
  )
}
