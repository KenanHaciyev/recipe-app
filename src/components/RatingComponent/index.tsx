import React from 'react';
import {Rate} from "antd";

interface IRatingComponent{
    name: string,
    rating: number
}
const RatingComponent: React.FC<IRatingComponent> = ({name, rating}) => {
    return (
        <div>
            <h2>{name}</h2>
            <div>
                <Rate defaultValue={rating} allowHalf disabled={true} />
            </div>
        </div>
    );
};

export default RatingComponent;
