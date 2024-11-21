export interface TestimonialProps {
  id: string;
  type: "video" | "text";
  name: string;
  date: string;
  ratings: number;
  content?: string; // Content for text testimonials
  is_liked: boolean;
  is_archived: boolean;
  video_url?: string; // URL for video testimonials
  user_photo?: string; // User photo for text testimonials
  is_spam?: boolean;
}

export interface Testimonial {
  ratings: number;
  content: string;
  name: string;
  user_photo: string;
  date: string;
}

export interface VideoTestimonial {
  video_url: string;
  name: string;
  date: string;
  ratings: number;
}
