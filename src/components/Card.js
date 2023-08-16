import "./card.css";
import ImgBox from "./Imgbox.js";
import Price from "./Price.js";
import Disce from "./Info.js";
import Btn from "./Btn.js";
// import Tour from "./Tour.js";
function Card(props) {
  // console.log(props);
  return (
    <div>
      
      <div>
        <div className="flex flex-col flex-wrap w-[350px] min-h-[330] card">
          <ImgBox image={props.image}></ImgBox>
          <Price price={props.price} place={props.place}></Price>
          <Disce info={props.info}></Disce>
          <Btn remove={props.remove} id={props.id}></Btn>
        </div>
      </div>
    </div>
  );
}
export default Card;
