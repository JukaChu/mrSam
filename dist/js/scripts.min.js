let burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
});

document.body.addEventListener('click', (e) => {
    let itm = e.target;
    if (!itm.closest('header')) {
        document.body.classList.remove('no-scroll');
        burgerMenu.classList.remove('open');
    }
})


let blogListMain = document.querySelector('.blog-list');
let blogListScroll = document.querySelector('.blog-container');
let newsBlocksScreen = [...document.querySelectorAll('.blog-list .blog-item')].length;
let startPosNews = 0;
function ifBlogListContains() {
    if (!blogListScroll) {

    } else {
        blogListScroll.addEventListener('touchstart', handleTouchStart, false);
        blogListScroll.addEventListener('touchmove', handleTouchMove, false);

    }
}
ifBlogListContains();

var xDown2 = null;
var yDown2 = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown2 = firstTouch.clientX;
    yDown2 = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown2 || ! yDown2 ) {
        return;
    }
    var xUp2 = evt.touches[0].clientX;
    var yUp2 = evt.touches[0].clientY;

    var xDiff2 = xDown2 - xUp2;
    var yDiff2 = yDown2 - yUp2;

    if ( Math.abs( xDiff2 ) > Math.abs( yDiff2 ) ) {/*most significant*/
        if ( xDiff2 > 0 ) {
            /* left swipe */
            if (startPosNews === newsBlocksScreen - 1) {
                startPosNews = 0;
                blogListMain.style.transform = `translate(-${startPosNews * 100}%, 0) translate(-${startPosNews * 20}px, 0)`;

            } else {
                startPosNews = startPosNews + 1;
                blogListMain.style.transform = `translate(-${startPosNews * 100}%, 0) translate(-${startPosNews * 20}px, 0)`;
            }

        } else {
            if (startPosNews === 0) {
                startPosNews = newsBlocksScreen - 1;
                blogListMain.style.transform = `translate(-${startPosNews * 100}%, 0) translate(-${startPosNews * 20}px, 0)`;

            } else {
                startPosNews = startPosNews - 1;

                blogListMain.style.transform = `translate(-${startPosNews * 100}%, 0) translate(-${startPosNews * 20}px, 0)`;
            }
            /* right swipe */
        }
    } else {
        if ( yDiff2 > 0 ) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown2 = null;
    yDown2 = null;
};




let prodListMain = document.querySelector('.products-list');
let prodScrollCont = document.querySelector('.main-products');
let prodBlocksScreen = [...document.querySelectorAll('.products-list .single-product')].length;
let startPosProd = 0;
function ifProdListContains() {
    if (!prodScrollCont) {

    } else {
        prodScrollCont.addEventListener('touchstart', handleTouchStartProd, false);
        prodScrollCont.addEventListener('touchmove', handleTouchMoveProd, false);

    }
}
ifProdListContains();

var xDown3 = null;
var yDown3 = null;

function getTouchesProd(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStartProd(evt) {
    const firstTouch = getTouchesProd(evt)[0];
    xDown3 = firstTouch.clientX;
    yDown3 = firstTouch.clientY;
};

function handleTouchMoveProd(evt) {
    if ( ! xDown3 || ! yDown3 ) {
        return;
    }
    var xUp3 = evt.touches[0].clientX;
    var yUp3 = evt.touches[0].clientY;

    var xDiff3 = xDown3 - xUp3;
    var yDiff3 = yDown3 - yUp3;

    if ( Math.abs( xDiff3 ) > Math.abs( yDiff3 ) ) {/*most significant*/
        if ( xDiff3 > 0 ) {
            /* left swipe */
            console.log(prodBlocksScreen);
            console.log(startPosProd);
            if (startPosProd === prodBlocksScreen - 2) {
                console.log(prodBlocksScreen + ' length');
                startPosProd = -1;
                console.log(startPosProd + ' posle-swipe left');
                prodListMain.style.transform = `translate(${startPosProd * -50}%, 0) translate(${startPosProd * -20}px, 0)`;

            } else {
                startPosProd = startPosProd + 1;
                console.log(startPosProd + ' posle-swipe left');
                prodListMain.style.transform = `translate(-${startPosProd * 50}%, 0) translate(-${startPosProd * 20}px, 0)`;
            }

        } else {
            if (startPosProd === -1) {
                startPosProd = prodBlocksScreen - 2;
                console.log(startPosProd + ' posle-swipe right');
                prodListMain.style.transform = `translate(-${startPosProd * 50}%, 0) translate(-${startPosProd * 20}px, 0)`;

            } else {
                startPosProd = startPosProd - 1;
                console.log(startPosProd + ' posle-swipe right');
                prodListMain.style.transform = `translate(${startPosProd * -50}%, 0) translate(${startPosProd * -20}px, 0)`;
            }
            /* right swipe */
        }
    } else {
        if ( yDiff3 > 0 ) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown3 = null;
    yDown3 = null;
};


window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        if (!prodListMain) {
            if (!blogListMain) {

            } else {
                blogListMain.style.transform = `translate(0, 0) translate(0, 0)`;

            }
        } else {
            prodListMain.style.transform = `translate(0, 0) translate(0, 0)`;
            if (!blogListMain) {

            } else {
                blogListMain.style.transform = `translate(0, 0) translate(0, 0)`;

            }
        }

        // currentSlideLegend = 0;
    } else {
        if (!prodListMain) {
            if (!blogListMain) {

            } else {
                blogListMain.style.transform = `translate(-${startPosNews * 100}%, 0) translate(-${startPosNews * 20}px, 0)`;

            }
        } else {
            prodListMain.style.transform = `translate(-${startPosProd * 50}%, 0) translate(-${startPosNews * 20}px, 0)`;
            if (!blogListMain) {

            } else {
                blogListMain.style.transform = `translate(-${startPosNews * 100}%, 0) translate(-${startPosNews * 20}px, 0)`;

            }
        }

    }
});

let changeAmount = [...document.querySelectorAll('.product-info__amount')];

function ifHaveAmountChange() {
    if (!changeAmount.length) {

    } else {
        changeAmount.forEach((field) => {
            let input = field.querySelector('input');
            let btns = [...field.querySelectorAll('.btn-value')];

            btns.forEach((btn) => {
                btn.addEventListener('click', () => {
                    if (btn.classList.contains('btn-value--minus')) {
                        input.value = Number(input.value) -1;
                    } else {
                        input.value = Number(input.value) + 1;
                    }
                })
            })

        })
    }
}

ifHaveAmountChange();

let faqTabs = [...document.querySelectorAll('.faq-tab ul li span')];
let faqLeft = [...document.querySelectorAll('.faq-left ul li')];
let tabFaq = [...document.querySelectorAll('.faq-tab')];
let tabFaqSpan = [...document.querySelectorAll('.faq-tab > span')];

function openFaqTabs() {
    if(!faqTabs.length) {

    } else {
        faqTabs.forEach((tb) => {
            tb.addEventListener('click', () => {
                tb.classList.toggle('open');
            })
        });
        faqLeft.forEach((tab, k) => {
            tab.addEventListener('click', () => {
                document.querySelector('.faq-left li.active').classList.remove('active');
                tab.classList.add('active');
                document.querySelector('.faq-tab.active').classList.remove('active');
                document.querySelector('.faq-tab > span.active').classList.remove('active');

                tabFaq[k].classList.add('active');
                document.querySelector('.faq-tab.active > span').classList.add('active');

            })
        });
        tabFaqSpan.forEach((bt, l) => {
            bt.addEventListener('click', () => {
                document.querySelector('.faq-tab > span.active').classList.remove('active');
                bt.classList.add('active');
                document.querySelector('.faq-left li.active').classList.remove('active');
                faqLeft[l].classList.add('active');

            })
        })
    }
}
openFaqTabs();