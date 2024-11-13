import { getCookies } from "@/helpers/getCookies";
import type { TextTestimonial, VideoTestimonial } from "@/lib/validations";

// Function to append a flat object to FormData
function appendToFormData(formData: FormData, obj: VideoTestimonial) {
  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value);
  });
}

export const addVideoTestimonial = async (formData: VideoTestimonial) => {
  const cookies = getCookies();
  const form = new FormData();

  // Append the properties of formData to the FormData object
  appendToFormData(form, formData);

  const response = await fetch(`http://localhost:5000/api/space/testimonials/video/add`, {
    method: "POST",
    headers: {
      "xsrf-token": cookies._csrf
    },
    credentials: 'include',
    mode: "cors",
    body: form,
  });

  const json = await response.json();

  let error;
  if (!response.ok) {
    error = json.error;
  }

  return { json, error };
};
