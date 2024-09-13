import { type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => [{ title: 'Framer motion tutorial' }]

export default function Index() {
	return (
		<main className="font-poppins flex h-full flex-col items-center justify-center gap-4">
			<Link to="framer-basics">Framer motion basics</Link>
			<Link to="framer-gestures">Framer motion gestures</Link>
			<Link to="framer-scroll">Framer motion scroll</Link>
			<Link to="framer-animation">Framer animation controls</Link>
			<Link to="framer-view">View based animations</Link>
		</main>
	)
}
