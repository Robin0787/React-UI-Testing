import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should not render anything when the imageUrls array is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render a lot of images when the imageUrls array is not empty ", () => {
    const imageUrls: string[] = ["url1", "url2"];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(imageUrls.length);
    imageUrls.forEach((url: string, index: number) => {
      expect(images[index]).toHaveAttribute("src");
    });
  });
});
