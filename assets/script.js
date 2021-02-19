let gb = 0
let cc = 0
let sugar = 0

document.getElementById('add-gb').addEventListener('click', function() {
    gb += 1
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

document.getElementById('minus-gb').addEventListener('click', function() {
    gb -= 1
    if (gb < 0) {
        gb = 0
    }
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

document.getElementById('add-cc').addEventListener('click', function() {
    cc += 1
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

document.getElementById('minus-cc').addEventListener('click', function() {
    cc -= 1
    if (cc < 0) {
        cc = 0
    }
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

document.getElementById('add-sugar').addEventListener('click', function() {
    sugar += 1
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar -= 1
    if (sugar < 0) {
        sugar = 0
    }
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = gb + cc + sugar
})