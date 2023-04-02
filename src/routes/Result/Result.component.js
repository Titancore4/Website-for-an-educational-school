import "./result.styles.scss"
import ImageContainer from "../../components/image-container/image-container.component.jsx"
import ScholarCard from "../../components/scholar-card/scholar-card.component"
import Scholars from "../../scholars"

const image = {
    heading: "Meet Our Scholars",
    imageUrl: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

const Result = () => {
    return (
        <div className="result">
            <ImageContainer content={image}/>

            <div className="box">
                <div className="scholars">
                    {Scholars.map((scholar) => (<ScholarCard key={scholar.id} scholar={scholar}/>))}
                </div>
            </div>

        </div>
    )
}

export default Result;