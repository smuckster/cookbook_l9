import React from 'react'
import { usePage, Link } from '@inertiajs/inertia-react'

export default function Nav(props) {
    const { nav } = usePage().props

  return (
    <nav>
        <ul className="flex list-none gap-x-8">
            {nav.map((item, index) =>
                <li key={index}>
                    <Link
                        href={item.uri}
                        className={item.classes}
                    >
                        {item.name}
                    </Link>
                </li>
            )}
        </ul>
    </nav>
  )
}
