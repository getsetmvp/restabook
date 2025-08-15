// utils
import apiService from "../../utils/apiService";

// interface
interface Reservation {
  name: string;
  email: string;
  date: string;
  persons: string;
  message: string;
}

// methods
class ReservationApi {
  async getUserReservations() {
    try {
      const res = await apiService.get(`/v1/reservation`);
      return apiService.response(true, res.data, "");
    } catch (err: any) {
      return apiService.response(false, {}, err.response.data.message);
    }
  }

  async createReservation({
    name,
    email,
    date,
    persons,
    message,
  }: Reservation) {
    try {
      const res = await apiService.post(`/v1/reservation`, {
        name,
        email,
        date,
        persons,
        message,
      });
      return apiService.response(true, res.data, "");
    } catch (err: any) {
      return apiService.response(false, {}, err.response.data.message);
    }
  }
}

const reservationApi = new ReservationApi();
export default reservationApi;
