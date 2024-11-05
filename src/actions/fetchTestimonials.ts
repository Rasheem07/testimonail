export const getAlltextTestimonials = async (spacename: string) => {
  const response = await fetch(
    `http://localhost:5000/api/space/testimonials/text/${spacename}`,
    {
      method: "Get",
      credentials: "include",
    }
  );

  const json = await response.json();

  return json;
};

// getAlltextTestimonials(space_name);
export const getAllVideoTestimonials = async (spacename: string) => {
  const response = await fetch(
    `http://localhost:5000/api/space/testimonials/video/${spacename}`,
    {
      method: "Get",
      credentials: "include",
    }
  );

  const json = await response.json();

  return json;
};

// getAlltextTestimonials(space_name);
export const getAllTestimonials = async (spacename: string) => {
  const response = await fetch(
    `http://localhost:5000/api/space/testimonials/${spacename}`,
    {
      method: "Get",
      credentials: "include",
    }
  );

  const json = await response.json();

  return json;
};
