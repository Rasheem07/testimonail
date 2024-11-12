
export const fetchallSpaceData = async () => {

    const response = await fetch(`${process.env.PROD_BASE_URL}/api/space/getall`, {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });

    const json = await response.json();

    return json;
}

export const fetchallSpace = async () => {

    const response = await fetch(`${process.env.PROD_BASE_URL}/api/space`, {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        },
        next: { revalidate: 60 } 
    });

    const json = await response.json();

    return json;
}