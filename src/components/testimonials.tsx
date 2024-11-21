import React from 'react';
import TestimonialCard from './cards/TextCard';
import { TestimonialProps } from '@/types/testimonials';

const TestimonialsComponent = ({ testimonials, space_name }: { testimonials: TestimonialProps[], space_name: string }) => {
  const isTwoCards = testimonials.length === 2;
  return (
    <div className={`testimonial-container  ${!isTwoCards && 'columns'}`}>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <TestimonialCard
            is_archived={testimonial.is_archived}
            space_name={space_name}
            id={testimonial.id}
            type={testimonial.type}
            name={testimonial.name}
            date={testimonial.date}
            ratings={testimonial.ratings}
            video_url={testimonial.type === "video" ? testimonial.video_url : undefined}
            content={testimonial.type === "text" ? testimonial.content : undefined}
            is_liked={testimonial.is_liked}
            user_photo={testimonial.type === "text" ? testimonial.user_photo : undefined}
          />
        </div>
      ))}
    </div>
  );
};

export default TestimonialsComponent;
