const $wrapper = document.querySelector('.container-sm');
const $priceDiv = document.querySelector('.main__price-count');
const $orderButton = document.querySelector('button[name=order-button]');

$priceDiv.innerText = `${getFullPricePerPcs()}р.`;

$wrapper.addEventListener('change', (event) => {
  if (
    event.target.type === 'radio'
    || event.target.type === 'checkbox'
    || event.target.type === 'number'
  ) {
    $priceDiv.innerText = `${getFullPricePerPcs()}р.`;
  }
});

$orderButton.addEventListener('click', async () => {
  const bag_id = document.querySelector('input[name=modelRadio]:checked').value;
  const size_id = document.querySelector('input[name=sizeRadio]:checked').value;
  const material_id = document.querySelector(
    'input[name=materialRadio]:checked',
  ).value;
  const color_id = document.querySelector(
    'input[name=colorRadio]:checked',
  ).value;
  const ind_pack = !!document.querySelector('input[name=option1]:checked');
  const label = !!document.querySelector('input[name=option2]:checked');
  const sticker = !!document.querySelector('input[name=label]:checked');
  const pcs = document.querySelector('input[name=countOrder]').value;
  const name = document.querySelector('input[name=client_name]').value;
  const phone = document.querySelector('input[name=client_phone]').value;
  const email = document.querySelector('input[name=client_email]').value;
  const delivery_address = document.querySelector('input[name=address]').value;

  const price = getCount() * getFullPricePerPcs();

  const data = {
    entry: {
      bag_id,
      size_id,
      material_id,
      color_id,
      ind_pack,
      label,
      sticker,
      pcs,
    },
    user: { name, phone, email },
    order: { delivery_address, price },
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
