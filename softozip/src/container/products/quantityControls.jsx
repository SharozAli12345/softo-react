/* eslint-disable react-refresh/only-export-components */
import { Button, InputNumber } from "antd";
import PropTypes from "prop-types";
import { memo } from "react";

const QuantityControls = ({ id, quantity, updateQuantity }) => {
  const decreaseQuantity = () => {
    if (quantity > 0) {
      updateQuantity(id, quantity - 1);
    }
  };

  const increaseQuantity = () => {
    updateQuantity(id, quantity + 1);
  };

  const removeQuantity = () => {
    updateQuantity(id, 0);
  };

  return (
    <div className="flex items-start space-x-2">
      <Button
        onClick={decreaseQuantity}
        data-testid={`minus-quantity-${id}`}
        disabled={quantity <= 0}
      >
        -
      </Button>
      <InputNumber
        value={quantity}
        readOnly={true}
        data-testid={`quantity-${id}`}
      />
      <Button onClick={increaseQuantity} data-testid={`plus-quantity-${id}`}>
        +
      </Button>

      <Button
        disabled={quantity <= 0}
        data-testid={`remove-quantity-${id}`}
        type="link"
        onClick={removeQuantity}
      >
        Remove
      </Button>
    </div>
  );
};

QuantityControls.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default memo(QuantityControls);
