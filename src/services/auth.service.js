import axios from "axios";



class AuthService {
  login(username, password) {
    return axios
      .post('authenticate' , {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
     
     
     
     
      })
      .catch(err =>{
        console.log(err)
    });
      
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post("ajoutUser", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();