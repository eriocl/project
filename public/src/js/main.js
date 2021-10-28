<<<<<<< HEAD
const $wrapper = document.querySelector(".container-sm");
const $priceDiv = document.querySelector(".main__price-count");
const $orderButton = document.querySelector("button[name=order-button]");
const $bagLogo = document.querySelector('h2[data-logo=logo]');
const $setBagLogoButton = document.querySelector('button[data-name=setBagLogo]');
const $setBagLogoInput = document.querySelector('input[name=shoper_inscription]');
const $disableImgAndLogoCheckBox = document.querySelector('input[data-name=disableImgAndLogo');
const $fileUploadInput = document.querySelector('input[type=file]');
const $fileUploadButton = document.querySelector('button[data-name=uploadButton]')


=======
const $wrapper = document.querySelector('.container-sm');
const $priceDiv = document.querySelector('.main__price-count');
const $orderButton = document.querySelector('button[name=order-button]');
const $bagLogo = document.querySelector('h2[data-logo=logo]');
const $setBagLogoButton = document.querySelector('button[data-name=setBagLogo]');
const $setBagLogoInput = document.querySelector('input[name=shoper_inscription]');
const $disableImgAndLogoCheckBox = document.querySelector(
  'input[data-name=disableImgAndLogo]',
);
>>>>>>> 8743c64696109aebce6daaec272425418ccc7261

$priceDiv.innerText = `${getFullPricePerPcs()}р.`;

$wrapper.addEventListener("change", (event) => {
    if (
      event.target.type === "radio" ||
      event.target.type === "checkbox" ||
      event.target.type === "number"
    ) {
      $priceDiv.innerText = `${getFullPricePerPcs()}р.`;
    }
    if (event.target === $disableImgAndLogoCheckBox) {
          $fileUploadInput.disabled = !$fileUploadInput.disabled 
          $setBagLogoInput.disabled = !$setBagLogoInput.disabled
          $setBagLogoButton.disabled = !$setBagLogoButton.disabled
          $fileUploadButton.disabled = !$fileUploadButton.disabled  
    }
})

$orderButton.addEventListener('click', async () => {
  const bag_id = document.querySelector('input[name=modelRadio]:checked').value;
  const size_id = document.querySelector('input[name=sizeRadio]:checked').value;
  const material_id = document.querySelector(
    'input[name=materialRadio]:checked',
  ).value;
  const bag_color = document.querySelector(
    'input[name=colorRadio]:checked',
  ).value;
  const ind_pack = document.querySelector('input[name=option1]:checked');
  const label = document.querySelector('input[name=option2]:checked');
  const sticker = document.querySelector('input[name=label]:checked');
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
    console.log('Ураааа');
  }
})

$setBagLogoButton.addEventListener('click', ()=>{
    $bagLogo.innerText = $setBagLogoInput.value
    $setBagLogoInput.value =""
})
