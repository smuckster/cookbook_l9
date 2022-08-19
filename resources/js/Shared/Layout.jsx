import React from 'react'
import Nav from '../Shared/Nav'

export default function Layout(props) {
  return (
    <>
    <section className="px-6 py-3 shadow-md">
        <header className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Cookbook</h1>
            <Nav />
        </header>
    </section>
    <section className="p-6">
        <div className="max-w-2xl mx-auto">
            {props.children}
        </div>
    </section>
    </>
  )
}
