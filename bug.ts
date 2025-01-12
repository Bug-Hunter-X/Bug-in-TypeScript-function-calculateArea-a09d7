function calculateArea(shape: string, width: number, height?: number): number {
  switch (shape) {
    case "rectangle":
      if (height === undefined) {
        throw new Error("Height is required for rectangles");
      }
      return width * height;
    case "square":
      return width * width; 
    case "triangle":
      if (height === undefined) {
        throw new Error("Height is required for triangles");
      }
      return 0.5 * width * height; 
    default:
      throw new Error("Invalid shape");
  }
}