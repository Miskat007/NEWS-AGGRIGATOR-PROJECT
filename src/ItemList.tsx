import React from "react";
import "./ItemList.css";

interface ItemListProps {
  items: string[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="card-container">
      {items.map((item, index) => (
        <div key={index} className="card">
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
