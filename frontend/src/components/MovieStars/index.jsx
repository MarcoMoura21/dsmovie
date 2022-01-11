import {ReactComponent as Starfull} from 'ascets/img/star-full.svg';
import {ReactComponent as Starhalf} from 'ascets/img/star-half.svg';
import {ReactComponent as Starempty} from 'ascets/img/star-empty.svg';
import './styles.css';

function MovieStars() {

    return (

        <div className="dsmovie-stars-container">
            <Starfull />
            <Starfull />
            <Starfull />
            <Starhalf />
            <Starempty />
        </div>
    );
}

export default MovieStars;