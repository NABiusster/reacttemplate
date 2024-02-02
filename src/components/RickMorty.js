const
    RickMorty = ({character}) => {
        const {id, name, status, species, gender, image} = character
        return (
            <div>
                <h3>{id} - {name}</h3>
                <img src={image} alt={name}/>
                <div>Статус:{status}</div>
                <div>Раса:{species}</div>
                <div>Стать:{gender}</div>
            </div>
        );
    };

export {RickMorty};