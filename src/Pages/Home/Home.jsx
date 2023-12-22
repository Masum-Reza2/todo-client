import Cover from "../../Components/Cover"
import Footer from "../../Components/Footer"
import taskImg from '../../assets/images/notes-6399119_1920.jpg'

const Home = () => {
    return (
        <>
            <Cover title={`Let's Explore`} img={taskImg} />
            <Footer />
        </>
    )
}

export default Home