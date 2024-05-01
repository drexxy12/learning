const items = document.querySelectorAll('.item');

  items.forEach(item => {
    const incrementBtn = item.querySelector('.increment');
    const decrementBtn = item.querySelector('.decrement');
    const deleteBtn = item.querySelector('.delete');
    const heartBtn = item.querySelector('.heart');
    const quantityDisplay = item.querySelector('.quantity');

    incrementBtn.addEventListener('click', () => {
      let quantity = parseInt(quantityDisplay.textContent);
      quantity++;
      quantityDisplay.textContent = quantity;
      updateTotal();
    });

    decrementBtn.addEventListener('click', () => {
      let quantity = parseInt(quantityDisplay.textContent);
      if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
        updateTotal();
      }
    });

    deleteBtn.addEventListener('click', () => {
      item.remove();
      updateTotal();
    });

    heartBtn.addEventListener('click', () => {
      heartBtn.style.color = heartBtn.style.color === 'red' ? 'grey' : 'red';
    });
  });

  function updateTotal() {
    let totalPrice = 0;
    items.forEach(item => {
      const price = parseInt(item.textContent.match(/\d+/)[0]);
      const quantity = parseInt(item.querySelector('.quantity').textContent);
      totalPrice += price * quantity;
    });
    document.getElementById('total-price').textContent = totalPrice;
  }