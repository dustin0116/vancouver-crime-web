'use client';
import { Map, ZoomControl, Overlay } from 'pigeon-maps'
import { maptiler } from 'pigeon-maps/providers'
import { useState, useEffect } from 'react';

const maptilerProvider = maptiler('captR7Gr1UNOIhWTwXle', 'streets');
const vancouverCenter: [number, number] = [49.24669, -123.12092]; // Latitude and longitude of South Cambie (Center of Vancouver)

const neighborhoodCoordinates: { [key: string]: [number, number] } = {
    'Downtown': [49.2827, -123.1207],
    'West End': [49.2869, -123.1322],
    'Yaletown': [49.2754, -123.1210],
    'Kitsilano': [49.2643, -123.1555],
    'Mount Pleasant': [49.2609, -123.1017],
    'Fairview': [49.2636, -123.1386],
    'Gastown': [49.2845, -123.1116],
    'Chinatown': [49.2784, -123.0998],
    'Coal Harbour': [49.2918, -123.1234],
    'False Creek': [49.2692, -123.1210],
    'South Cambie': [49.2418, -123.1140],
    'Shaughnessy': [49.2499, -123.1417],
    'East Vancouver': [49.2488, -123.0657],
    'Commercial Drive': [49.2734, -123.0692],
    'Marpole': [49.2113, -123.1322],
    'Oakridge': [49.2267, -123.1162],
    'Hastings-Sunrise': [49.2813, -123.0456],
    'Kerrisdale': [49.2329, -123.1553],
    'Dunbar-Southlands': [49.2402, -123.1861],
    'Arbutus Ridge': [49.2491, -123.1544],
    'Riley Park': [49.2447, -123.1025],
    'Grandview-Woodland': [49.2765, -123.0706],
    'Strathcona': [49.2731, -123.0913],
    'South Vancouver': [49.2155, -123.0670],
    'University Endowment Lands': [49.2586, -123.2396],
};

type MyMapProps = {
    selectedYear: number;
};


export default function MyMap({ selectedYear }: MyMapProps) {
    const [crimeData, setCrimeData] = useState<{neighborhood: string, crimeCount: number}[]>([]);

    useEffect(() => {
        async function fetchCrimeFrequency() {
            try {
                const response = await fetch(`http://localhost:8000/crime-frequency/${selectedYear}`);
                const data = await response.json();
                setCrimeData(data);
            } catch (error) {
                console.error('Failed to fetch crime frequency:', error);
            }
        }
        fetchCrimeFrequency();
    }, [selectedYear]);

    const getHeatmapColor = (crimeCount: number) => {
        const maxCount = Math.max(...crimeData.map(d => d.crimeCount), 1);
        const intensity = crimeCount / maxCount;
        const r = Math.round(255 * intensity);
        const g = Math.round(255 * (1 - intensity));
        return `rgba(${r}, ${g}, 0, 0.5)`;
    };

    return (
        <Map
            provider={maptilerProvider}
            dprs={[1, 2]}
            defaultCenter={vancouverCenter}
            defaultZoom={12}
            animate={true}
        >
            <ZoomControl />
            {crimeData.map(({ neighborhood, crimeCount }) => {
                const coords = neighborhoodCoordinates[neighborhood];
                if (!coords) return null;

                return (
                    <Overlay
                        key={neighborhood}
                        anchor={coords}
                        offset={[10, 10]}
                    >
                        <div
                            style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                backgroundColor: getHeatmapColor(crimeCount)
                            }}
                            title={`${neighborhood}: ${crimeCount} crimes`}
                        />
                    </Overlay>
                );
            })}
        </Map>
    );
}