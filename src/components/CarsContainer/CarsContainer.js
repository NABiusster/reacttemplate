import {Cars} from "./Cars/Cars";
import {useEffect, useState} from "react";

import {carsService} from "../../services/carsService";
import {CarForm} from "./CarForm/CarForm";

const CarsContainer = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)
    useEffect(() => {
        carsService.getAll().then(({data})=>setCars(data))
    }, [trigger]);
    const changeTrigger = () => {
     setTrigger(prev=>!prev)
    }
    return (
        <div className={"container"}>
            <CarForm changeTrigger={changeTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <Cars cars={cars} changeTrigger={changeTrigger} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsContainer};