export const getAlltextTestimonials = async (spacename: string) => {
  const response = await fetch(
    `https://testimonial-server-production.up.railway.app/api/space/testimonials/text/${spacename}`,
    {
      method: "Get",
      credentials: "include",
      cache: 'default'
    },
  );

  const json = await response.json();

  return json;
};

// getAlltextTestimonials(space_name);
export const getAllVideoTestimonials = async (spacename: string) => {
  const response = await fetch(
    `https://testimonial-server-production.up.railway.app/api/space/testimonials/video/${spacename}`,
    {
      method: "Get",
      credentials: "include",
      cache: "default"
    }
  );

  const json = await response.json();

  return json;
};

// getAlltextTestimonials(space_name);
export const getAllTestimonials = async (spacename: string) => {
  const response = await fetch(
    `https://testimonial-server-production.up.railway.app/api/space/testimonials/${spacename}`,
    {
      method: "Get",
      cache: 'default'
    }
  );

  const json = await response.json();

  return json;
};
