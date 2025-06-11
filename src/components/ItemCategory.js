import { useState } from "react";
import MenuItem from "./MenuItem";

const ItemCategory = ({ itemCategory }) => {
  const [showAccordion, setShowAccordion] = useState(false);

  const handleAccordionClick = () => {
    setShowAccordion(!showAccordion);
  };

  return (
    <ul className="itemCategory">
      <h2 onClick={handleAccordionClick}>
        {itemCategory?.card?.card?.title +
          " (" +
          itemCategory?.card?.card?.itemCards?.length +
          ")"}
      </h2>

      {showAccordion &&
        itemCategory?.card?.card?.itemCards?.map((menuItem, index) => {
          return (
            <MenuItem
              menuItem={menuItem?.card?.info}
              key={menuItem?.card?.info?.id}
            />
          );
        })}
    </ul>
  );
};

export default ItemCategory;
