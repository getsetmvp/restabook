// utils
import apiService from "../../utils/apiService";

// interface
interface contact {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// methods
class ContactApi {
  async contact({
    name,
    email,
    phone,
    message,
    subject,
  }: contact) {
    try {
      await apiService.post(`/v1/contact`, {
        name,
        email,
        phone,
        subject,
        message,
      });
      return apiService.response(true, "Message Sent Successfully", "");
    } catch (err: any) {
      return apiService.response(false, {}, err.response.data.message);
    }
  }
}

const contactApi = new ContactApi();
export default contactApi;
