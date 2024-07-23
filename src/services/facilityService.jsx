import axios from "axios";

// Fetch all facilities
export const getFacilities = async () => {
    try {
        const response = await axios.get(`/installations`);

        if (response.status === 200) {
            return response.data.data;
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
}