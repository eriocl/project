


const $wrapper = document.querySelector('.container-sm')

$wrapper.addEventListener('change', (event) => {
    if (event.target.type === 'radio' || event.target.type === 'checkbox') {
        console.log(getFullPricePerPcs());
    }
})

