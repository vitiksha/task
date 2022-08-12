import { UserType } from '../constants';
import restcountires from '../apis/restcountries'
import axios from 'axios';

export const userSignUp = ({state}) => {
  let data = JSON.parse(localStorage.getItem("user")) || [];
  data.push(state);
  localStorage.setItem("user",JSON.stringify(data));
  return (dispatch) =>{
    dispatch({type: UserType.ADD,data: state});
  }
};

export const userGetData =()=> async(dispatch) =>{
  const response = await axios.get("https://restcountries.com/v2/all");
  //let data = JSON.parse(localStorage.getItem("countries")) || [];
  dispatch({type: UserType.GET,payload:response.data});
 
  console.log("payload",response.data);
}

export default userSignUp;


