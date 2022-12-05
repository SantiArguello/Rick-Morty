import React from "react"
import { connect } from "react-redux"
import  Card  from "../Card/Card.jsx"

const Favorites = (props) => {
    console.log(props.myFavorites)
    return (
<div>
        { props.myFavorites.map((fav) => (<Card
                name={fav.name}
                id={fav.id}
                species={fav.species}
                gender={fav.gender}
                image={fav.image}
                key={fav.id}
        />))}
            
</div>
    )
}
function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps)(Favorites)