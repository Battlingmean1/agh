'use client'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type Props = {
	width: number
	height: number
	depth: number
	angle?: number
}

export function SierpinskiTriangle() {
	const TriangleCanvas = ({ width, height, depth }: Props) => {
		const canvasRef = useRef<HTMLCanvasElement | null>(null)
		const contextRef = useRef<CanvasRenderingContext2D | null>(null)

		const drawTriangle = useCallback(
			(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, depth: number) => {
				if (depth === 0) {
					ctx.beginPath()
					ctx.moveTo(x, y)
					ctx.lineTo(x + size / 2, y + size)
					ctx.lineTo(x - size / 2, y + size)
					ctx.closePath()
					ctx.fill()
				} else {
					const halfSize = size / 2
					const quarterSize = size / 4
					const nextDepth = depth - 1

					drawTriangle(ctx, x, y, halfSize, nextDepth)
					drawTriangle(ctx, x - quarterSize, y + halfSize, halfSize, nextDepth)
					drawTriangle(ctx, x + quarterSize, y + halfSize, halfSize, nextDepth)
				}
			},
			[]
		)

		useEffect(() => {
			if (!canvasRef.current) return
			if (!contextRef.current) {
				contextRef.current = canvasRef.current.getContext('2d')
			}

			const ctx = contextRef.current
			if (ctx) {
				ctx.clearRect(0, 0, width, height)
				ctx.fillStyle = '#3f95eb'
				drawTriangle(ctx, width / 2, 50, width - 100, depth)
			}
		}, [width, height, depth, drawTriangle])

		return <canvas ref={canvasRef} width={width} height={height} className="bg-gray-900"></canvas>
	}

	const [value, setValue] = useState(1)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const canvasSize = useMemo(() => {
		const width = Math.min(windowWidth * 0.7, 800)
		const height = width / 2
		return { width, height }
	}, [windowWidth])

	return (
		<div>
			<TriangleCanvas width={canvasSize.width} height={canvasSize.height} depth={value} />
			<div>
				<p>Stopień trójkąta: {value}</p>
				<input type="range" value={value} onChange={e => setValue(parseInt(e.target.value))} min={1} max={5} />
			</div>
		</div>
	)
}

export function SierpinskiCarpet() {
	const CarpetCanvas = ({ width, height, depth }: Props) => {
		const canvasRef = useRef<HTMLCanvasElement | null>(null)
		const contextRef = useRef<CanvasRenderingContext2D | null>(null)

		const drawCarpet = useCallback(
			(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, depth: number) => {
				if (depth === 0) {
					ctx.fillRect(x, y, size, size)
				} else {
					const newSize = size / 3
					const nextDepth = depth - 1

					for (let dx = 0; dx < 3; dx++) {
						for (let dy = 0; dy < 3; dy++) {
							if (dx === 1 && dy === 1) continue
							drawCarpet(ctx, x + dx * newSize, y + dy * newSize, newSize, nextDepth)
						}
					}
				}
			},
			[]
		)

		useEffect(() => {
			if (!canvasRef.current) return
			if (!contextRef.current) {
				contextRef.current = canvasRef.current.getContext('2d')
			}

			const ctx = contextRef.current
			if (ctx) {
				ctx.clearRect(0, 0, width, height)
				ctx.fillStyle = '#3f95eb'
				drawCarpet(ctx, 50, 50, width - 100, depth)
			}
		}, [drawCarpet, width, height, depth])

		return <canvas ref={canvasRef} width={width} height={height} className="bg-gray-900"></canvas>
	}

	const [value, setValue] = useState(0)
	const [windowWidth, setWindowWidth] = useState<number | null>(null)

	useEffect(() => {
		setWindowWidth(window.innerWidth)

		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const canvasSize = useMemo(() => {
		if (!windowWidth) return { width: 300, height: 300 }
		const width = Math.min(windowWidth * 0.6, 600)
		const height = width
		return { width, height }
	}, [windowWidth])

	if (!windowWidth) {
		return null
	}

	return (
		<div>
			<CarpetCanvas width={canvasSize.width} height={canvasSize.height} depth={value} />
			<div>
				<div className="relative">Stopień kwadratu: {value}</div>
				<input type="range" value={value} onChange={e => setValue(parseInt(e.target.value))} min={0} max={4} />
			</div>
		</div>
	)
}

export function KochCurve() {
	const KochCanvas = ({ width, height, depth }: Props) => {
		const canvasRef = useRef<HTMLCanvasElement | null>(null)
		const contextRef = useRef<CanvasRenderingContext2D | null>(null)

		const drawKoch = useCallback(
			(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, depth: number) => {
				if (depth === 0) {
					ctx.beginPath()
					ctx.moveTo(x1, y1)
					ctx.lineTo(x2, y2)
					ctx.stroke()
				} else {
					const dx = x2 - x1
					const dy = y2 - y1
					const xA = x1 + dx / 3
					const yA = y1 + dy / 3
					const xB = x1 + (2 * dx) / 3
					const yB = y1 + (2 * dy) / 3
					const midX = (x1 + x2) / 2 + (Math.sqrt(3) * (y2 - y1)) / 6
					const midY = (y1 + y2) / 2 - (Math.sqrt(3) * (x2 - x1)) / 6

					drawKoch(ctx, x1, y1, xA, yA, depth - 1)
					drawKoch(ctx, xA, yA, midX, midY, depth - 1)
					drawKoch(ctx, midX, midY, xB, yB, depth - 1)
					drawKoch(ctx, xB, yB, x2, y2, depth - 1)
				}
			},
			[]
		)

		useEffect(() => {
			if (!canvasRef.current) return
			if (!contextRef.current) {
				contextRef.current = canvasRef.current.getContext('2d')
			}

			const ctx = contextRef.current
			if (ctx) {
				ctx.clearRect(0, 0, width, height)
				ctx.strokeStyle = '#3f95eb'
				ctx.lineWidth = 2
				drawKoch(ctx, 50, height / 2, width - 50, height / 2, depth)
			}
		}, [width, height, depth, drawKoch])

		return <canvas ref={canvasRef} width={width} height={height} className="bg-gray-900"></canvas>
	}

	const [value, setValue] = useState(0)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const canvasSize = useMemo(() => {
		const width = Math.min(windowWidth * 0.7, 800)
		const height = width / 2
		return { width, height }
	}, [windowWidth])

	return (
		<div>
			<KochCanvas width={canvasSize.width} height={canvasSize.height} depth={value} />
			<div>
				<p>Stopień krzywej: {value}</p>
				<input type="range" value={value} onChange={e => setValue(parseInt(e.target.value))} min={0} max={5} />
			</div>
		</div>
	)
}

export function KochSnowflake() {
	const KochCanvas = ({ width, height, depth }: Props) => {
		const canvasRef = useRef<HTMLCanvasElement | null>(null)
		const contextRef = useRef<CanvasRenderingContext2D | null>(null)

		const drawKoch = useCallback(
			(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, depth: number) => {
				if (depth === 0) {
					ctx.beginPath()
					ctx.moveTo(x1, y1)
					ctx.lineTo(x2, y2)
					ctx.stroke()
				} else {
					const dx = x2 - x1
					const dy = y2 - y1
					const xA = x1 + dx / 3
					const yA = y1 + dy / 3
					const xB = x1 + (2 * dx) / 3
					const yB = y1 + (2 * dy) / 3
					const midX = (xA + xB) / 2 - (Math.sqrt(3) * (yB - yA)) / 2
					const midY = (yA + yB) / 2 + (Math.sqrt(3) * (xB - xA)) / 2

					drawKoch(ctx, x1, y1, xA, yA, depth - 1)
					drawKoch(ctx, xA, yA, midX, midY, depth - 1)
					drawKoch(ctx, midX, midY, xB, yB, depth - 1)
					drawKoch(ctx, xB, yB, x2, y2, depth - 1)
				}
			},
			[]
		)

		const drawSnowflake = useCallback(
			(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number, depth: number) => {
				const x1 = centerX
				const y1 = centerY - radius
				const x2 = centerX - radius * Math.sin(Math.PI / 3)
				const y2 = centerY + radius / 2
				const x3 = centerX + radius * Math.sin(Math.PI / 3)
				const y3 = centerY + radius / 2

				drawKoch(ctx, x1, y1, x2, y2, depth)
				drawKoch(ctx, x2, y2, x3, y3, depth)
				drawKoch(ctx, x3, y3, x1, y1, depth)
			},
			[drawKoch]
		)

		useEffect(() => {
			if (!canvasRef.current) return
			if (!contextRef.current) {
				contextRef.current = canvasRef.current.getContext('2d')
			}

			const ctx = contextRef.current
			if (ctx) {
				ctx.clearRect(0, 0, width, height)
				ctx.strokeStyle = '#3f95eb'
				ctx.lineWidth = 2

				const centerX = width / 2
				const centerY = height / 2
				const radius = Math.min(width, height) / 3

				drawSnowflake(ctx, centerX, centerY, radius, depth)
			}
		}, [width, height, depth, drawSnowflake])

		return <canvas ref={canvasRef} width={width} height={height} className="bg-gray-900"></canvas>
	}

	const [value, setValue] = useState(0)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const canvasSize = useMemo(() => {
		const width = Math.min(windowWidth * 0.7, 800)
		const height = width
		return { width, height }
	}, [windowWidth])

	return (
		<div>
			<KochCanvas width={canvasSize.width} height={canvasSize.height} depth={value} />
			<div>
				<p>Stopień płatka: {value}</p>
				<input type="range" value={value} onChange={e => setValue(parseInt(e.target.value))} min={0} max={5} />
			</div>
		</div>
	)
}

export function BinaryTree() {
	const TreeCanvas = ({ width, height, depth }: Props) => {
		const canvasRef = useRef<HTMLCanvasElement | null>(null)
		const contextRef = useRef<CanvasRenderingContext2D | null>(null)

		const drawTree = useCallback(
			(ctx: CanvasRenderingContext2D, x: number, y: number, angle: number, length: number, depth: number) => {
				if (depth === 0) return

				const endX = x + length * Math.cos(angle)
				const endY = y + length * Math.sin(angle)

				ctx.beginPath()
				ctx.moveTo(x, y)
				ctx.lineTo(endX, endY)
				ctx.strokeStyle = `hsl(${depth * 45}, 70%, 50%)`
				ctx.lineWidth = depth
				ctx.stroke()

				const newLength = length * 0.7
				const angleDelta = Math.PI / 6

				drawTree(ctx, endX, endY, angle - angleDelta, newLength, depth - 1)
				drawTree(ctx, endX, endY, angle + angleDelta, newLength, depth - 1)
			},
			[]
		)

		useEffect(() => {
			if (!canvasRef.current) return
			if (!contextRef.current) {
				contextRef.current = canvasRef.current.getContext('2d')
			}

			const ctx = contextRef.current
			if (ctx) {
				ctx.clearRect(0, 0, width, height)
				ctx.strokeStyle = '#3f95eb'
				drawTree(ctx, width / 2, height - 50, -Math.PI / 2, height / 4, depth)
			}
		}, [width, height, depth, drawTree])

		return <canvas ref={canvasRef} width={width} height={height} className="bg-gray-900"></canvas>
	}

	const [value, setValue] = useState(0)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const canvasSize = useMemo(() => {
		const width = Math.min(windowWidth * 0.8, 800)
		const height = width
		return { width, height }
	}, [windowWidth])

	return (
		<div className="flex flex-col items-center">
			<TreeCanvas width={canvasSize.width} height={canvasSize.height} depth={value} />
			<div className="mt-4">
				<p className="text-white">Stopień drzewa: {value}</p>
				<input type="range" value={value} onChange={e => setValue(parseInt(e.target.value))} min={0} max={10} />
			</div>
		</div>
	)
}

export function CantorSet() {
	const CantorSetCanvas = ({ width, height, depth }: Props) => {
		const canvasRef = useRef<HTMLCanvasElement | null>(null)
		const contextRef = useRef<CanvasRenderingContext2D | null>(null)

		const drawCantorSet = useCallback(
			(ctx: CanvasRenderingContext2D, x: number, y: number, length: number, depth: number) => {
				if (depth === 0) {
					ctx.beginPath()
					ctx.moveTo(x, y)
					ctx.lineTo(x + length, y)
					ctx.stroke()
				} else {
					ctx.beginPath()
					ctx.moveTo(x, y)
					ctx.lineTo(x + length, y)
					ctx.stroke()

					const halfLength = length / 3
					drawCantorSet(ctx, x, y + 20, halfLength, depth - 1)
					drawCantorSet(ctx, x + halfLength * 2, y + 20, halfLength, depth - 1)
				}
			},
			[]
		)

		useEffect(() => {
			if (!canvasRef.current) return
			if (!contextRef.current) {
				contextRef.current = canvasRef.current.getContext('2d')
			}

			const ctx = contextRef.current
			if (ctx) {
				ctx.clearRect(0, 0, width, height)
				ctx.strokeStyle = '#3f95eb'
				ctx.lineWidth = 2
				drawCantorSet(ctx, 50, 50, width - 100, depth)
			}
		}, [width, height, depth, drawCantorSet])

		return <canvas ref={canvasRef} width={width} height={height} className="bg-gray-900"></canvas>
	}

	const [value, setValue] = useState(0)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const canvasSize = useMemo(() => {
		const width = Math.min(windowWidth * 0.7, 800)
		const height = width / 2
		return { width, height }
	}, [windowWidth])

	return (
		<div>
			<CantorSetCanvas width={canvasSize.width} height={canvasSize.height} depth={value} />
			<div>
				<div className="relative">Stopień zbioru Cantora: {value}</div>
				<input type="range" value={value} onChange={e => setValue(parseInt(e.target.value))} min={0} max={7} />
			</div>
		</div>
	)
}

export function MandelbrotSet() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const [maxIter, setMaxIter] = useState(50)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	const drawMandelbrot = (ctx: CanvasRenderingContext2D, width: number, height: number, maxIter: number) => {
		const imageData = ctx.createImageData(width, height)
		const data = imageData.data

		const xmin = -2.5
		const xmax = 1.5
		const ymin = -1.5
		const ymax = 1.5

		const maxIterations = Math.min(maxIter, 100)

		for (let px = 0; px < width; px++) {
			for (let py = 0; py < height; py++) {
				const x0 = xmin + ((xmax - xmin) * px) / width
				const y0 = ymin + ((ymax - ymin) * py) / height
				let x = 0
				let y = 0
				let iteration = 0

				while (x * x + y * y <= 4 && iteration < maxIterations) {
					const xTemp = x * x - y * y + x0
					y = 2 * x * y + y0
					x = xTemp
					iteration++
				}

				const color = iteration === maxIterations ? 0 : (iteration / maxIterations) * 255
				const index = (py * width + px) * 4

				data[index] = color
				data[index + 1] = color
				data[index + 2] = color
				data[index + 3] = 255
			}
		}

		ctx.putImageData(imageData, 0, 0)
	}

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const canvasSize = useMemo(() => {
		const width = Math.min(windowWidth * 0.6, 800)
		const height = width
		return { width, height }
	}, [windowWidth])

	useEffect(() => {
		const canvas = canvasRef.current
		if (canvas) {
			const ctx = canvas.getContext('2d')
			if (ctx) {
				drawMandelbrot(ctx, canvasSize.width, canvasSize.height, maxIter)
			}
		}
	}, [maxIter, canvasSize])

	return (
		<div className="flex flex-col items-center">
			<div className="mb-8">
				<p className="text-xl text-center">
					Na telefonach, mniejszych ekranach mogą występować problemy z wyswietlaniem!
				</p>
			</div>
			<canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} className="border bg-black" />
			<div className="mt-4">
				<label htmlFor="iterations" className="text-white">
					Maksymalna liczba iteracji: {maxIter}
				</label>
				<input
					type="range"
					id="iterations"
					min="30"
					max="150"
					value={maxIter}
					onChange={e => setMaxIter(parseInt(e.target.value))}
					className="ml-2"
				/>
			</div>
		</div>
	)
}

export function JuliaSet() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const [maxIter, setMaxIter] = useState(100)
	const [cx, setCx] = useState(-0.7)
	const [cy, setCy] = useState(0.27015)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	const drawJulia = (
		ctx: CanvasRenderingContext2D,
		width: number,
		height: number,
		maxIter: number,
		cx: number,
		cy: number
	) => {
		const imageData = ctx.createImageData(width, height)
		const data = imageData.data

		const xmin = -2
		const xmax = 2
		const ymin = -2
		const ymax = 2

		for (let px = 0; px < width; px++) {
			for (let py = 0; py < height; py++) {
				const x0 = xmin + ((xmax - xmin) * px) / width
				const y0 = ymin + ((ymax - ymin) * py) / height
				let x = x0
				let y = y0
				let iteration = 0

				while (x * x + y * y <= 4 && iteration < maxIter) {
					const xTemp = x * x - y * y + cx
					y = 2 * x * y + cy
					x = xTemp
					iteration++
				}

				const color = iteration === maxIter ? 0 : (iteration / maxIter) * 255
				const index = (py * width + px) * 4

				data[index] = color
				data[index + 1] = color
				data[index + 2] = color
				data[index + 3] = 255
			}
		}

		ctx.putImageData(imageData, 0, 0)
	}

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const canvasSize = useMemo(() => {
		const width = Math.min(windowWidth * 0.6, 800)
		const height = width
		return { width, height }
	}, [windowWidth])

	useEffect(() => {
		const canvas = canvasRef.current
		if (canvas) {
			const ctx = canvas.getContext('2d')
			if (ctx) {
				drawJulia(ctx, canvasSize.width, canvasSize.height, maxIter, cx, cy)
			}
		}
	}, [maxIter, cx, cy, canvasSize])

	return (
		<div className="flex flex-col items-center">
			<div className="mb-8">
				<p className="text-xl text-center">
					Na telefonach, mniejszych ekranach mogą występować problemy z wyswietlaniem!
				</p>
			</div>
			<canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} className="border bg-black" />
			<div className="mt-4">
				<label htmlFor="iterations" className="text-white text-center">
					Maksymalna liczba iteracji: {maxIter}
				</label>
				<input
					type="range"
					id="iterations"
					min="50"
					max="300"
					value={maxIter}
					onChange={e => setMaxIter(parseInt(e.target.value))}
					className="ml-2"
				/>
			</div>
			<div className="mt-4">
				<label htmlFor="cx" className="text-white">
					C Rzeczywiste: {cx}
				</label>
				<input
					type="range"
					id="cx"
					min="-1.5"
					max="1.5"
					step="0.01"
					value={cx}
					onChange={e => setCx(parseFloat(e.target.value))}
					className="ml-2"
				/>
			</div>
			<div className="mt-4">
				<label htmlFor="cy" className="text-white">
					C Urojone: {cy}
				</label>
				<input
					type="range"
					id="cy"
					min="-1.5"
					max="1.5"
					step="0.01"
					value={cy}
					onChange={e => setCy(parseFloat(e.target.value))}
					className="ml-2"
				/>
			</div>
		</div>
	)
}

export function HilbertCurveSet() {
	const Canvas = ({ width, height, depth }: { width: number; height: number; depth: number }) => {
		const canvasRef = useRef<HTMLCanvasElement | null>(null)

		const drawHilbertCurve = useCallback(
			(
				ctx: CanvasRenderingContext2D,
				x: number,
				y: number,
				xi: number,
				xj: number,
				yi: number,
				yj: number,
				n: number
			) => {
				if (n <= 0) {
					const centerX = x + (xi + yi) / 2
					const centerY = y + (xj + yj) / 2
					ctx.lineTo(centerX, centerY)
					ctx.stroke()
					ctx.moveTo(centerX, centerY)
				} else {
					drawHilbertCurve(ctx, x, y, yi / 2, yj / 2, xi / 2, xj / 2, n - 1)
					drawHilbertCurve(ctx, x + xi / 2, y + xj / 2, xi / 2, xj / 2, yi / 2, yj / 2, n - 1)
					drawHilbertCurve(ctx, x + xi / 2 + yi / 2, y + xj / 2 + yj / 2, xi / 2, xj / 2, yi / 2, yj / 2, n - 1)
					drawHilbertCurve(ctx, x + xi / 2 + yi, y + xj / 2 + yj, -yi / 2, -yj / 2, -xi / 2, -xj / 2, n - 1)
				}
			},
			[]
		)

		useEffect(() => {
			const canvas = canvasRef.current
			if (canvas) {
				const ctx = canvas.getContext('2d')
				if (ctx) {
					ctx.clearRect(0, 0, width, height)
					ctx.beginPath()
					ctx.strokeStyle = 'white'
					ctx.lineWidth = 1

					const size = Math.min(width, height) - 20
					drawHilbertCurve(ctx, 10, 10, size, 0, 0, size, depth)
				}
			}
		}, [width, height, depth, drawHilbertCurve])

		return <canvas ref={canvasRef} width={width} height={height} style={{ backgroundColor: 'black' }} />
	}

	const [value, setValue] = useState(1)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const canvasSize = useMemo(() => {
		const width = Math.min(windowWidth * 0.7, 800)
		const height = width
		return { width, height }
	}, [windowWidth])

	return (
		<div>
			<Canvas width={canvasSize.width} height={canvasSize.height} depth={value} />
			<div>
				<div className="relative">Stopień krzywej: {value}</div>
				<input type="range" value={value} onChange={e => setValue(parseInt(e.target.value))} min={1} max={5} />
			</div>
		</div>
	)
}

export function LorenzAttractor() {
	const Canvas = ({ width, height }: { width: number; height: number }) => {
		const canvasRef = useRef<HTMLCanvasElement | null>(null)
		const animationFrameId = useRef<number | null>(null)

		const drawLorenzAttractor = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
			const sigma = 10
			const rho = 28
			const beta = 8 / 3

			const dt = 0.01
			let x = 0.1
			let y = 0
			let z = 0

			let minX = x,
				maxX = x,
				minY = y,
				maxY = y,
				minZ = z,
				maxZ = z
			const tempPoints = []

			for (let i = 0; i < 100; i++) {
				const dx = sigma * (y - x) * dt
				const dy = (x * (rho - z) - y) * dt
				const dz = (x * y - beta * z) * dt
				x += dx
				y += dy
				z += dz

				minX = Math.min(minX, x)
				maxX = Math.max(maxX, x)
				minY = Math.min(minY, y)
				maxY = Math.max(maxY, y)
				minZ = Math.min(minZ, z)
				maxZ = Math.max(maxZ, z)
				tempPoints.push({ x, y, z })
			}

			const centerX = (minX + maxX) / 2
			const centerZ = (minZ + maxZ) / 2

			const scaleX = (width / (maxX - minX)) * 0.4
			const scaleZ = (height / (maxZ - minZ)) * 0.4
			const scale = Math.min(scaleX, scaleZ)

			x = 0.1
			y = 0
			z = 0

			ctx.strokeStyle = 'white'
			ctx.lineWidth = 0.5

			let points: { x: number; y: number }[] = []

			const animate = () => {
				const dx = sigma * (y - x) * dt
				const dy = (x * (rho - z) - y) * dt
				const dz = (x * y - beta * z) * dt

				x += dx
				y += dy
				z += dz

				const drawX = width / 2 + (x - centerX) * scale
				const drawY = height / 2 - (z - centerZ) * scale

				points.push({ x: drawX, y: drawY })

				if (points.length > 1) {
					ctx.beginPath()
					ctx.moveTo(points[0].x, points[0].y)
					for (let i = 1; i < points.length; i++) {
						ctx.lineTo(points[i].x, points[i].y)
					}
					ctx.stroke()
					points = [points[points.length - 1]]
				} else {
					ctx.beginPath()
					ctx.moveTo(drawX, drawY)
				}

				animationFrameId.current = requestAnimationFrame(animate)
			}

			animate()
		}

		useEffect(() => {
			const canvas = canvasRef.current
			if (canvas) {
				const ctx = canvas.getContext('2d')
				if (ctx) {
					ctx.clearRect(0, 0, width, height)
					ctx.fillStyle = 'black'
					ctx.fillRect(0, 0, width, height)
					drawLorenzAttractor(ctx, width, height)
				}
			}

			return () => {
				if (animationFrameId.current) {
					cancelAnimationFrame(animationFrameId.current)
				}
			}
		}, [width, height])

		return <canvas ref={canvasRef} width={width} height={height} style={{ backgroundColor: 'black' }} />
	}

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const canvasSize = useMemo(() => {
		const width = Math.min(windowWidth * 0.7, 800)
		const height = width
		return { width, height }
	}, [windowWidth])

	return (
		<div>
			<Canvas width={canvasSize.width} height={canvasSize.height} />
		</div>
	)
}
