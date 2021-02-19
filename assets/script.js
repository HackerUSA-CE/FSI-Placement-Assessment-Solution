// Global Variables - we'll use these to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // Add one to the ginger bread count
    gb += 1

    // Update the appropriate table cells in the DOM
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

// Event listener for clicks on the "-" button for Ginger Bread cookies
document.getElementById('minus-gb').addEventListener('click', function() {
    // Subtract one from the ginger bread count
    gb -= 1

    // Make sure ginger bread count doesn't go below one
    if (gb < 0) {
        gb = 0
    }

    // Update the appropriate table cells in the DOM
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    // Add one to the chocolate chip count
    cc += 1

    // Update the appropriate table cells in the DOM
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

// Event listener for clicks on the "-" button for Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', function() {
    // Subtract one from the chocolate chip count
    cc -= 1

    // Make sure chocolate chip count doesn't go below one
    if (cc < 0) {
        cc = 0
    }

    // Update the appropriate table cells in the DOM
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    // Add one to the sugar sprinkle count
    sugar += 1

    // Update the appropriate table cells in the DOM
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

// Event listener for clicks on the "-" button for Sugar Sprinkle cookies
document.getElementById('minus-sugar').addEventListener('click', function() {
    // Subtract one from the sugar sprinkle count
    sugar -= 1

    // Make sure sugar sprinkle count doesn't go below one
    if (sugar < 0) {
        sugar = 0
    }

    // Update the appropriate table cells in the DOM
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = gb + cc + sugar
})