'use client';
import React, { useState } from 'react';

type SelectYearProps = {
	years: number[];
}

const SelectYear = ({ years }: SelectYearProps) => {
	const [selectedOption, setSelectedOption] = useState<string | undefined>('2024');
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value);
	};
	return (
		<div className="flex flex-col space-y-2 p-4 w-80 mx-auto">
			<label htmlFor="select" className="text-gray-700 font-medium">
				Choose a year:
			</label>
			<select
				id="select"
				value={selectedOption}
				onChange={handleChange}
				className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			>
				<option value="" disabled>
					Select an option
				</option>
				{years.map((year: number, index: number) => (
					<option key={index} value={year}>
						{year}
					</option>
				))}
			</select>
			{selectedOption && (
				<p className="text-gray-600 mt-2">You selected: {selectedOption}</p>
			)}
		</div>
	)
}

export default SelectYear;
