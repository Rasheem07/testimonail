export const getAlltextTestimonials = async (spacename: string) => {
  const response = await fetch(
    `http://localhost:5000/api/space/testimonials/text/${spacename}`,
    {
      method: "Get",
      credentials: "include",
      cache: "default",
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
      cache: "force-cache",
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
      cache: "default",
      // next: {revalidate: 20}
    }
  );

  const json = await response.json();

  return json;
};

export const getSingleTextTestimonial = async (spacename: string, id: string) => {
  const response = await fetch(
    `http://localhost:5000/api/space/testimonials/text/${spacename}/${id}`,
    {
      method: "Get"
    }
  );

  const json = await response.json();

  return json;
};

export const getSingleVideoTestimonial = async (spacename: string, id: string) => {
  const response = await fetch(
    `http://localhost:5000/api/space/testimonials/video/${spacename}/${id}`,
    {
      method: "Get"
    }
  );

  const json = await response.json();

  return json;
};
