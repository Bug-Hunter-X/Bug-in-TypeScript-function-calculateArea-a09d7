# Bug in TypeScript Function: calculateArea
This repository demonstrates a bug in a TypeScript function designed to calculate the area of different shapes. The function `calculateArea` incorrectly handles optional parameters and type checking, resulting in unexpected behavior.

## Bug Description
The `calculateArea` function aims to compute areas for rectangles, squares, and triangles. However, it has issues:

1. **Incorrect Optional Parameter Handling:** The use of optional parameters (`height?: number`) is not consistently handled across different shape types.  For example, even though the square calculation does not need the `height`, the error handling is not correctly implemented.
2. **Missing Type Checks:**  The function doesn't explicitly check if the provided `width` and `height` values are valid numbers. This could lead to runtime errors if non-numeric values are passed.

## Solution
The provided `bugSolution.ts` file fixes these issues by:

1. Implementing stricter type checking and input validation.
2. Improving the handling of optional parameters. 
3. Providing clear and informative error messages.