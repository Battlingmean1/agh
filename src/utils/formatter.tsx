export function supMethod(value: number | string) {
	return <sup>{value.toString()}</sup>
}

export function subMethod(value: number | string) {
	return <sub>{value.toString()}</sub>
}

export function fractionsMethod(up: number | string, down: number | string) {
	return (
		<span className="text-xl">
			<sup>{up.toString()}</sup>/<sub>{down.toString()}</sub>
		</span>
	)
}
