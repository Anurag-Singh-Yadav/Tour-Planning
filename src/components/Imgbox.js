import './imgbox.css';

function ImgBox(props){

    return (
        <div className="flex justify-center imgc">
            <img src={props.image} className="imgf" alt='BOX'></img>
        </div>
    )

}

export default ImgBox;
