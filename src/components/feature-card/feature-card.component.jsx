import "./feature-card.styles.scss"

const FeatureCard = ({ feature }) => {

    const { className, h1, h3, p } = feature;

    return (
        <div className="feature">
            {className && <i class={className}></i>}
            {h1 && <h1>{h1}</h1>}
            {h3 && <h3>{h3}</h3>}
            {p && <p>{p}</p>}
        </div>
    )
}

export default FeatureCard;