import React, { PureComponent } from 'react';
import './PokeDex.css';
import NavBar from './NabBar';
import axios from 'axios';
import PokeList from './PokeList';

class PokeDex extends React.Component{
constructor(props){
super(props);
this.state = {
    pokemon: '',
    data: null,
    pokeUrl: null,
    pokeObject: null
};
this.searchPokemon = this.searchPokemon.bind(this);
};


async componentDidMount(){
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=5000`);
        const data = await res;
        this.setState({data: data.data.results});
        } catch (err) {
        alert(err);
        }
};


async getPokeObj(){
    // try {
        const res = await axios.get(this.state.pokeUrl);
        const data = await res;
        
    
        let baseExp = data.data.base_experience;
        let id = data.data.id;
        let height = data.data.height;
        let image = data.data.sprites.other.dream_world.front_default;
       console.log(id);
        const res2 = await axios.get(`https://pokeapi.co/api/v2/ability/${id}`);
         let speciality = 'bcd';
         let extras = 'abc';
         
        //  res2.data.effect_entries[1].effect;
        // res2.data.effect_entries[1].short_effect;
       this.setState({pokeObject: {
        baseExperience: baseExp,
        img: image,
        ID: id,
        Height: height,
        SP: speciality,
        eSP: extras
       }});
        
        // } catch (err) {
        // alert(err);
        // }
};


getPokemon(){


let urlPokemon;
this.state.data.forEach(d => {
    if(d.name === this.state.pokemon) {
        urlPokemon = d.url;
    } 
  
});

this.setState({pokeUrl: urlPokemon}, this.getPokeObj);


};



searchPokemon(name){
this.setState({pokemon: name}, this.getPokemon);
};

render() {
    if(this.state.pokeObject !== null) {
        return (
            <div className="PokeDex">
               <NavBar
               searchPokemon={this.searchPokemon}
               /> 
               <PokeList
               image={this.state.pokeObject.img}
               id={this.state.pokeObject.ID}
               basExp={this.state.pokeObject.baseExperience}
               Height={this.state.pokeObject.Height}
               SP={this.state.pokeObject.SP}
               eSP={this.state.pokeObject.eSP}
               />
            </div>
        )
    } else {
        return (
            <div className="PokeDex">
               <NavBar
               searchPokemon={this.searchPokemon}
               /> 
            </div>
        ) 
    }
    
}
};


export default PokeDex;
