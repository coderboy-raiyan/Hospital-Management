import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import useDebounce from "../../../hooks/useDebounce";
import DoctorHttpRequest from "../../../services/Doctor.services";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query, 500);

  useEffect(() => {
    async function loadDoctors() {
      setLoading(true);
      try {
        if (debounceQuery) {
          const data = await DoctorHttpRequest.getDoctors(debounceQuery);
          setDoctors(data.results);
        } else {
          const data = await DoctorHttpRequest.getDoctors();
          setDoctors(data.results);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadDoctors();
  }, [debounceQuery]);

  useEffect(() => {
    async function loadSpecializationAndDesignation() {
      try {
        const dataDesignation = await DoctorHttpRequest.getDesignations();
        const dataSpecialization = await DoctorHttpRequest.getSpecializations();
        setDesignations(dataDesignation);
        setSpecializations(dataSpecialization);
      } catch (error) {
        console.log(error);
      }
    }

    loadSpecializationAndDesignation();
  }, []);

  return (
    <section className="grid lg:grid-cols-6 grid-cols-1 max-w-6xl mx-auto my-10">
      {/* Filter */}
      <div className="lg:col-span-1">
        <button className="btn m-1 bg-white text-gray-400">
          Filter Doctors Here :
        </button>
        <div>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-white text-gray-600"
            >
              Specialization
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44"
            >
              {specializations.map((specialization) => (
                <li key={specialization.id}>
                  <a
                    className="cursor-pointer"
                    onClick={() => setQuery(specialization.name)}
                  >
                    {specialization.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-white text-gray-600"
            >
              Designation
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44"
            >
              {designations.map((designation) => (
                <li key={designation.id}>
                  <a
                    className="cursor-pointer"
                    onClick={() => setQuery(designation.name)}
                  >
                    {designation.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Doctors */}
      <div className="lg:col-span-5 lg:mx-0 mx-4">
        <input
          type="text"
          placeholder="Type here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered input-md w-full mb-10 rounded-full shadow"
        />

        {/* Doc container */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {loading ? (
            <div className="col-span-3 flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>
              {doctors?.length === 0 && (
                <h1 className="text-3xl font-semibold my-10 text-gray-500 text-center col-span-3">
                  No result found
                </h1>
              )}
              {doctors.map((doc) => (
                <div key={doc?.id} className="card  bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={doc?.image}
                      alt="Shoes"
                      className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 object-cover w-[100px]"
                    />
                  </figure>
                  <div className="card-body items-center text-center space-y-2">
                    <h2 className="card-title text-[var(--text-color)]">
                      {doc?.full_name}
                    </h2>
                    <div className="card-actions flex flex-wrap">
                      {doc?.specialization?.map((desi, index) => (
                        <span
                          className="text-sm font-semibold border text-gray-500 px-1 rounded"
                          key={index}
                        >
                          {desi}
                        </span>
                      ))}
                    </div>
                    <Link to={`doctor/${doc.id}`}>
                      <button className="btn btn-primary btn-sm">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
