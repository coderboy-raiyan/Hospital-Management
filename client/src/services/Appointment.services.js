import httpRequest from "./http.services";

class AppointmentHttpRequest {
  async getAppointments(user_id) {
    const { data } = await httpRequest.get(
      `/appointment/?patient_id=${user_id}`
    );
    return data;
  }

  async getPatient(user_id) {
    const { data } = await httpRequest.get(`/patient/list/?user_id=${user_id}`);
    return data;
  }
}

const appointmentHttpRequest = new AppointmentHttpRequest();

export default appointmentHttpRequest;
