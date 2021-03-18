import React, { PureComponent } from 'react';
import './PokeList.css';

class PokeList extends React.Component{
render() {
    const {image, id, basExp, Height, SP, eSP} = this.props;
    console.log(this.props);
    return (
        <div className='PokeList'>
            <div className="poke-img">
               <img className="image" src={image} alt="image"/>
            </div>

            <div className="poke-info">
                <p>ID: {id}</p>
                <p>Base Experience: {basExp}</p>
                <p>Height: {Height}</p>
                <p>Speciality: {SP}</p>
                <p>Extra ability: {eSP}</p>
            </div>
        </div>
    )
}
};

export default PokeList;


// baseExperience: baseExp,
//         img: image,
//         ID: id,
//         Height: height,
//         SP: speciality,
//         eSP: extras