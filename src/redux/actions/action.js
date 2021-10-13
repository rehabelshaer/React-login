import { LOGIN_CONFIRMED_ACTION } from '../type';

//add token action
export const login_confirm = (data) =>{
    const action ={
        type : LOGIN_CONFIRMED_ACTION,
        data
    }
    console.log(action)
    return action
}
