import './btn.css';

function Btn(props){

    function notInterest(){
        props.remove(props.id);

    }
    return (
        <div className="flex justify-center items-center">
            <button className="btn" onClick={notInterest}>{props.content}</button>
        </div>
    )
}
export default Btn;