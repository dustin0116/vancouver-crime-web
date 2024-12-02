import Navbar from './components/navbar';
import Footer from './components/footer';
import MyMap from './components/map';

export default async function Home() {
    return (
        <div className="flex flex-col h-screen gap-5 font-[family-name:var(--font-geist-mono)]">
            <Navbar />
            <MyMap />
            <Footer />
        </div>
    );
}
