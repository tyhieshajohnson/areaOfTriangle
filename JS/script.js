document.getElementById('calculateButton').addEventListener('click', calculateArea);

    function calculateArea() {
      // Get base and height values
    // parseFloat function = converts a string to a number
      let base = parseFloat(document.getElementById('base').value);
      let height = parseFloat(document.getElementById('height').value);

      // Check if the values are valid
    //   Invalid values will be alerted to the user
      if (isNaN(base) || isNaN(height)) {
        alert('Invalid numbers/values');
        // stop the calculation
        return;
      }

      // Formula to calculate the area of the triangle
      let area = 0.5 * base * height;

      // Display the result using .innerHTML
      document.getElementById('result').innerHTML = 'The area is: ' + area + " square units";
    }