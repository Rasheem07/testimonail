import { useQuery } from "react-query"

export const fetchSpaceData = async (space_name: string) => {

    const response = await fetch(`http://localhost:5000/api/space/get/${space_name}`, {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json;
}