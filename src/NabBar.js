import React, { PureComponent } from 'react';
import './NavBar.css';

class NavBar extends React.Component{
constructor(props){
    super(props);
    this.state = {pokemon: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
};


handleChange(e){
this.setState({
    [e.target.name] : e.target.value.toLowerCase()
});
};

handleClick(e){
e.preventDefault();

this.props.searchPokemon(this.state.pokemon);

this.setState({pokemon: ''});
};

render() {
    return (
        <div className="NavBar">
            <div className="logo">
            <img src="https://emojis.slackmojis.com/emojis/images/1469223471/679/charmander_dancing.gif?1469223471" alt="logo-image" height="90%" width="20%"/>
            <h1 className="header">PokeDex</h1>
            <img src="https://emojis.slackmojis.com/emojis/images/1450464069/186/pokeball.png?1450464069" alt="ball-img" height="70%" width="15%"/>
            </div>

            <div className="search">
             <input
             type="text"
             name="pokemon"
             id="pokemon"
             value={this.state.pokemon}
             placeholder="Enter Pokemon Name..."
             onChange={this.handleChange}
             />   
            <i class="fas fa-search" 
            onClick={this.handleClick}
            ></i>
            </div>
        </div>
    )
}
};

export default NavBar;
