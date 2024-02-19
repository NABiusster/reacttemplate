import {Car} from "../Car/Car";

const Cars = ({cars, setCarForUpdate, changeTrigger}) => {
    return (
        <div className={"container"}>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} changeTrigger={changeTrigger}/>)}
        </div>
    );
};

export {Cars};