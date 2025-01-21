import axios from "axios";

// Fetch all events using month value as filter parameter
export const getEvents = async ({ month, completed }) => {
  try {
    if (month !== null) {
      
      // Adds completed value as a filter parameter
      const response = await axios.get(`/events?year=2025&startMonth=${month}&endMonth=${month}&groupedByMonth=false${completed !== null ? `&completed=${completed}` : ''}`);

      if (response.status === 200) {
        return response.data;
      } else {
        return [];
      }
    }

    // Fetch all events with no filter in case month is not defined
    // Adds completed value as a filter parameter
    const response = await axios.get(`/events?year=2025&startMonth=1&endMonth=12&groupedByMonth=false${completed !== null ? `&completed=${completed}` : ''}`);

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