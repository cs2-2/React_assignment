import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMissions, joinMission, leaveMission } from "../redux/mission/missionSlice";
import Navbar from "./Navbar";

const Mission = () => {
  const dispatch = useDispatch();
  const Missiondata = useSelector((state) => state.missions);

  const missionData = async () => {
    const response = await fetch("http://api.spacexdata.com/v3/missions");
    const data = await response.json();
    dispatch(setMissions(data));
  };

  useEffect(() => {
    if (Missiondata.length === 0) {
      missionData();
    }
  }, [dispatch, Missiondata.length]);
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center" style={{ padding: '20px' }}>
        <table className="table table-bordered" style={{ width: '80%' }}>
          <thead>
            <tr>
              <th scope="col">Mission</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {Missiondata.map(mission => (
              <tr key={mission.mission_id}>
                <th scope="row">{mission.mission_name}</th>
                <td>{mission.description}</td>
                <td>
                  <button
                    type="button"
                    className={`btn ${mission.joined ? 'btn-success' : 'btn-secondary'}`}
                    disabled
                  >
                    {mission.joined ? 'Active Member' : 'Not a Member'}
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className={`btn ${mission.joined ? 'btn-outline-danger' : 'btn-outline-secondary'}`}
                    onClick={() =>
                      dispatch(mission.joined ? leaveMission(mission.mission_id) : joinMission(mission.mission_id))
                    }
                  >
                    {mission.joined ? 'Leave Mission' : 'Join Mission'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Mission;
