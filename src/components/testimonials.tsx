import React from 'react';
import TestimonialCard from './cards/TextCard';
import { TestimonialProps } from '@/types/testimonials';

const TestimonialsComponent = ({ testimonials }: { testimonials: TestimonialProps[] }) => {
  return (
    <div className="testimonial-container transition">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <TestimonialCard
            type={testimonial.type}
            name={testimonial.name}
            date={testimonial.date}
            ratings={testimonial.ratings}
            video_url={testimonial.type === "video" ? testimonial.video_url : undefined}
            content={testimonial.type === "text" ? testimonial.content : undefined}
            user_photo={testimonial.type === "text" ? testimonial.user_photo : undefined}
          />
        </div>
      ))}
    </div>
  );
};

export default TestimonialsComponent;
