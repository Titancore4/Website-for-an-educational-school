import ImageContainer from "../../components/image-container/image-container.component";
import image from "../../assets/meeting.jpg"
import FeatureCard from "../../components/feature-card/feature-card.component";
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule.component";
import backgroundContainer from "../../background-images";
import features from "../../features";
import "./home.styles.scss"

const Home = () => {

    const { image1, image2, image3 } = backgroundContainer;
    const [section1, section2, section3] = features

    console.log(section1);

    return (
        <div>

        <ImageContainer content={image1}/>

        <section id="two">
            <div class="container text-center">
                <h1>Our <span>Offerings:</span></h1>

                <div class="feature-row">

                    {section1.map((feature) => (<FeatureCard key={feature.id} feature={feature}/>))}
                    
                </div>

            </div>
        </section>

        <HorizontalRule />

        <ImageContainer content={image2} />

        <section id="four">
            <div class="container feature-row">

            {section2.map((feature) => (<FeatureCard key={feature.id} feature={feature}/>))}

            <h1>We will make <span>SURE</span> that you give your best in <span><strong>EVERYTHING!</strong></span></h1>
                
            </div>
        </section>

        <HorizontalRule />

        <ImageContainer content={image3} />

        <section id="six">
            <div class="container feature-row">

            {section3.map((feature) => (<FeatureCard key={feature.id} feature={feature}/>))}

            </div>
        </section>

        <HorizontalRule />

    </div>
    )
}

export default Home;