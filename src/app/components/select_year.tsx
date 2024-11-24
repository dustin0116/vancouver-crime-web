'use client';
import React, { useState } from 'react';

type SelectYearProps = {
	years: number[];
}

const SelectYear = ({ years }: SelectYearProps) => {
	const [selectedYear, setSelectedYear] = useState<number>(2024);
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedYear(Number(event.target.value));
	};
	return (
		<div className="flex flex-col space-y-2 p-4 w-80 mx-auto">
			<label htmlFor="select" className="text-gray-700 font-medium">
				Choose a year:
			</label>
			<select
				id="select"
				value={selectedYear}
				onChange={handleChange}
				className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			>
				<option value="" disabled>
					Years
				</option>
				{years.map((year: number, index: number) => (
					<option key={index} value={year}>
						{year}
					</option>
				))}
			</select>
		</div>
	)
}

export default SelectYear;
