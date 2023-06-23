import { useState } from "react";
import validation from "./validation";

const Form = ({login}) => {

    const [userData, setuserData] = useState({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (event) => {
      setuserData({
        ...userData,
        [event.target.name] : event.target.value,
      })

      setErrors(validation({
        ...userData,
        [event.target.name] : event.target.value,
      }))

    }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input type="text" name='username' value={userData.username} onChange={handleInputChange}/>
            {errors.username && <p style={{color: 'red'}}>{errors.username}</p>}
            <br></br>

            <label htmlFor="password">Password: </label>
            <input type="password" name="password" value={userData.password} onChange={handleInputChange}></input>
            {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
            <br></br>
            

            <button>LOGIN</button>


        </form>
    )

}

export default Form;