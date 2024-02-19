import {carsService} from "../../../services/carsService";

const Car = ({car, setCarForUpdate, changeTrigger}) => {
    const {id, brand, price, year} = car;
    const deleteCar = async () => {
        await carsService.deleteById(id)
        changeTrigger()
    };
    return (
        <div className={"container"}>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>

        </div>
    );
};

export {Car};