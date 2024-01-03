/* eslint-disable react/prop-types */
function AppointmentForm({
  handleAppointmentFormChange,
  handleAppointmentFormSubmit,
  availableTimes,
}) {
  return (
    <dialog id="appointment_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div>
          <form
            onSubmit={handleAppointmentFormSubmit}
            className="space-y-2 flex flex-col justify-center items-center "
          >
            <h4 className="text-xl font-bold mb-6  text-gray-600 capitalize">
              Book your appointment
            </h4>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <span>Online</span>
                <input
                  type="radio"
                  name="appointment_type"
                  className="radio"
                  value="Online"
                  required
                  onChange={handleAppointmentFormChange}
                />
              </label>
              <label className="flex items-center space-x-2">
                <span> Offline</span>
                <input
                  type="radio"
                  name="appointment_type"
                  className="radio"
                  value="Offline"
                  required
                  onChange={handleAppointmentFormChange}
                />
              </label>
            </div>

            <input
              type="text"
              name="symptom"
              placeholder="Type your symptom"
              className="input input-bordered w-full block"
              required
              onChange={handleAppointmentFormChange}
            />

            <select
              required
              name="time"
              className="select select-bordered w-full "
              onChange={handleAppointmentFormChange}
            >
              <option disabled selected>
                Available Time
              </option>
              {availableTimes?.map((time) => (
                <option value={time?.id} key={time?.id}>
                  {time?.name}
                </option>
              ))}
            </select>

            <button type="submit" className="btn btn-neutral">
              Submit
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default AppointmentForm;
