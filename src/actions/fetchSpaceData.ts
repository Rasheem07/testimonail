import { TestimonialSpaceData } from "@/types/spacetype";
import { useQuery } from "react-query"

export const fetchSpaceData = async (space_name: string): Promise<TestimonialSpaceData | null> => {

    const response = await fetch(`${process.env.PROD_BASE_URL}/api/space/get/${space_name}`, {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        },
        cache: 'default'
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json;
}