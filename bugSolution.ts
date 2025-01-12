function calculateArea(shape: string, width: number, height?: number): number {
  // Input validation
  if (typeof width !== 'number' || width <= 0) {
    throw new Error("Width must be a positive number");
  }
  if (height !== undefined && (typeof height !== 'number' || height <= 0)) {
    throw new Error("Height must be a positive number");
  }

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

//Example Usage (Add to a test file)
console.log(calculateArea("rectangle", 5, 10)); //Output: 50
console.log(calculateArea("square", 5)); //Output: 25
console.log(calculateArea("triangle", 4, 6)); //Output: 12
//console.log(calculateArea("circle", 5)); // throws error
//console.log(calculateArea("rectangle", 5)); // throws error
//console.log(calculateArea("rectangle", "five", 10)); // throws error