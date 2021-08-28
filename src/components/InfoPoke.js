import React from 'react'
import StatPoke from './StatPoke.js';


import Pokebola from '../img/pokebola.gif';
import Error from '../img/error.gif';

  //devuelve este componente cuando hay un error; al hacer un return el resto del codigo no se ejecuta.

function InfoPoke({ pokemon, loading, error }){
    
    if(error){
        return (
          <div className="pokedex-pantalla">
            <img
              src={Error}
              alt="Hubo un error buscando tu pokemon"
              className="pokedex-no-pantalla"
            />
          </div>
        )
      }

  return (
      
    // Si no hay pokemon o si esta cargando entonces...
    
    <div className="pokedex-pantalla">
        
        { !pokemon || loading ? 
        <img
          src={Pokebola}
          alt="Aun no hay ningun pokemon"
          className="pokedex-no-pantalla"
        /> 
        :
      //si esta todo bien devuelve el pokemon
     
     <div className="pokemon-info">
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img
          className="pokemon-img" 
          src={pokemon.sprites.front_default} //sprite para animacion
          alt={pokemon.name}
        />
      
        {/* aca iteramos sobre la lista de estadísticas*/}
        <ul className="pokemon-stats">
          {pokemon.stats.map(item => ( <StatPoke key={item.stat.name} item={item}/>))}
        </ul>
      </div>
    }
    </div>
  )
}

export default InfoPoke;