let burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
    if (document.querySelector('.modal-window.open')) {
        document.querySelector('.modal-window.open').classList.remove('open');
    }
});

document.body.addEventListener('click', (e) => {
    let itm = e.target;
    if (!itm.closest('header')) {
        if (itm.closest('.modal-container')) {

        } else {
            if (!document.querySelector('.modal-window.open')) {
                document.body.classList.remove('no-scroll');
                burgerMenu.classList.remove('open');
            } else {

            }
        }


    }
});


let blogListMain = document.querySelector('.blog-list');
let blogListScroll = document.querySelector('.blog .blog-container');
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
    if (!xDown2 || !yDown2) {
        return;
    }
    var xUp2 = evt.touches[0].clientX;
    var yUp2 = evt.touches[0].clientY;

    var xDiff2 = xDown2 - xUp2;
    var yDiff2 = yDown2 - yUp2;

    if (Math.abs(xDiff2) > Math.abs(yDiff2)) {/*most significant*/
        if (xDiff2 > 0) {
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
        if (yDiff2 > 0) {
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
    if (!xDown3 || !yDown3) {
        return;
    }
    var xUp3 = evt.touches[0].clientX;
    var yUp3 = evt.touches[0].clientY;

    var xDiff3 = xDown3 - xUp3;
    var yDiff3 = yDown3 - yUp3;

    if (Math.abs(xDiff3) > Math.abs(yDiff3)) {/*most significant*/
        if (xDiff3 > 0) {
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
        if (yDiff3 > 0) {
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
                        input.value = Number(input.value) - 1;
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
    if (!faqTabs.length) {

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


let modalWindows = [...document.querySelectorAll('.modal-window')];
let modalContainers = [...document.querySelectorAll('.modal-container')];
let modalCloser = [...document.querySelectorAll('.modal-close')];
let modalLogin = [...document.querySelectorAll('.header__login a')];
let modalReg = [...document.querySelectorAll('.no-account .buy-btn')];
let modalOneClick = [...document.querySelectorAll('.product-info__buy .buy-btn--white')];
let modalToCart = [...document.querySelectorAll('.product-info__buy .buy-btn--orange')];

function ifHaveModals() {
    if (!modalWindows.length) {

    } else {
        modalWindows.forEach((wind) => {
            wind.addEventListener('click', (e) => {

                    wind.classList.remove('open');
                    document.body.classList.remove('no-scroll');




            })
        });
        modalContainers.forEach((wind) => {
            wind.addEventListener('click', (e) => {
                    e.stopPropagation();
            })
        });

        modalCloser.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('open');
                document.body.classList.remove('no-scroll');
            })
        });
        modalLogin.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                if (btn.classList.contains('login-btn')) {
                    e.preventDefault();
                    document.querySelector('.modal-window--login').classList.add('open');
                    document.body.classList.add('no-scroll');
                }

            });
        });
        modalReg.forEach((btn) => {
            btn.addEventListener('click', (e) => {

                e.preventDefault();
                document.querySelector('.modal-window.open').classList.remove('open');
                document.querySelector('.modal-window--register').classList.add('open');
                document.body.classList.add('no-scroll');


            });
        });

        modalOneClick.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--click').classList.add('open');
                document.body.classList.add('no-scroll');
            })
        })
        modalToCart.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--to-cart').classList.add('open');
                document.body.classList.add('no-scroll');
            })
        })

    }
};
ifHaveModals();

let tabsCabinet = [...document.querySelectorAll('.cabinet-tabs li')];
let tabsCabinetTab = [...document.querySelectorAll('.cabinet-tab')];

function changeTabCab() {
    if (!tabsCabinet.length) {

    } else {
        tabsCabinet.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (document.querySelector('.cabinet-tabs li.active')) {
                    document.querySelector('.cabinet-tabs li.active').classList.remove('active');
                    document.querySelector('.cabinet-tab.active').classList.remove('active');
                }
                btn.classList.add('active');
                tabsCabinetTab[k].classList.add('active');
            })
        })
    }
};
changeTabCab();



