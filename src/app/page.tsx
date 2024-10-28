'use client'

import { useEffect, useState } from 'react'

export default function Home() {
	const [num, setNum] = useState(0)
	useEffect(() => {
		console.log('Use effect called', num)

		// Unmounting ช่วงเวลาสุดท้ายก่อนเริ่ม useEffect ใหม่ หรือก่อน component หายไป (clean up)
		return () => {
			console.log('Bye', num)
		}
	}, [num])

	function handleClick() {
		setNum(num + 1)
		console.log(num)
	}

	return (
		<>
			<div>HomePage</div>
			<button onClick={handleClick}>Click me</button>
			<div>{num}</div>
		</>
	)
}
