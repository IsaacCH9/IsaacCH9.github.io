 // Variable para llevar el total del carrito
 let total = 0;

 // Función para agregar productos al carrito y actualizar el total
 function addToCart(amount) {
     total += amount; // Suma el precio del combo al total
     document.getElementById('total').innerText = 'Total: $' + total.toFixed(2); // Actualizar el total en la pantalla
 }