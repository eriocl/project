
function getFullPricePerPcs () {
    const modelPrice = Number(document.querySelector('input[name=modelRadio]:checked').dataset.price) 
    const sizePrice = Number(document.querySelector('input[name=sizeRadio]:checked').dataset.price) 
    const materialPrice = Number(document.querySelector('input[name=materialRadio]:checked').dataset.price) 
    const colorPrice = Number(document.querySelector('input[name=colorRadio]:checked').dataset.price)
    const option1Price = document.querySelector('input[name=option1]:checked') ? Number(document.querySelector('input[name=option1]:checked').dataset.price) : 0
    const option2Price = document.querySelector('input[name=option2]:checked') ? Number(document.querySelector('input[name=option2]:checked').dataset.price) : 0

    return modelPrice + sizePrice + materialPrice + colorPrice + option1Price + option2Price
}

function getCount () {
    const count = Number(document.querySelector('input[name=countOrder]').value)

    return count
} 



