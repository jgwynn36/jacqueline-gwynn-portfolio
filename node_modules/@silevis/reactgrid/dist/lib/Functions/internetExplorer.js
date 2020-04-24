export function isBrowserIE() {
    if (typeof window !== 'undefined') {
        return window.navigator.userAgent.indexOf('Trident') > 0;
    }
    else
        return false;
}
export function getDataToPasteInIE() {
    var data = window.clipboardData.getData('text');
    return data.split('\n').map(function (line) { return line.split('\t').map(function (t) { return ({ type: 'text', text: t, value: parseFloat(t) }); }); });
}
