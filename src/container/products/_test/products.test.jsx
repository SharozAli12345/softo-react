import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Products from "../index";

const PRODUCT = [
  {
    id: 1,
    colour: "Black",
    name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
    price: 10,
    img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
  },
  {
    id: 2,
    colour: "Stone",
    name: "Stone Ribbed Strappy Cut Out Detail Bodycon Dress",
    price: 4,
    img: "https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024",
  },
  {
    id: 3,
    colour: "Black",
    name: "Black Frill Tie Shoulder Bodycon Dress",
    price: 7.99,
    img: "https://cdn-img.prettylittlething.com/d/c/3/3/dc337260f9ecefdb99a8c8e98cd73ccb1b79cea5_cmb6804_4.jpg?imwidth=1024",
  },
  {
    id: 5,
    colour: "Red",
    name: "Red Pin Stripe Belt T Shirt Dress",
    price: 17,
    img: "https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024",
  },
];

vi.mock("../../../queries/product.queries", () => ({
  useQueryProducts: vi.fn(() => ({
    data: PRODUCT,
    isLoading: false,
    isFetching: false,
    refetch: vi.fn(),
  })),
}));

describe("Products component", () => {
  it("useQueryProducts fetches products data correctly", () => {
    const { container } = render(<Products />);
    expect(container.querySelectorAll(".product-item")).toHaveLength(4);
  });

  it("updateQuantity updates quantity state correctly", () => {
    const { getByTestId } = render(<Products />);
    fireEvent.change(getByTestId("quantity-1"), {
      target: { value: 5 },
    });
    expect(getByTestId("quantity-1").value).toBe("5");
  });

  it("total state is calculated correctly based on quantity and product prices", () => {
    const { getByTestId } = render(<Products />);
    fireEvent.click(getByTestId("plus-quantity-1"));
    expect(getByTestId("total-price").textContent).toBe("£10.00");
  });

  it("removeQuantity removes quantity state correctly", () => {
    const { getByTestId } = render(<Products />);
    fireEvent.click(getByTestId("plus-quantity-1"));
    fireEvent.click(getByTestId("remove-quantity-1"));
    expect(getByTestId("quantity-1").value).toBe("0");
  });
});
