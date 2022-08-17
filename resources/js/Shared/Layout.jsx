import React from 'react'
import Nav from '../Shared/Nav'

export default function Layout(props) {
  return (
    <>
    <section className="p-6 bg-gray-200">
        <header className="flex justify-between">
            <h1 className="text-lg font-bold">Cookbook</h1>
            <Nav />
        </header>
    </section>
    <section className="p-6">
        <div className="max-w-3xl mx-auto">
            {props.children}
        </div>
    </section>
    </>
  )
}
