import { revalidateTestimonials } from "@/app/actions";

// getAlltextTestimonials(space_name);
export const getallLikedTestimonials = async (spacename: string) => {
  const response = await fetch(
    `http://localhost:5000/api/space/testimonials/liked/${spacename}`,
    {
      method: "Get",
      cache: "default",
    }
  );

  const json = await response.json();

  return json;
};

export const HandleToggleLikeText = async (id: string) => {
  const response = await fetch(
    `http://localhost:5000/api/space/testimonials/text/${id}/togglelike`,
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

export const HandleToggleLikeVideo = async (id: string) => {
  const response = await fetch(
    `http://localhost:5000/api/space/testimonials/video/${id}/togglelike`,
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

export const HandleToggleArchiveText = async (id: string) => {
  const response = await fetch(
    `http://localhost:5000/api/space/testimonials/text/${id}/archive`,
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

export const HandleToggleArchiveVideo = async (id: string) => {
  const response = await fetch(
    `http://localhost:5000/api/space/testimonials/video/${id}/archive`,
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
