import { motion, MotionConfig } from 'framer-motion'

export default function Gestures() {
	return (
		<div className="grid h-full place-content-center gap-2">
			{/* This sets the transition of all children in one go */}
			<MotionConfig
				transition={{
					duration: 0.125,
					ease: 'easeInOut',
				}}
			>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95, rotate: '2.5deg' }}
					className="rounded-sm bg-primary px-4 py-2 text-primary-foreground"
				>
					Click me!
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.15 }}
					whileTap={{ scale: 0.85, rotate: '-2.5deg' }}
					style={{ backgroundColor: 'red' }}
					className="bg-prim rounded-sm px-4 py-2 text-primary-foreground"
				>
					Click me!
				</motion.button>
			</MotionConfig>
		</div>
	)
}
