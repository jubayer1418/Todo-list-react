import Footer from "./Footer";
import HeroSection from "./HeroSection";
import TaskBoard from "./task/TaskBoard";
export default function App() {
    return (
        <>

            <div className="flex flex-col justify-center items-center">
                <HeroSection />
                <TaskBoard />
            </div>
            <Footer />
        </>
    );
}
