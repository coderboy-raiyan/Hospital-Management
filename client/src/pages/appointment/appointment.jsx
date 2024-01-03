/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
import appointmentHttpRequest from "../../services/Appointment.services";
import useAuthProvider from "./../../hooks/useAuthProvider";

function Appointment() {
  const { user } = useAuthProvider();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (user?.user_id) {
      async function loadUserInfo() {
        try {
          const data = await appointmentHttpRequest.getAppointments(
            user?.patient_id
          );

          setAppointments(data);
        } catch (error) {
          console.log(error);
        }
      }
      loadUserInfo();
    }
  }, [user?.patient_id, user?.user_id]);

  return (
    <section>
      <div className="mx-auto max-w-6xl my-10">
        <h1 className="text-center text-3xl font-bold py-5 rounded-xl shadow-md text-[var(--text-color)] bg-white mb-4">
          Your Appointments
        </h1>
        <div className="overflow-x-auto bg-white rounded-xl shadow-xl">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>email</th>
                <th>Doctor</th>
                <th>Type</th>
                <th>Status</th>
                <th>Fees</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments?.map((appoint) => (
                <tr key={appoint?.id}>
                  <th>{appoint?.id}</th>
                  <td>{user?.email}</td>
                  <td>{appoint?.doctor}</td>
                  <td>{appoint?.appointment_type}</td>
                  <td>{appoint?.appointment_status}</td>
                  <td>1200</td>
                  <td>
                    {appoint?.appointment_status === "Pending" ? (
                      <button className="btn btn-error btn-sm text-white">
                        Cancel
                      </button>
                    ) : (
                      <button className="btn btn-active btn-sm text-white">
                        Done
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
