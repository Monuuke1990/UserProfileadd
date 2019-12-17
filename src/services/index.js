import {data} from './userData';


 const getUsers = () => {
//   console.log(json);
    return data;
  }

  const getUserById = (id) => {
    return data.filter(user=>user.id === id)[0] 
  }



  const setData = (user) =>{
    //TODO add user
    return data;
  }

  export default {
    getUsers,
    getUserById,
    setData
  }