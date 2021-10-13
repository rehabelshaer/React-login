// import { bake_cookie, read_cookie} from 'sfcookies';
import { LOGIN_CONFIRMED_ACTION } from '../type';


const token = (state , action) =>{
    
    // let token =null;
        
    if (action.type === LOGIN_CONFIRMED_ACTION){

        return{
         ...state,
        }
    }else{
        return state
    }


}
export default token