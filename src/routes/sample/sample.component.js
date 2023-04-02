import SamplePaper from "../../components/sample-paper/sample-paper.component"
import pdf from "../../pdfs/BigO_Cheatsheet_Zero_To_Mastery_V1.01.pdf"
import ImageContainer from "../../components/image-container/image-container.component"
import backgroundContainer from "../../background-images"
import SamplePapers from "../../sample-papers"
import "./sample.styles.scss"

const file = {
    name: "BIGO",
    path: pdf
}

const Sample = () => {
    return (
        <div className="sample">
        <ImageContainer  content={backgroundContainer.image4}/>
            <div className="sample-papers">
                {SamplePapers.map((paper) => (<SamplePaper key={paper.id} file={paper} />))}
            </div>
        </div>
    )
}

export default Sample;