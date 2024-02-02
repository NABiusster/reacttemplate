import './Simpson.css'
const
    Simpson = ({simpson}) => {
        const {name, image, description} = simpson
        return (
            <div>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
                <p>{description}</p>
            </div>
        );
    };

export {Simpson};