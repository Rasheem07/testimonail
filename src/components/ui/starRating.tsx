import { StarIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

type StarRatingProps = {
  name: string;
  maxRating?: number;
};

const StarRating: React.FC<StarRatingProps> = ({ name, maxRating = 5 }) => {
  const { control } = useFormContext();
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index: number) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex gap-1 items-center">
          {Array.from({ length: maxRating }, (_, index) => (
            <StarIcon
              key={index}
              className={`h-5 w-5 cursor-pointer ${
                (hoverRating || field.value) > index ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
              }`}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={handleMouseLeave}
              onClick={() => field.onChange(index + 1)}
            />
          ))}
        </div>
      )}
    />
  );
};

export default StarRating;
