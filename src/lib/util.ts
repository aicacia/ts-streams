import { hashOf } from '@aicacia/hash';
import { XorShiftRng } from '@aicacia/rand';

export function createInsecureID() {
	return Math.random().toString(36).substring(2);
}

export function waitMS(ms: number) {
	return new Promise<void>((resolve) => {
		setTimeout(() => resolve(), ms);
	});
}

const COLOR_OF_RNG = new XorShiftRng();

export function colorOf(value: unknown): string {
	COLOR_OF_RNG.setSeed(hashOf(value));
	return `rgb(${COLOR_OF_RNG.nextFloatInRange(64, 192)}, ${COLOR_OF_RNG.nextFloatInRange(
		64,
		192
	)}, ${COLOR_OF_RNG.nextFloatInRange(64, 192)})`;
}

export function getLocation(): Promise<GeolocationCoordinates> {
	return new Promise((resolve, reject) =>
		navigator.geolocation.getCurrentPosition((location) => resolve(location.coords), reject)
	);
}

export async function getLocationName(coords: GeolocationCoordinates): Promise<string> {
	const res = await fetch(
		`https://nominatim.openstreetmap.org/reverse.php?lat=${coords.latitude}&lon=${coords.longitude}&zoom=18&format=jsonv2`
	);
	if (!res.ok) {
		throw new Error(await res.text());
	}
	const result = await res.json();
	return result.display_name;
}
