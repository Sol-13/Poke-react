import React, { useState, useEffect } from 'react';
/*Componentes*/
import InfoPoke from './InfoPoke';
import BuscarPoke from './BuscarPoke';


function Pokedex () {

const [ error, setError ] = useState(false)
const [ loading, setLoading ] = useState(true)
const [ pokemon, setPokemon ] = useState(null)
const RandomId = Math.floor(Math.random() * 806 + 1) /*formula para datos aleatorios, usar math.floor y math.random como son 807 calcular 806+1*/
const [ pokemonID, setPokemonId ] = useState(RandomId)

// Solamente esta cargando mientras hacemos la petición,
  // cuando esta se resuelve :  fue un éxito o un error.
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)//esta ruta permite buscar a los pokemones por nombre y por ID.
      .then(res => res.json())
      .then(data => {        // Si todo esta bien, actualizamos el pokemón
                            // Y le indicamos que no hay error
        setPokemon(data)
        setLoading(false)
        setError(false)
      })
      .catch(err => {
        setLoading(false)
        setError(true)
      })
  }, [pokemonID]) //para que se ejecute cuando cambie el valor de alguno de los elementos incluidos en le array; porque si el array esta vacio solo se ejecuta cuando se monta el componente.


    return (
        <div className="pokedex"> 
      <div className="pokedex-left">
        <div className="pokedex-left-top">
          <div className={`luces cielito principal ${loading ? 'animacion':'' }` } /> {/*usando condicionales  ? : agregamos la animacion mientras se cargan los datos*/}
          <div className="luces roja" />
          <div className="luces amarilla" />
          <div className="luces verde" />
        </div>
        <div className="pokedex-pantalla-container">
          <InfoPoke 
          /*pasar estado de carga y error*/
          pokemon={pokemon}
          loading={loading}
          error={error}
        />
        </div>
        <div className="pokedex-left-bottom" >
          <div className="pokedex-left-bottom-luces">
            <div className="luces azul mediana" />
            <div className="luces verde largas"  />
            <div className="luces naranja largas"/>
          </div>

          <BuscarPoke 
            setPokemonId={setPokemonId}
            setLoading={setLoading}
            setError={setError}
          />

        </div>
      </div>
      
      <div className="pokedex-right-front" />
  
      <div className="pokedex-right-back "
      
      
      />
     
      
    

    </div>

    )
}

export default Pokedex;