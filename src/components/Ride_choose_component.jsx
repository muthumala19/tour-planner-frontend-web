import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faVanShuttle,faCarSide} from '@fortawesome/free-solid-svg-icons';

export default function Ride_choose_component(){



    

    return(
        <div  style={{display:"flex" , justifyContent:"center"}}>
            <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"/>
            <label class="btn btn-primary" for="option1"><FontAwesomeIcon icon={faEnvelope} style={{fontSize:"30px",justifyContent:"left"}}/> </label>

            <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
            <label class="btn btn-primary" for="option2"><FontAwesomeIcon icon={faCarSide} style={{fontSize:"30px",justifyContent:"left"}}/></label>

            <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" />
            <label class="btn btn-primary" for="option3"><FontAwesomeIcon icon={faVanShuttle} style={{fontSize:"30px",justifyContent:"left"}}/></label>
        </div>
    )
}