if (getMobileOperatingSystem() == "Android")
    window.location.href = "https://play.google.com/store/apps/details?id=com.realmindme.app&hl=en_US&gl=US";
else if  (getMobileOperatingSystem() == "iOS")
    window.location.href = "https://apps.apple.com/us/app/realty-task-manager/id1500366075";


/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}