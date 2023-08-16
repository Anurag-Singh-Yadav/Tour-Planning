import "./card.css";
import ImgBox from "./Imgbox.js";
import Price from "./Price.js";
import Disce from "./Info.js";
import Btn from "./Btn.js";
// import Tour from "./Tour.js";
function Card(props) {
  // console.log(props);
  return (
    <div className="main-card">
      <div className="flex flex-col flex-wrap w-[350px] min-h-[330] card">
        <ImgBox image={props.image}></ImgBox>
        <div className="bg-[#4F709C] px-2">
          <Price price={props.price} place={props.place}></Price>
          <Disce info={props.info}></Disce>
          <div className="flex justify-between items-center">
            <Btn remove={props.remove} content={"Not Interseted"} id={props.id}></Btn>
            {/* <Interset></Interset> */}
            <Btn content={"Ready"}></Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
