import "./sample-paper.styles.scss"

const SamplePaper = ({ file }) => {

    const { name, path } = file;

    return (
        <div className="sample-paper">
            <h3>{name}</h3>
            <a href={`${path}`} download={name}>DOWNLOAD</a>
        </div>
    )
}

export default SamplePaper;