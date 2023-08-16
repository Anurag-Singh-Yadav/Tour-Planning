import { useState } from 'react';
import './info.css';
function Info(props){
    const [readMore,disc] = useState(false);
    const st = `${props.info.substring(0,200)}....`;
    function change(){
        if(readMore === true){
            info_dis(st);
            disc(false);
        }else{
            disc(true);
            info_dis(props.info);
        }
        
    }
    const [discription,setmore] = useState(st);

    function info_dis(temp){
        setmore(temp);
    }

    return (
        <div>
            {discription}
            <span className='cursor-pointer text-cyan-400' onClick={change}>{(readMore) ? `readless`:`readmore`}</span>

        </div>
    )
}
export default Info;