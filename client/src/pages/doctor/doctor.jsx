/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import useAuthProvider from "../../hooks/useAuthProvider";
import DoctorHttpRequest from "../../services/Doctor.services";
import Review from "./../../components/Review/Review";
import AppointmentForm from "./components/AppointmentForm";

function Doctor() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  const [reviews, setReviews] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    appointment_type: "",
    time: "",
    symptom: "",
  });

  const { user } = useAuthProvider();

  useEffect(() => {
    async function loadDoctors() {
      setLoading(true);
      try {
        const data = await DoctorHttpRequest.getSingleDoctor(id);
        setDoctor(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadDoctors();
  }, [id]);

  useEffect(() => {
    async function loadDoctorsReviews() {
      setLoading(true);
      try {
        const data = await DoctorHttpRequest.getDoctorReviews(id);
        setReviews(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadDoctorsReviews();
  }, [id]);

  useEffect(() => {
    async function loadDoctorsAvailableTime() {
      setLoading(true);
      try {
        const data = await DoctorHttpRequest.getDoctorsAvailableTime(id);
        setAvailableTimes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadDoctorsAvailableTime();
  }, [id]);

  function handleAppointmentFormChange(e) {
    const { value, name } = e.target;
    setAppointmentForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleAppointmentFormSubmit(e) {
    e.preventDefault();
    const data = {
      ...appointmentForm,
      appointment_status: "Pending",
      cancel: false,
      patient: user?.patient_id,
      doctor: id,
    };
    try {
      await DoctorHttpRequest.postAppointment(data);
      toast.success("Appointment fixed successfully");
      document.getElementById("appointment_modal").close();
    } catch (error) {
      toast.error(error?.response?.data?.patient[0]);
      console.log(error);
    }
  }

  return (
    <>
      {loading ? (
        <Loader styles="h-screen flex justify-center items-center" />
      ) : (
        <section className="bg-white rounded-3xl max-w-6xl mx-auto my-10 shadow py-10">
          <div className="flex justify-between items-center">
            <div className="w-[30%]">
              <img
                className="block mx-auto h-[200px] rounded-full object-cover w-[200px]"
                src={doctor?.image}
                alt=""
              />
            </div>

            <div className="w-[70%] space-y-3">
              {/* details */}
              <h1 className="text-4xl font-semibold text-[var(--text-color)]">
                {doctor?.full_name}
              </h1>
              {doctor?.specialization?.map((spe, i) => (
                <span
                  key={i}
                  className="uppercase me-2 text-sm font-semibold border text-gray-500 px-1 rounded"
                >
                  {spe}
                </span>
              ))}
              <p className="text-sm text-gray-600 w-2/5">
                Lorem ipsum dolor sit amet consecte adipiscing elit amet
                hendrerit pretium nulla sed enim iaculis mi.{" "}
              </p>
              <h4 className="text-xl  font-semibold text-[var(--text-color)]">
                Fees: {doctor?.fee} BDT
              </h4>
              {user?.user_id && (
                <button
                  onClick={() =>
                    document.getElementById("appointment_modal").showModal()
                  }
                  className="py-2  px-4 bg-[#06ABA1] rounded-full text-white font-semibold"
                >
                  Take Appointment
                </button>
              )}
            </div>
            {/* Modal */}
            <AppointmentForm
              handleAppointmentFormChange={handleAppointmentFormChange}
              handleAppointmentFormSubmit={handleAppointmentFormSubmit}
              availableTimes={availableTimes}
            />
          </div>

          {/* Reviews */}
          <h1 className="text-3xl text-center mt-20 uppercase font-semibold tracking-wider text-gray-700">
            Ratings FROM PATIENTS
          </h1>
          <Review reviews={reviews} styles="bg-gray-100 shadow-lg border" />
        </section>
      )}
    </>
  );
}

export default Doctor;
