import Image from 'next/image';
import MyMap from './components/map';
import SelectYear from './components/select_year';
import { fetchData } from './services/api';

type fetchYearsResponse = {
   years: number[];
};

export default async function Home() {
   const yearsData: fetchYearsResponse = await fetchData<fetchYearsResponse>('http://localhost:8000/years');
   const sortedYears = yearsData.years.sort((a, b) => b - a);

   const renderMap = () => {
       return <MyMap selectedYear={sortedYears[0]} />
   };

   const selectList = () => {
       return <SelectYear years={sortedYears} />
   };

   return (
       <div className="flex flex-col h-screen gap-5 font-[family-name:var(--font-geist-mono)]">
           <header className="bg-gray-800 text-white p-4 text-center">
               <nav className="flex justify-between items-center">
                   <div className="text-xl">Vancouver Crime Map</div>
                   <ul className="flex space-x-6">
                       <li>Home</li>
                       <li>About</li>
                       <li>Contact</li>
                   </ul>
               </nav>
           </header>
           <div className="flex">
               {selectList()}
           </div>
           <div className="flex-1 px-10">
               {renderMap()}
           </div>
           <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
               <a
                   className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                   href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                   target="_blank"
                   rel="noopener noreferrer"
               >
                   <Image
                       aria-hidden
                       src="/file.svg"
                       alt="File icon"
                       width={16}
                       height={16}
                   />
                   Learn
               </a>
               <a
                   className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                   href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                   target="_blank"
                   rel="noopener noreferrer"
               >
                   <Image
                       aria-hidden
                       src="/window.svg"
                       alt="Window icon"
                       width={16}
                       height={16}
                   />
                   Examples
               </a>
               <a
                   className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                   href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                   target="_blank"
                   rel="noopener noreferrer"
               >
                   <Image
                       aria-hidden
                       src="/globe.svg"
                       alt="Globe icon"
                       width={16}
                       height={16}
                   />
                   Go to nextjs.org →
               </a>
           </footer>
       </div>
   );
}
