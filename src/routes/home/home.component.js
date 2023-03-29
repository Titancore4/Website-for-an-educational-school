import ImageContainer from "../../components/image-container/image-container.component";
import image from "../../assets/meeting.jpg"
import FeatureCard from "../../components/feature-card/feature-card.component";
import features from "../../features";

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
                    {/* <div>
                        <div class="feature">
                            <h1><strong><em>Français</em></strong></h1>
                            <h3>French</h3>
                            <p>Want to learn Freanch? Don't worry! We got you covered.</p>
                        </div>
                    </div>
                    <div>
                        <div class="feature">
                            <h1><strong><em>Nederlands</em></strong></h1>
                            <h3>Dutch</h3>
                            <p>For the few out there, now you can learn Dutch too!</p>
                        </div>
                    </div>
                    <div>
                        <div class="feature">
                            <h1><i class="fa-solid fa-plane-departure plane"></i></h1>
                            <h3>Visa</h3>
                            <p>We also handle your Visa application so you can sit back and relax!</p>
                        </div>
                    </div> */}
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

                {/* <div class="feature">
                    <i class="fa-solid fa-pen-nib"></i>
                    <h3>Writing</h3>
                </div>
                <div class="feature">
                    <i class="fa-solid fa-microphone"></i>
                    <h3>Speaking</h3>
                </div>
                <div class="feature">
                    <i class="fa-solid fa-headphones-simple"></i>
                    <h3>Listening</h3>
                </div>
                <div class="feature">
                    <i class="fa-sharp fa-solid fa-book"></i>
                    <h3>Reading</h3>
                </div> */}

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

                {/* <div class="feature">
                    <i class="fa-solid fa-minimize"></i>
                    <h3>Small Class Sizes</h3>
                    <p>A small class size helps teachers keep track of everyone's performance effectively
                        while simultaneously making students more confident in themselves.
                    </p>
                </div>
                <div class="feature">
                    <i class="fa-solid fa-clipboard-question"></i>
                    <h3>Frequent Mock Tests</h3>
                    <p>Daily mock tests give students a tough time which helps them in recognising their own
                        short comings and ultimately improve on them to achieve better results.
                    </p>
                </div>
                <div class="feature">
                    <i class="fa-solid fa-wallet"></i>
                    <h3>Affordable Coaching</h3>
                    <p>Relatively cheap prices makes the course accessible to a larger majority of people
                        so that more and more students can join the band wagon.
                    </p>
                </div> */}
            </div>
        </section>


        {/* <!-- icons -->
        <!-- <i class="fa-sharp fa-solid fa-graduation-cap"></i> --> 
        <!-- <i class="fa-solid fa-book-circle-arrow-right"></i> -->
        <!-- <i class="fa-light fa-clipboard-question"></i> -->
        <!-- <i class="fa-sharp fa-solid fa-screen-users"></i> -->
        <!-- <i class="fa-sharp fa-solid fa-people-arrows"></i> -->
        <!-- <i class="fa-regular fa-person-circle-check"></i> -->
        <!-- <i class="fa-sharp fa-solid fa-book"></i> -->
        <!-- <i class="fa-solid fa-pen-nib"></i> -->
        <!-- <i class="fa-solid fa-headphones"></i> -->
        <!-- <i class="fa-solid fa-headphones-simple"></i> -->
        <!-- <i class="fa-solid fa-lips"></i> --> */}
    </div>
    )
}

export default Home;