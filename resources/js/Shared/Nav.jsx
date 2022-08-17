import React from 'react'
import { usePage } from '@inertiajs/inertia-react'

export default function Nav(props) {
    const { nav } = usePage().props

  return (
    <nav>
        <ul className="flex list-none space-x-6">
            {nav.map((item, index) =>
                <li key={index}>{item}</li>
            )}
        </ul>
    </nav>
  )
}
