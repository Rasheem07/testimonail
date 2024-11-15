// getAlltextTestimonials(space_name);
export const getallLikedTestimonials = async (spacename: string) => {
  const response = await fetch(
    `https://testimonial-server-kiqu.onrender.com/api/space/testimonials/liked/${spacename}`,
    {
      method: "Get",
      cache: "default",
    }
  );

  const json = await response.json();

  return json;
};

export const HandleToggleLike = async (id: string) => {
  const response = await fetch(
    `https://testimonial-server-kiqu.onrender.com/api/space/testimonials/${id}/togglelike`,
    {
      method: "PUT",
      cache: "default",
      credentials: 'include'
    }
  );

  const json = await response.json();

  if(!response.ok) {
    return false;
  }

  return json;
};
