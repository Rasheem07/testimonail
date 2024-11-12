
export const fetchallSpaceData = async () => {

    const response = await fetch('https://testimonial-server-kiqu.onrender.com/api/space/getall', {
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

    const response = await fetch('https://testimonial-server-kiqu.onrender.com/api/space', {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        },
        next: { revalidate: 60 } 
    });

    const json = await response.json();

    return json;
}