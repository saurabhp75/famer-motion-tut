import { motion, useAnimationControls } from 'framer-motion'

export default function AnimationControls() {
    // AnimationControls are used to animate other 
    // elements on clicking a button/element
	const controls = useAnimationControls()

	function handleClick() {
		// void added to remove TS warning
		// 'flip' variant used as a string here
		void controls.start('flip')
	}

	return (
		<div className="grid h-full place-content-center gap-2">
			<button
				onClick={handleClick}
				className="rounded-sm bg-primary px-4 py-2 text-primary-foreground"
			>
				Flip it!
			</button>
			<motion.div
				className="h-28 w-28 rounded-md bg-primary"
				// Define the variants and use them as strings
				variants={{
					initial: {
						rotate: '0deg',
					},
					flip: {
						rotate: '360deg',
					},
				}}
				// whileHover="flip"
				// 'initial' variant used as a string here
				initial="initial"
				animate={controls}
			></motion.div>
		</div>
	)
}
