import { useState } from 'react';
import StarRating from '../components/StarRating';

function DisplayRating() {
  const [rating, setRating] = useState<number>(0);
  console.log(rating);
  return (
    <StarRating
      maxRating={10}
      color='#FCC419'
      size={48}
      defaultRating={0}
      onSetRating={setRating}
    />
  );
}

export default DisplayRating;
