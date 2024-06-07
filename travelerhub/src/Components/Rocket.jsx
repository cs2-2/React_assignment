import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRockets, reserveRocket, cancelReservation } from "../redux/rocket/rocketSlice";
import Navbar from "./Navbar";

const Rocket = () => {
  const dispatch = useDispatch();
  const Rocketdata = useSelector((state) => state.rockets);

  const rocketdata = async () => {
    const response = await fetch("https://api.spacexdata.com/v4/rockets");
    const data = await response.json();
    dispatch(setRockets(data));
  };

  useEffect(() => {
    if (Rocketdata.length === 0) {
      rocketdata();
    }
  }, [dispatch, Rocketdata.length]);

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ margin: "10px" }}>
        {Rocketdata.map((rocket) => (
          <div key={rocket.id} className="card mb-3" style={{ maxWidth: 900 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  style={{ margin: "8px" }}
                  src={rocket.flickr_images && rocket.flickr_images.length > 0 ? rocket.flickr_images[0] : ""}
                  className="img-fluid rounded-start"
                  alt={rocket.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{rocket.name}</h5>
                  {rocket.reserved && <span className="badge bg-success mb-2">Reserved</span>}
                  <p className="card-text">{rocket.description}</p>
                  <button
                    onClick={() => dispatch(rocket.reserved ? cancelReservation(rocket.id) : reserveRocket(rocket.id))}
                    className={`btn ${rocket.reserved ? "btn-danger" : "btn-primary"}`}
                  >
                    {rocket.reserved ? "Cancel Reservation" : "Reserve Rocket"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>hehe rocket</p>
    </>
  );
};

export default Rocket;
