'use client';
import { Map, ZoomControl } from 'pigeon-maps'
import { maptiler } from 'pigeon-maps/providers'

const maptilerProvider = maptiler('captR7Gr1UNOIhWTwXle', 'streets');
const vancouverCenter: [number, number] = [49.24669, -123.12092]; // Latitude and longitude of South Cambie (Center of Vancouver) 

export default function MyMap() {
	return (
		<Map
			provider={maptilerProvider}
			dprs={[1, 2]} // this provider supports HiDPI tiles
			defaultCenter={vancouverCenter}
			defaultZoom={12}
			animate={true}
		>
			<ZoomControl />
		</Map>
	);
}
