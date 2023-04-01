import ImageContainer from "../../components/image-container/image-container.component";
import image from "../../assets/meeting.jpg"
import FeatureCard from "../../components/feature-card/feature-card.component";
import features from "../../features";
import "./home.styles.scss"

const backgroundContainer = {
    image1: {
        id: 1,
        heading: "Get Your Desired Score",
        imageUrl: image
    },
    image2: {
        id: 2,
        heading: "We Prepare You For Everything!",
        imageUrl: "https://images.pexels.com/photos/6368835/pexels-photo-6368835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    image3: {
        id: 3,
        heading: "Why US?",
        imageUrl: "https://images.pexels.com/photos/277593/pexels-photo-277593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
}

const Home = () => {

    const { image1, image2, image3 } = backgroundContainer;

    return (
        <div>

        <ImageContainer content={image1}/>

        <section id="two">
            <div class="container text-center">
                <h1>Our <span>Offerings:</span></h1>

                <div class="feature-row">
                    <FeatureCard feature={features.ielts}/>
                    <FeatureCard feature={features.french}/>
                    <FeatureCard feature={features.dutch}/>
                    <FeatureCard feature={features.visa}/>
                </div>

            </div>
            <hr/>
        </section>

        <ImageContainer content={image2} />

        <section id="four">
            <div class="container feature-row">

            <FeatureCard feature={features.writing}/>
            <FeatureCard feature={features.speaking}/>
            <FeatureCard feature={features.listening}/>
            <FeatureCard feature={features.reading}/>

            <h1>We will make <span>SURE</span> that you give your best in <span><strong>EVERYTHING!</strong></span></h1>
                
            </div>
            <hr/>
        </section>

        <ImageContainer content={image3} />

        <section id="six">
            <div class="container feature-row">

            <FeatureCard feature={features.small}/>
            <FeatureCard feature={features.test}/>
            <FeatureCard feature={features.cheap}/>

            </div>
        </section>

    </div>
    )
}

export default Home;