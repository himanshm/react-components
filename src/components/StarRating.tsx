import { useState } from 'react';
import Star from './Star';

type StarRatingProps = {
  maxRating: number;
  color: string;
  size: number;
  defaultRating: number;
  onSetRating: (rating: number) => void;
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const starContainerStyle = {
  display: 'flex',
};
function StarRating({
  maxRating,
  color,
  size,
  defaultRating,
  onSetRating,
}: StarRatingProps) {
  const [rating, setRating] = useState<number>(defaultRating);
  const [tempRating, setTempRating] = useState<number>(0);

  function handleRating(rating: number) {
    setRating(rating);
    onSetRating(rating);
  }
  function handleTempRating(rating: number) {
    setTempRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => {
          return (
            <Star
              key={i}
              color={color}
              size={size}
              onRate={() => handleRating(i + 1)}
              isFull={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              onHoverIn={() => handleTempRating(i + 1)}
              onHoverOut={() => handleTempRating(0)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
