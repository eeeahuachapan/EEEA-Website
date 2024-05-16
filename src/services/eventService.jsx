import axios from "axios";

export const getEvents = async ({month, completed}) => {
    try {
        if (completed !== null) {
          const response = await axios.get(`/events?year=2024&startMonth=1&endMonth=12&groupedByMonth=false&completed=${completed}`);
          
              if (response.status === 200) {
                return response.data;
              } else {
                return [];
              }
        }
        const response = await axios.get(`/events?year=2024&startMonth=1&endMonth=12&groupedByMonth=false`);
          
        if (response.status === 200) {
          return response.data;
        } else {
          return [];
        }
      } catch (error) {
        console.error("An error occurred:", error);
        return [];
      }
  }