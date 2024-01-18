/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { memo } from "react";
import QuantityControls from "./quantityControls";

const ProductItem = (props) => {
  const { id, img, name, colour, price, quantity, updateQuantity } = props;
  return (
    <div className="product-item flex items-start justify-between ">
      <div className="flex items-start gap-4">
        <img
          src={img}
          alt={name}
          className="object-cover w-32 h-32 flex-none rounded-md border border-gray-200"
        />
        <div className="flex flex-col items-start">
          <h5 className="text-lg font-semibold text-gray-900">{name}</h5>
          <p className="text-sm text-gray-500  flex items-center gap-1">
            <b>Color:</b> {colour}
          </p>
          {price && (
            <p className="text-lg font-semibold text-gray-900">{`£${price}`}</p>
          )}
        </div>
      </div>
      <QuantityControls
        id={id}
        quantity={quantity}
        updateQuantity={updateQuantity}
      />
    </div>
  );
};

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default memo(ProductItem);
