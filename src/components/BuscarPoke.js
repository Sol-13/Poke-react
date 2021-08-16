import React, { useState } from 'react';

function BuscarPoke ({ setPokemonId, setLoading, setError }){
  const [ pokemon, setPokemon ] = useState('')
  
  const handleChange = e => {
    setPokemon(e.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
 
    // Cargando, hace la peticion a la api
   
 if(pokemon !== ''){
     //Otra solucion podria ser = setError (false) ?
       setError(true)
        setLoading(true)
    // Podria acrotarse asi? = setPokemonId(window.isNaN(parseInt(pokemon)) ? pokemon.toLowerCase() : pokemon)
        const pokemonID = window.isNaN(parseInt(pokemon)) ? pokemon.toLowerCase() : pokemon
        setPokemonId(pokemonID)
        setPokemon('')
        return
      }
      setError(true) //Si manda el formulario vacío, hay un error
    }

  return (
    <form className="pokemon-form" onSubmit={handleSubmit}>
      <input
        className="pokemon-input"
        type="text"
        name="pokemon"
        value={pokemon}
        placeholder="Busca tu pokemon"
        //Actualizas el valor del input cuando el usuario teclea
        //onChange={handleChange} = version corta, sirve?
        onChange={e => setPokemon(e.target.value)}
        autoComplete="off"/>
      <input type="submit" className="pokemon-btn" value=""/>
    </form>
  )
}

export default BuscarPoke;