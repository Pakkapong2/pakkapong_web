import http from "../http-common";

const get = () => {
  return http.get("/users");  //localhost:4000/users
}

const UserService = {
  get
}

export default UserService;