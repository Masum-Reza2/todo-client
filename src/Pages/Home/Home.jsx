import Cover from "../../Components/Cover"
import Footer from "../../Components/Footer"
import HeroSection from "../../Components/HeroSection"
import WidelyUsers from "../../Components/WidelyUsers"
import taskImg from '../../assets/images/notes-6399119_1920.jpg'

const Home = () => {
    return (
        <>
            <Cover title={`Let's Explore`} img={taskImg} />
            <WidelyUsers />
            {/* <HeroSection /> */}
            <Footer />
        </>
    )
}

export default Home