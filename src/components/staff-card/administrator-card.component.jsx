import "./administrator-card.styles.scss"

const AdministratorCard = ({ administrator }) => {
    const {image, name, title} = administrator;

    return (
        <div className="outline">
            <div className="administrator-card">
                <img src={image} alt="CEO" />
                <span>{name}</span>
                <span>{title}</span>
            </div>
        </div>
    )
}

export default AdministratorCard;