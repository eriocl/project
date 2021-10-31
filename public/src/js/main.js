const $wrapper = document.querySelector('.container-sm');
const $priceDiv = document.querySelector('.main__price-count');
const $orderButton = document.querySelector('button[name=order-button]');
const $bagLogo = document.querySelector('h2[data-logo=logo]');
const $setBagLogoButton = document.querySelector(
  'button[data-name=setBagLogo]',
);
const $setBagLogoInput = document.querySelector(
  'input[name=shoper_inscription]',
);
const $disableImgAndLogoCheckBox = document.querySelector(
  'input[data-name=disableImgAndLogo',
);
const $fileUploadInput = document.querySelector('input[type=file]');
const $fileUploadButton = document.querySelector(
  'button[data-name=uploadButton]',
);
const $serverResponseDivBody = document.querySelector(
  'div[name=serverResponseDivBody]',
);
const $serverResponseh5Header = document.querySelector(
  'h5[name=serverResponseh5Header]',
);

const $paymentModalDiv = document.querySelector('div[name=paymentModalDiv]');

const $cashlessPaymentModal = document.querySelector(
  'div[name=cashlessPaymentModal]',
);
const $cashPaymentButton = document.querySelector('button[name=cashPayment]');
const $cashlessPaymentButton = document.querySelector(
  'button[name=cashlessPayment]',
);
const $sendDataForPayment = document.querySelector(
  'button[name=sendDataForPayment]',
);
const $closeButton = document.querySelector('button[name=closeButton]');

const $footer = document.querySelector('footer');

$priceDiv.innerText = `${getFullPricePerPcs()}р.`;

$wrapper.addEventListener('change', (event) => {
  if (
    event.target.type === 'radio'
    || event.target.type === 'checkbox'
    || event.target.type === 'number'
  ) {
    $priceDiv.innerText = `${getFullPricePerPcs()}р.`;
  }
  if (event.target === $disableImgAndLogoCheckBox) {
    $fileUploadInput.disabled = !$fileUploadInput.disabled;
    $setBagLogoInput.disabled = !$setBagLogoInput.disabled;
    $setBagLogoButton.disabled = !$setBagLogoButton.disabled;
    $fileUploadButton.disabled = !$fileUploadButton.disabled;
  }
});

$orderButton.addEventListener('click', async () => {
  const bag_id = document.querySelector('input[name=modelRadio]:checked').value;
  const size_id = document.querySelector('input[name=sizeRadio]:checked').value;
  const material_id = document.querySelector(
    'input[name=materialRadio]:checked',
  ).value;
  const bag_color = document.querySelector(
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
      bag_color,
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
    $serverResponseh5Header.innerText = 'Заказ успешно доставлен';
    $serverResponseDivBody.innerText = 'Мы получили ваш заказ. Выберите форму оплаты';
  } else {
    $serverResponseh5Header.innerText = 'Ошибка сервера';
    $serverResponseDivBody.innerText = 'Мы знаем о проблеме и уже работаем над ее устранением. Пожалуйста, для оформления заказа свяжитесь с нами по телефону 8-495-123-45-67';
    $cashlessPaymentButton.remove();
    $cashPaymentButton.innerText = 'Закрыть';

    $cashPaymentButton.addEventListener('click', () => {
      $paymentModalDiv.classList.remove('show');
      $paymentModalDiv.style.display = 'none';
      $paymentModalDiv.removeAttribute('role');
      $fadeDiv.remove();
    });
  }

  $paymentModalDiv.classList.add('show');
  $paymentModalDiv.style.display = 'block';
  $paymentModalDiv.setAttribute('role', 'dialog');
  const $fadeDiv = document.createElement('div');
  $fadeDiv.classList.add('modal-backdrop', 'fade', 'show');
  document.body.insertBefore($fadeDiv, $footer);

  $cashPaymentButton.addEventListener('click', () => {
    window.location = '/payment';
  });

  $cashlessPaymentButton.addEventListener('click', () => {
    $paymentModalDiv.classList.remove('show');
    $paymentModalDiv.style.display = 'none';
    $paymentModalDiv.removeAttribute('role');

    $cashlessPaymentModal.classList.add('show');
    $cashlessPaymentModal.style.display = 'block';
    $cashlessPaymentModal.setAttribute('role', 'dialog');

    $fadeDiv.classList.add('modal-backdrop', 'fade', 'show');
  });

  $sendDataForPayment.addEventListener('click', () => {
    $cashlessPaymentModal.classList.remove('show');
    $cashlessPaymentModal.style.display = 'none';
    $cashlessPaymentModal.removeAttribute('role');
    const $fadeDiv = document.querySelector('div.modal-backdrop.fade.show');
    $fadeDiv.remove();
    window.location = '/';
  });

  $closeButton.addEventListener('click', () => {
    $paymentModalDiv.classList.remove('show');
    $paymentModalDiv.style.display = 'none';
    $paymentModalDiv.removeAttribute('role');
    const $fadeDiv = document.querySelector('div.modal-backdrop.fade.show');
    $fadeDiv.remove();
  });
});

$setBagLogoButton.addEventListener('click', () => {
  $bagLogo.innerText = $setBagLogoInput.value;
  $setBagLogoInput.value = '';
});
