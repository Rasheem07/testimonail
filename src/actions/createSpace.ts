import { getCookies } from "@/helpers/getCookies";
import type { FormData as dataType } from "@/lib/validations";

export const createSpace = async (formData: dataType) => {
  const cookies = getCookies();
  const form = new FormData();

  // Append JSON data to the FormData object
  form.append("spaces", JSON.stringify(formData.spaces));
  form.append("thank_page", JSON.stringify(formData.thank_page));
  form.append("extra_settings", JSON.stringify(formData.extra_settings));

  // Assuming formData.spaces.logo is an array of File objects
  if (formData.logo) {
    const firstFile = formData.logo[0]; // Get the first file from the array
    console.log(firstFile)
    form.append("logo", firstFile); // Append the first file to the FormData
  }

   // Log the contents of the FormData
   for (const [key, value] of form.entries()) {
    console.log(`${key}:`, value);
  }

  const response = await fetch("https://testimonial-server-production.up.railway.app/api/space/createspace", {
    method: "POST",
    headers: {
      "xsrf-token": cookies._csrf,
    },
    credentials: 'include',
    mode: "cors",
    body: form,
  });

  const json = await response.json();

  let error;
  if (!response.ok) {
    error = json.error;
    console.log(json);
  }

  return { json, error };
};
