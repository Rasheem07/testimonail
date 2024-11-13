import { getCookies } from "@/helpers/getCookies";
import type { TextTestimonial } from "@/lib/validations";

// Function to append a flat object to FormData
function appendToFormData(formData: FormData, obj: TextTestimonial) {
  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value);
  });
}

export const addTestimonial = async (formData: TextTestimonial) => {
  const cookies = getCookies();
  const form = new FormData();

  // Append the properties of formData to the FormData object
  appendToFormData(form, formData);

  // Log the contents of the FormData
  for (const [key, value] of form.entries()) {
    console.log(`${key}:`, value);
  }

  const response = await fetch(`http://localhost:5000/api/space/testimonials/text/add`, {
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
