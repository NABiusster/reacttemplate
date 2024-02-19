import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carsService} from "../../../services/carsService";
import {carValidator} from "../../../validators/carValidator";

const CarForm = ({carForUpdate, setCarForUpdate, changeTrigger}) => {
    const {
        reset,
        register,
        handleSubmit,
        formState: {
            errors
        },
        setValue
    } = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    })
    useEffect(() => {
        if (carForUpdate) {
            setValue("brand", carForUpdate.brand, {shouldValidate: true})
            setValue("year", carForUpdate.year, {shouldValidate: true})
            setValue("price", carForUpdate.price, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);
    const saveCar = async (car) => {
        await carsService.create(car)
        changeTrigger()
        reset()
    };
    const updateCar = async (car) => {
        await carsService.updateById(carForUpdate.id, car)
        changeTrigger()
        setCarForUpdate(null)
        reset()
    };
    return (
        <div className={"container"}>
            <form onSubmit={handleSubmit(carForUpdate ? updateCar : saveCar)}>
                <input type="text" placeholder={"Brand"} {...register('brand')}/>
                <input type="text" placeholder={"price"} {...register('price')}/>
                <input type="text" placeholder={"year"} {...register('year')}/>
                <button>{carForUpdate ? "Update" : "Save"}</button>

            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </div>
    );
};

export {CarForm};