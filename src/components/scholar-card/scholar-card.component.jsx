import "./scholar-card.styles.scss"

const ScholarCard = ({ scholar }) => {

    const { image, name, score } = scholar;

    return (
        <div>
            <div className="scholar-card">
                <h3 className="score">{score}</h3>
                <img src={image} alt="score" />
                <div className="detail">
                    <h3>{name}</h3>
                </div>
             </div>
        </div>
    )
}

export default ScholarCard;