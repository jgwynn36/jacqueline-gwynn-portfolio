export function checkLicense(license) {
    if (license === 'non-commercial') {
        console.log("You are using non-commerial license of ReactGrid. Happy coding!");
    }
    else {
        var separator = '//';
        var licenseHash = getHashFromLicense(license, separator);
        if (!licenseHash) {
            console.warn("Your ReactGrid license is invalid! Please contact your manager.");
            return;
        }
        var licenseWithoutHash = getLicenseWithoutHash(license, separator);
        if (!licenseWithoutHash) {
            console.warn("ReactGrid your ReactGrid licence is invalid! Please contact your manager.");
            return;
        }
        if (licenseHash !== hashLicense(licenseWithoutHash)) {
            console.warn("ReactGrid licence isn't correct! Please contact your manager.");
            return;
        }
        var licenseExpirationDate = getLicenceExpirationDate(license);
        if (!licenseExpirationDate) {
            console.warn("ReactGrid expiration date is invalid! Please contact your manager.");
            return;
        }
        if (isLicenseExpired(licenseExpirationDate)) {
            console.warn("ReactGrid license has expired! Please contact your manager.");
            return;
        }
        console.log("ReactGrid license is active. Happy coding :)");
    }
}
function isLicenseExpired(expirationDate) {
    var today = new Date();
    return expirationDate <= today;
}
function getLicenseHashStart(license, separator) {
    return license.search(separator);
}
function getHashFromLicense(license, separator) {
    var licenseHashStart = getLicenseHashStart(license, separator);
    if (licenseHashStart === -1)
        return null;
    var hash = license.slice(licenseHashStart + separator.length, license.length).trim();
    if (hash.length === 0)
        return null;
    return hash;
}
function getLicenceExpirationDate(license) {
    var pattern = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/gi;
    var strDate = license.match(pattern);
    if (!strDate)
        return null;
    return new Date(strDate[0]);
}
function getLicenseWithoutHash(license, separator) {
    var result;
    var licenseHashStart = getLicenseHashStart(license, separator);
    if (licenseHashStart === -1)
        return null;
    result = license.slice(0, licenseHashStart).trim();
    return result;
}
function hashLicense(license) {
    return hashCode(license.trim()).toString();
}
function hashCode(str) {
    var hash = 0, i, chr;
    if (str.length === 0)
        return hash;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return Math.abs(hash);
}
