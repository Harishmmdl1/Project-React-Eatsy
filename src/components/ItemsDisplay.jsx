import React, { useState } from 'react';
import { itemData } from '../pages/data';


const ItemsDisplay = () => {
  const [displayItem] = useState(itemData);

  return (
    <div className='itemSection'>
      <div className='scroll-container'>
        {displayItem.concat(displayItem).map((item, index) => (
          <div className="gallery" key={index}>
            <img src={item.item_img} alt={`Item ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemsDisplay;
