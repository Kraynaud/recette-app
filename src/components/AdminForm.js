import React from 'react';

const AdminForm = ({
    id: key,
    supprimerRecette,
    majRecette,
    recettes
}) => {
    const recette = recettes[key]

    const handleChange = (event, key) => {
        const {name, value} = event.target
        const recette = recettes[key]
        recette[name] = value
        majRecette(key, recette)
    }

    return (
        <div className="card">
            <form className="admin-form">
                <input value={recette.nom} type="text" onChange={e => handleChange(e, key)} name="nom" placeholder="Nom de la recette"/>
                <input value={recette.image} type="text" onChange={e => handleChange(e, key)} name="image" placeholder="Adresse de l'image"/>
                <textarea value={recette.ingredients} name="ingredients" onChange={e => handleChange(e, key)} rows="3" placeholder="Liste des ingrédients"/>
                <textarea value={recette.instructions} name="instructions" onChange={e => handleChange(e, key)} rows="15" placeholder="Liste des instructions"/>
            </form>
            <button onClick={() => supprimerRecette(key)}>Supprimer</button>
        </div>
    );
};

export default AdminForm;
