import './CardTheBestDestinations.css';

const destinationsCard = props => {
    const {imageUrl, subtitle} = props.card;
    return (
        <div className="destinationsItem">
            <div className="destinations__content">
            <div className="destinations__img">
                <img src={imageUrl} alt="Pictures"/>
            </div>
            <div className="destinations__button">
                <button href="#" target="_blank">Book now</button>
            </div>
            </div>
            <p>{subtitle}</p>
        </div>
    )
}
export default destinationsCard;