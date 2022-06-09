function Loading (loadingDelayHidden) {
    let loading = null;
    let myLoadingDelayHidden = loadingDelayHidden;
    let imgs = [];
    function incrementCounterImgs() {
        counterImgsLoading += 1;
        if (counterImgsLoading === lenImgs) {
            hideLoading()
        }
    }

    function hideLoading() {
        if (loading !== null) {
            loading.classList.remove('show');
            setTimeout(function () {
                loading.remove()
            }, myLoadingDelayHidden)
        }
    }

    function init() {
        document.addEventListener('DOMContentLoaded', function () {
            loading = document.querySelector('.loading');
            imgs = Array.from(document.images);
            lenImgs = imgs.length;
            if (imgs.length === 0) {
                hideLoading()
            } else {
                imgs.forEach(function (img) {
                    img.addEventListener('onload', incrementCounterImgs, false)
                })
            }
        })
    }
    return {'init': init}
}
Loading(5).init();