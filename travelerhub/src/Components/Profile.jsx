import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const Profile = () => {
  const reservedRockets = useSelector((state) =>
    state.rockets.filter((rocket) => rocket.reserved)
  );

  const joinedMissions = useSelector((state) =>
    state.missions.filter((mission) => mission.joined)
  );

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <h3>My Missions</h3>
            {joinedMissions.length > 0 ? (
              <ul className="list-group">
                {joinedMissions.map((mission) => (
                  <li key={mission.mission_id} className="list-group-item">
                    {mission.mission_name}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No missions joined.</p>
            )}
          </div>
          <div className="col-md-5">
            <h3>My Reserved Rockets</h3>
            {reservedRockets.length > 0 ? (
              <ul className="list-group">
                {reservedRockets.map((rocket) => (
                  <li key={rocket.id} className="list-group-item">
                    {rocket.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No rockets reserved.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
