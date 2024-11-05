import { z } from 'zod';

const spacesSchema = z.object({
  space_name: z.string().min(5, { message: "Name is required" }),
  header_title: z.string().min(6, { message: "Header title must not be empty and must be 6 characters" }),
  custom_message: z.string().min(12, { message: "Custom message must be 12 characters" }),
  questions: z.array(z.string()).min(1, { message: "At least one question is required" }),
  collect_extra: z.record(z.any()).optional(),
  collection_type: z.string().default('text and video'),
  collect_star_ratings: z.boolean().default(false),
  allow_custom_btn_color: z.boolean().default(false),
  custom_btn_color: z.string().optional(),
  language: z.string().default('english'),
});

const thankPageSchema = z.object({
  image: z.string().optional().default('/gifs/thankyou.gif'),
  title: z.string().default('THANK YOU!'),
  message: z.string().default('Thank you so much for your shoutout! It means a ton for us! 🙏'),
  allow_social: z.boolean().default(false),
  redirect_url: z.string().optional(),
  reward_video: z.boolean().default(false),
});

const extraSettingsSchema = z.object({
  max_duration: z.number().default(120),
  max_char: z.number().default(0),
  video_btn_text: z.string().default('Record a video'),
  text_btn_text: z.string().default('Send in text'),
  consent_display: z.string().default('required'),
  consent_statement: z.string().default('I give permission to use this testimonial'),
  text_submission_title: z.string().default('Title'),
  questions_label: z.string().default('Questions'),
  default_text_testimonial_avatar: z.string().optional(),
  affiliate_link: z.string().optional(),
  third_party: z.record(z.any()).optional(),
  auto_populate_testimonials_to_the_wall_of_love: z.boolean().optional(),
  disable_video_recording_for_iphone_users: z.boolean().optional(),
  allow_search_engines_to_index_your_page: z.boolean().optional(),
});

export const FormSchema = z.object({
  spaces: spacesSchema,
  thank_page: thankPageSchema,
  extra_settings: extraSettingsSchema,
  logo: z.any().optional(),
});

export type FormData = z.infer<typeof FormSchema>;

// Define TypeScript interfaces
export interface TextTestimonial {
  space_name: string;
  image_only: boolean;
  image_src?: string;
  ratings: number;
  content?: string;
  name?: string;
  user_photo?: string;
  date: string;
}

export interface VideoTestimonial {
  space_name: string;
  video: File;
  duration: number;
  name: string;
}

export interface SocialTestimonial {
  id: string;
  space_id: number;
  socialId: string;
  username: string;
  content: string;
  social_provider: string;
  date: string; // Assuming date is stored as a string in 'YYYY-MM-DD' format
}

// Define Zod schemas
const TextTestimonialSchema = z.object({
  space_name: z.string().min(1, {message: "space name should be passed!"}),
  image_only: z.boolean(),
  image_src: z.union([z.instanceof(File), z.string()]).optional(),
  ratings: z.number().int().min(1).max(5).optional(),
  content: z.string().max(300).optional(),
  name: z.string().max(255).optional(),
  user_photo: z.union([z.instanceof(File), z.string()]).optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).default(() => new Date().toISOString().split('T')[0]), // YYYY-MM-DD format
}).refine(data => !data.image_only || data.image_src, {
  message: "image_src is required if image_only is true",
  path: ["image_src"],
}).refine(data => data.image_only || data.content, {
  message: "content is required if image_only is false",
  path: ["content"],
});

const VideoTestimonialSchema = z.object({
  space_name: z.string().min(1, {message: "space name should be passed!"}),
  video: z.instanceof(File).optional(),
  duration : z
  .number()
  .max(120, { message: "Duration must be less than 120 seconds." }), // Validate that it's less than 120
  name: z.string().max(255),
  ratings: z.number().int().min(1).max(5).optional(),
});

const SocialTestimonialSchema = z.object({
  id: z.string().uuid(),
  space_id: z.number().int(),
  socialId: z.string().max(255),
  username: z.string().max(255),
  content: z.string().max(255),
  social_provider: z.string().max(255),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).default(() => new Date().toISOString().split('T')[0]), // YYYY-MM-DD format
});

// Export schemas
export { TextTestimonialSchema, VideoTestimonialSchema, SocialTestimonialSchema };
