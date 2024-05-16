import axios from "axios";

export const sendEmail = async (name, lastname, email, message, phoneNumber) => {
    try {
      const response = await axios.post(`/mail/contact-us`, {
        name: name,
        lastname: lastname,
        email: email,
        message: message,
        phoneNumber: phoneNumber,
      } 
      );
  
      if (response.status === 200) {
        const data = await response;
        return data;
      }
    } catch (error) {
        console.error("An error occurred:", error);
        throw error;
      
    }
  }