function calculateArea() {
    // Get base and height values
    // parseFloat 
    let base = parseFloat(document.getElementById('base').value);
    let height = parseFloat(document.getElementById('height').value);

    // Check if the values are valid
    if (isNaN(base) || isNaN(height)) {
      alert('Please enter valid numbers for base and height.');
      return;
    }

    // Calculate the area of the triangle
    let area = 0.5 * base * height;

    // Display the result
    document.getElementById('result').innerHTML = 'The area is: ' + area;
  }