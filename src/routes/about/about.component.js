import "./about.styles.scss"
import ImageContainer from "../../components/image-container/image-container.component";
import backgroundContainer from "../../background-images";
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule.component";
import AdministratorCard from "../../components/staff-card/administrator-card.component";
import Administrators from "../../Administrators";

const content = {
    C: `Irure officia aliquip do nulla amet anim ut anim eiusmod et. Minim excepteur ea dolore quis adipis
    icing. Eiusmod officia qui elit sint amet officia qui officia non mollit. Elit ut quis eiusmod pariatur c
    ommodo aliquip consectetur pariatur.Consequat tempor amet ipsum elit voluptate cillum pariatur sit
     deserunt Lorem commodo irure ipsum et. Minim cupidatat consectetur fugiat mollit do. Officia irure
      mollit sit eiusmod cillum quis occaecat aliquip cupidatat dolor ullamco esse eiusmod. Irure eu nisi
       ipsum minim. Commodo aute in fugiat cupidatat magna exercitation do pariatur irure ipsum aliqua.
        Dolore tempor ipsum in minim.`,
    D: `Cillum laboris do elit mollit aliqua mollit ad. Labore ut commodo amet elit cillum velit. Culpa pariatur
     ut eiusmod reprehenderit cillum nisi est aliquip magna dolore irure in et. Occaecat sint incididunt dolore 
     veniam non nostrud pariatur consequat. Laborum labore id culpa occaecat anim et et. Lorem occaecat mollit
      labore ex id duis. Excepteur quis nostrud ea magna laborum officia consequat. Est eu anim tempor cupidatat
       laboris commodo. Veniam adipisicing dolor labore duis aute ut id consectetur deserunt irure irure anim.
        Sunt ullamco aliquip enim eu aliquip enim cillum consequat non incididunt enim adipisicing. Nulla in
         pariatur irure culpa occaecat excepteur.`
}

const { one, two } = Administrators;

const About = () => {
    return (
        <div className="about-us">
            <ImageContainer content={backgroundContainer.image6} />
            <div className="about">
            
                <div className="info-container">
                    <AdministratorCard administrator={one} />
                    <p>{content.C}</p>
                </div>

                <div className="info-container">
                    <p>{content.D}</p>
                    <AdministratorCard administrator={two} />
                </div>

            </div>
            <HorizontalRule />
        </div>
    )
}

export default About;