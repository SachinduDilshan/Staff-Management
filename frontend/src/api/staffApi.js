import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/staff";

export const getAllStaff = () => {
    const response=axios.get(API_BASE_URL);
    return response.data;
};

export const getStaffOnLeave = () => {
    const response=axios.get(API_BASE_URL + "/on-leave");
    return response.data;
};

export const createStaff = async (staffData) => {
    const response=await axios.post
}