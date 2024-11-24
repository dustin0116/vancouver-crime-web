"use client";
import { Map } from 'pigeon-maps'
import { maptiler } from 'pigeon-maps/providers'

const maptilerProvider = maptiler('captR7Gr1UNOIhWTwXle', 'streets');
const vancouverCenter: [number, number] = [49.2827, -123.1207]; // Latitude and longitude of Vancouver

export default function MyMap() {
	return (
		<Map
			provider={maptilerProvider}
			dprs={[1, 2]} // this provider supports HiDPI tiles
			defaultCenter={vancouverCenter}
			defaultZoom={11}
			animate={true}
		/>
	);
}
