import React from "react";
import "./ReservationsSectionContainer.css";

// hooks
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

// reducers
import { getAllUserReservations } from "../../store/reservation/reservationSlice";

const ReservationsSectionContainer = () => {
  const dispatch = useAppDispatch();
  const { reservations } = useAppSelector((state) => state.reservation);

  // function
  React.useEffect(() => {
    dispatch(getAllUserReservations());
  }, [dispatch]);
  return (
    <div id="my-reservations">
      {reservations.length === 0 ? (
        <div className="empty">you dont have any reservation yet</div>
      ) : (
        <table className={`my-reservations-table`}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th className="hidden-xs">Persons</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation._id}>
                <td className="reservation-name">{reservation.name}</td>
                <td className="reservation-date">
                  {new Date(reservation.date).toLocaleDateString()}
                </td>
                <td className="reservation-time">
                  {new Date(reservation.date).toLocaleTimeString()}
                </td>
                <td className="reservation-persons hidden-xs">
                  {reservation.persons}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReservationsSectionContainer;
