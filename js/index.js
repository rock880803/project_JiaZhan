const $button = $('.button');
const $prevArrow = $('.prev-arrow');
const $nextArrow = $('.next-arrow');
const $productMask = $('.product-mask');

let numBtn = 0;

productDuration = 5000;
SetInterval = setInterval(setProductBtn, productDuration);

$button.eq(numBtn).addClass('js-button');

$button.click(productBtn);
$prevArrow.click(productBtnInv);
$nextArrow.click(productBtn);

function setProductBtn() {
    numBtn < 4 ? numBtn++ : numBtn = 0;
    $button.eq(numBtn).addClass('js-button').siblings().removeClass('js-button');
    $productMask.css({
        "left": -(numBtn) * 100 + "%"
    })
}
function productBtn() {
    numBtn < 4 ? numBtn++ : numBtn = 0;
    $button.eq(numBtn).addClass('js-button').siblings().removeClass('js-button');
    $productMask.css({
        "left": -(numBtn) * 100 + "%"
    })
}

function productBtnInv() {
    numBtn > 0 ? numBtn-- : numBtn = 4;
    $button.eq(numBtn).addClass('js-button').siblings().removeClass('js-button');
    $productMask.css({
        "left": -(numBtn) * 100 + "%"
    })
}
