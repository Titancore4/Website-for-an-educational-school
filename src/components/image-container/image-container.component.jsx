import "./image-container.styles.scss"

const ImageContainer = ({ content }) => {
    
    const { heading, imageUrl } = content;

    return (
        <div class="image-container" style={{backgroundImage: `url(${imageUrl})`}}>
            <div>
                <h1>{heading}</h1>
            </div>
        </div>
    )
};

export default ImageContainer;