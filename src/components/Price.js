import './price.css';

function Price(props){
    return (
        <div className="goto">
            <div className="place">{props.place}</div>
            <div className="price">{props.price}</div>
        </div>
    )
}
export default Price;