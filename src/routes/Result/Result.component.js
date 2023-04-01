import "./result.styles.scss"
import ImageContainer from "../../components/image-container/image-container.component.jsx"
import ScholarCard from "../../components/scholar-card/scholar-card.component"
import two from "../../assets/IMG_1377.png"

const image = {
    heading: "Meet Our Scholars",
    imageUrl: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

const content = {
    image: two,
    name: "Hello",
    bands: 7.5
}

const Result = () => {
    return (
        <div>
            <ImageContainer content={image}/>

            <div className="scholars">

                <ScholarCard content={content}/>

            </div>
            
        </div>
    )
}

export default Result;