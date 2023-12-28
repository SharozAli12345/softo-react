import { useEffect, useState } from "react";
import { useQueryProducts } from "../../queries/product.queries";
import ProductItem from "./productItem";
import CustomSelect from "../../components/CustomSelect";
import { Spin } from "antd";

function Products() {
  const [selectedColor, setSelectedColor] = useState({});
  const {
    data: products = [],
    isLoading,
    isFetching,
    refetch,
  } = useQueryProducts({ colour: selectedColor });
  const [colors, setColors] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (products.length && !colors.length) {
      const colors = products
        .filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.colour === item.colour)
        )
        .map(({ colour }) => {
          return { label: colour, value: colour };
        });
      setColors(colors);
    }
  }, [products, colors]);

  useEffect(() => {
    refetch();
  }, [selectedColor]);

  useEffect(() => {
    const productPriceMap = new Map(
      products.map((product) => [product.id, product.price])
    );
    const total = Object.entries(quantity).reduce((acc, [id, qty]) => {
      const productPrice = productPriceMap.get(parseInt(id)) || 0;
      return acc + productPrice * qty;
    }, 0);

    setTotal(total);
  }, [quantity, products]);

  const updateQuantity = (productId, newQuantity) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: newQuantity,
    }));
  };

  const handleColorChange = (value) => {
    setQuantity({});
    setSelectedColor(value);
  };

  return (
    <div className="container w-full mx-auto bg-white p-6">
      <Spin spinning={isLoading || isFetching} fullscreen />
      <div className="flex justify-start mb-6">
        <CustomSelect
          options={colors}
          placeholder="Colors"
          handleChange={handleColorChange}
          allowClear={true}
          id="color-select"
          data-testid="color-select"
        />
      </div>

      <div className="space-y-4">
        {products.map((product, index) => (
          <ProductItem
            key={index}
            {...product}
            quantity={quantity[product.id] || 0}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>

      <div className="pt-4 border-t mt-4">
        <p className="text-xl font-bold text-right" data-testid="total-price">£{total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Products;
