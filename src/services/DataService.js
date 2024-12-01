import http from "../http-common";

class DataService {
  login(data) {
    return http.post("/login", data);
  }

  membership(data) {
    return http.post("/'membership/create", data);
  }




  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new DataService();