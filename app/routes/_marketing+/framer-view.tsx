import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function ViewBasedAnimations() {
	const ref = useRef(null)
	// const isInView = useInView(ref, { once: true })
	const isInView = useInView(ref)

	// This is used only for testing
	useEffect(() => {
		console.log('Is in view -> ', isInView)
	}, [isInView])

	return (
		<>
			<div style={{ height: '150vh' }} />
			<motion.div
				style={{
					height: '100vh',
					background: 'black',
					// border: '5px solid red',
				}}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
			/>
			{/* This need not be motion div */}
			<div
				ref={ref}
				style={{
					height: '100vh',
					background: isInView ? 'blue' : 'red',
					transition: '1s background',
				}}
			/>
		</>
	)
}
