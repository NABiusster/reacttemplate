import {joiResolver} from "@hookform/resolvers/joi";

import {useForm} from "react-hook-form"
import {usersService} from "../../../services/usersService"
import css from "./UserForm.module.css"
import {userValidator} from "../../../validators/userValidator";

const UserForm = ({setUsers}) => {
    const {
        reset,
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    })

    const postUser = async (user) => {
        await usersService.create(user).then(({data}) => setUsers(prev => [...prev, data]))
        reset()
    }

    return (
        <div className={css.container}>
            <h2>Create user</h2>
            <form onSubmit={handleSubmit(postUser)}>
                <input type="text" placeholder={"name"}{...register('name')}/>
                <input type="text" placeholder={"username"}{...register('username')}/>
                <input type="text" placeholder={"email"}{...register('email')}/>
                <button>Create</button>
                {errors.brand && (<div>{errors.brand.message}</div>)}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
            </form>

        </div>
    );
};

export {UserForm};