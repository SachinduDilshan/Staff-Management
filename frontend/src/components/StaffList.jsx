import { useEffect, useState } from "react";
import { getAllStaff } from "../api/staffApi";

const StaffList = () => {
    const [staff, setStaff] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await getAllStaff();
                setStaff(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching staff:", error);
                setLoading(false);
            }
        };
        fetchStaff();
    }, []);

    if (loading) {
        return <p>Loading the Staff...</p>;
    }

    return (
        <div>
            <h2>Staff List</h2>
            <ul>
                {staff.map((person) => (
                    <li key={person._id}>
                        <strong>{person.name}</strong> — {person.role} ({person.department})
                        {person.onLeave && (
                            <span style={{ color: "red" }}> — On Leave</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StaffList;