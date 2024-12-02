export default function Navbar() {
    return (
        <header className="bg-gray-800 text-white p-4 text-center">
            <nav className="flex justify-between items-center">
                <div className="text-xl">Vancouver Crime Map</div>
                <ul className="flex space-x-6">
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </nav>
        </header>
    )
};
