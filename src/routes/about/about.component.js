import "./about.styles.scss"
import ImageContainer from "../../components/image-container/image-container.component";
import backgroundContainer from "../../background-images";
import CEO from "../../assets/CEO-modified-transformed.png"
import DIRECTOR from "../../assets/Director.png"
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule.component";
import AdministratorCard from "../../components/staff-card/administrator-card.component";
import Administrators from "../../Administrators";

const content = {
    C: `Irure officia aliquip do nulla amet anim ut anim eiusmod et. Minim excepteur ea dolore quis adipis
    icing. Eiusmod officia qui elit sint amet officia qui officia non mollit. Elit ut quis eiusmod pariatur c
    ommodo aliquip consectetur pariatur.`,
    D: `Cillum laboris do elit mollit aliqua mollit ad. Labore ut commodo amet elit cillum velit. Culpa pariatur
     ut eiusmod reprehenderit cillum nisi est aliquip magna dolore irure in et. Occaecat sint incididunt dolore 
     veniam non nostrud pariatur consequat.`
}

const { one, two } = Administrators;

const About = () => {
    return (
        <div className="about-us">
            <ImageContainer content={backgroundContainer.image6} />
            <div className="about">

                <div className="about-container">
                    <AdministratorCard administrator={one} />
                    <p>{content.C}</p>
                </div>

                <div className="about-container">
                    <p>{content.D}</p>
                    <AdministratorCard administrator={two} />
                </div>

                <HorizontalRule />
            </div>
        </div>
    )
}

export default About;