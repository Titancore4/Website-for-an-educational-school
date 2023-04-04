import "./result.styles.scss"
import ImageContainer from "../../components/image-container/image-container.component.jsx"
import ScholarCard from "../../components/scholar-card/scholar-card.component"
import backgroundContainer from "../../background-images"
import Scholars from "../../scholars"
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule.component"

const image = {
    heading: "Meet Our Scholars",
    imageUrl: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

const Result = () => {
    return (
        <div className="result">
            <ImageContainer content={backgroundContainer.image4}/>

            <div className="box">
                <div className="scholars">
                    {Scholars.map((scholar) => (<ScholarCard key={scholar.id} scholar={scholar}/>))}
                </div>
            </div>

            <HorizontalRule />

        </div>
    )
}

export default Result;