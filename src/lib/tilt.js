// Pointer tilt for 3D cards. CSS owns the easing; this only writes the angles.
export function tilt(node, { max = 8 } = {}) {
	if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
	if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	let frame = 0;
	let x = 0;
	let y = 0;
	const flat = { '--tilt-x': '0deg', '--tilt-y': '0deg' };
	const write = () => {
		frame = 0;
		node.style.setProperty('--tilt-x', `${(-y * 2 * max).toFixed(2)}deg`);
		node.style.setProperty('--tilt-y', `${(x * 2 * max).toFixed(2)}deg`);
	};
	const move = (event) => {
		const box = node.getBoundingClientRect();
		x = (event.clientX - box.left) / box.width - 0.5;
		y = (event.clientY - box.top) / box.height - 0.5;
		node.style.setProperty('--tilt-glow', `${(50 + x * 70).toFixed(0)}% ${(50 + y * 70).toFixed(0)}%`);
		if (!frame) frame = requestAnimationFrame(write);
	};
	const leave = () => {
		cancelAnimationFrame(frame);
		frame = 0;
		for (const [name, value] of Object.entries(flat)) node.style.setProperty(name, value);
	};
	node.addEventListener('pointermove', move);
	node.addEventListener('pointerleave', leave);
	return {
		destroy() {
			cancelAnimationFrame(frame);
			node.removeEventListener('pointermove', move);
			node.removeEventListener('pointerleave', leave);
		}
	};
}
