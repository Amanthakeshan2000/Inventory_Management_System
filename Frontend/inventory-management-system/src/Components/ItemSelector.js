import React, { useState } from 'react';
import '../Css/returnOther.css';

const ItemSelector = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [availableItems] = useState(['LED TV', 'LAPTOP', 'PHONE', 'TABLE', 'CHAIR']);

  const handleItemChange = (event) => {
    const { options } = event.target;
    const selected = [];
    for (const option of options) {
      if (option.selected) {
        selected.push(option.value);
      }
    }
    setSelectedItems(selected);
  };

  const removeItem = (item) => {
    setSelectedItems(selectedItems.filter(i => i !== item));
  };

  return (
    <div className="item-selector">
      <div className="selected-items">
        {selectedItems.map(item => (
          <span className="selected-item" key={item}>
            {item} <button onClick={() => removeItem(item)}>x</button>
          </span>
        ))}
      </div>
      <select multiple value={selectedItems} onChange={handleItemChange}>
        {availableItems.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ItemSelector;
