import { useState } from 'react';
import Star from './Star';

const StarRating = ({
    maxRating = 5,
    color = '#fcc419',
    size = '48',
    setMovieRate,
    onSetRating,
}) => {
    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0);

    function handleRating(rating) {
        setRating(rating);
        onSetRating(rating);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex' }}>
                {Array.from({ length: maxRating }, (_, i) => (
                    <Star
                        color={color}
                        size={size}
                        onHoverIn={() => setTempRating(i + 1)}
                        onHoverOut={() => setTempRating(0)}
                        onRate={() => handleRating(i + 1)}
                        key={i}
                        full={
                            tempRating ? tempRating >= i + 1 : rating >= i + 1
                        }
                    />
                ))}
            </div>
            <p
                style={{
                    lineHeight: '1',
                    margin: '0',
                    color: color,
                    fontSize: `${size / 2}px`,
                }}
            >
                {rating || tempRating || ''}
            </p>
        </div>
    );
};
export default StarRating;
