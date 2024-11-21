'use server'

 
import { revalidatePath, revalidateTag } from 'next/cache'
 
export async function revalidateTestimonials() {
  // Invalidate the /posts route in the cache
  await revalidateTag(`testimonials`);

  setTimeout(async () => {
   await revalidateTag(`testimonials`);
  }, 5000);
  console.log("testimonials revalidated.")
}