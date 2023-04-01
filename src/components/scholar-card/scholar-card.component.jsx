import "./scholar-card.styles.scss"

const ScholarCard = ({ content }) => {

    const { image, name, bands } = content;

    return (
        <div className="scholar-card">
            <img src={image} alt="score" />
            <h3>{name}</h3>
            <h3>{bands}</h3>
        </div>
    )
}

export default ScholarCard;