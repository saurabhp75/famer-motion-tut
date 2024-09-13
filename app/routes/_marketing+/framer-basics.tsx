import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function BasicsOfMotion() {
	const [isVisible, setIsVisible] = useState(true)
	return (
		<div className="grid h-full place-content-center gap-2">
			<motion.button
				onClick={() => setIsVisible(!isVisible)}
				className="rounded-sm bg-primary px-4 py-2 text-primary-foreground"
				// To smooth out the layout changes
				layout
			>
				Show/Hide
			</motion.button>
			{/* AnimatePresence required for exit animation */}
			<AnimatePresence mode="popLayout">
				{isVisible && (
					<motion.div
						className="h-28 w-28 rounded-md bg-primary"
						initial={{
							rotate: '0deg',
							scale: 0,
							y: 0,
						}}
						animate={{
							rotate: '180deg',
							scale: 1,
							y: [0, 150, -150, -150, 0],
						}}
						exit={{
							rotate: '0deg',
							scale: 0,
							y: 0,
						}}
						transition={{
							duration: 1,
							// type: 'spring',
							ease: 'backInOut',
							// Define keyframes within the duration(1 second here)
							times: [0, 0.25, 0.5, 0.85, 1],
						}}
					></motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
