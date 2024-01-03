import httpRequest from "./http.services";

class AuthHttpRequest {
  async signUp(payload) {
    const { data } = await httpRequest.post("/patient/register/", payload);
    return data;
  }
  async signIn(payload) {
    const { data } = await httpRequest.post("/patient/login/", payload);
    return data;
  }
}

const authHttpRequest = new AuthHttpRequest();

export default authHttpRequest;
