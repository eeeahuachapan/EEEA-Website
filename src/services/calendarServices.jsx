import axios from "axios";

export const getAllActivities = async () => {
    try {
        const response = await axios.get(`/activities?year=2024&startMonth=1&endMonth=12&groupedByMonth=false`);

        if (response.status === 200) {
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
};

export const getActivitiesByMonth = async ( month ) => {
    try {
        const response = await axios.get(`/activities/month/${month}`);

        if (response.status === 200) {
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
};