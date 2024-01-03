import httpRequest from "./http.services";

class ServiceRequest {
  async getServices() {
    const { data } = await httpRequest.get("/services").then((data) => data);
    return data;
  }
  async getDesignations() {
    const { data } = await httpRequest
      .get("/doctor/designation")
      .then((data) => data);
    return data;
  }
  async getSpecializations() {
    const { data } = await httpRequest
      .get("/doctor/specialization")
      .then((data) => data);
    return data;
  }
  async getReviews() {
    const { data } = await httpRequest
      .get("/doctor/review")
      .then((data) => data);
    return data;
  }
  async getDoctorReviews(doctor_id) {
    const { data } = await httpRequest
      .get(`/doctor/review/?doctor_id=${doctor_id}`)
      .then((data) => data);
    return data;
  }
  async getDoctors(searchParams = null) {
    let data;
    if (searchParams) {
      data = await httpRequest
        .get(`/doctor/list?search=${searchParams}`)
        .then((data) => data);
    } else {
      data = await httpRequest.get(`doctor/list`).then((data) => data);
    }
    return data.data;
  }
  async getSingleDoctor(searchParams = null) {
    let data;
    data = await httpRequest
      .get(`/doctor/list/${searchParams}`)
      .then((data) => data);

    return data.data;
  }
  async getDoctorsAvailableTime(doctor_id) {
    let data;
    data = await httpRequest
      .get(`/doctor/availabletime/?doctor_id=${doctor_id}`)
      .then((data) => data);

    return data.data;
  }
  async postAppointment(payload) {
    let { data } = await httpRequest
      .post("/appointment/", payload)
      .then((data) => data);
    return data;
  }
}

const DoctorHttpRequest = new ServiceRequest();
export default DoctorHttpRequest;
