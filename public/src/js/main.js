const $wrapper = document.querySelector('.container-sm');
const $priceDiv = document.querySelector('.main__price-count');
const $orderButton = document.querySelector('button[name=order-button]');

$priceDiv.innerText = `${getFullPricePerPcs()}р.`;

$wrapper.addEventListener('change', (event) => {
  if (event.target.type === 'radio' || event.target.type === 'checkbox' || event.target.type === 'number') {
    $priceDiv.innerText = `${getFullPricePerPcs()}р.`;
  }
});

$orderButton.addEventListener('click', async () => {
  const bagId = document.querySelector('input[name=modelRadio]:checked').value;
  const sizeId = document.querySelector('input[name=sizeRadio]:checked').value;
  const materialId = document.querySelector('input[name=materialRadio]:checked').value;
  const colorId = document.querySelector('input[name=colorRadio]:checked').value;
  const individualPack = !!document.querySelector('input[name=option1]:checked');
  const label = !!document.querySelector('input[name=option2]:checked');
  const sticker = !!document.querySelector('input[name=label]:checked');
  const count = document.querySelector('input[name=countOrder]').value;
  const name = document.querySelector('input[name=client_name]').value;
  const phone = document.querySelector('input[name=client_phone]').value;
  const email = document.querySelector('input[name=client_email]').value;
  const deliveryAddress = document.querySelector('input[name=address]').value;

  const data = {
    entry: {
      bagId, sizeId, materialId, colorId, individualPack, label, sticker, count,
    },
    user: {
      name, phone, email, deliveryAddress,
    },
  };

  const response = await fetch('/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    console.log('Ураааа');
  }
});
