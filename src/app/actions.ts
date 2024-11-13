'use server'
 
import { revalidatePath } from 'next/cache'
 
export async function revalidateTestimonials() {
  // Invalidate the /posts route in the cache
  revalidatePath('/products/rasheem')
}