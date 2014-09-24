cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.battery-status/www/battery.js",
        "id": "org.apache.cordova.battery-status.battery",
        "clobbers": [
            "navigator.battery"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraConstants.js",
        "id": "org.apache.cordova.camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverOptions.js",
        "id": "org.apache.cordova.camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/Camera.js",
        "id": "org.apache.cordova.camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverHandle.js",
        "id": "org.apache.cordova.camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/contacts.js",
        "id": "org.apache.cordova.contacts.contacts",
        "clobbers": [
            "navigator.contacts"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/Contact.js",
        "id": "org.apache.cordova.contacts.Contact",
        "clobbers": [
            "Contact"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ContactAddress.js",
        "id": "org.apache.cordova.contacts.ContactAddress",
        "clobbers": [
            "ContactAddress"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ContactError.js",
        "id": "org.apache.cordova.contacts.ContactError",
        "clobbers": [
            "ContactError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ContactField.js",
        "id": "org.apache.cordova.contacts.ContactField",
        "clobbers": [
            "ContactField"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ContactFindOptions.js",
        "id": "org.apache.cordova.contacts.ContactFindOptions",
        "clobbers": [
            "ContactFindOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ContactName.js",
        "id": "org.apache.cordova.contacts.ContactName",
        "clobbers": [
            "ContactName"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ContactOrganization.js",
        "id": "org.apache.cordova.contacts.ContactOrganization",
        "clobbers": [
            "ContactOrganization"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ContactFieldType.js",
        "id": "org.apache.cordova.contacts.ContactFieldType"
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/Acceleration.js",
        "id": "org.apache.cordova.device-motion.Acceleration",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/accelerometer.js",
        "id": "org.apache.cordova.device-motion.accelerometer",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassError.js",
        "id": "org.apache.cordova.device-orientation.CompassError",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassHeading.js",
        "id": "org.apache.cordova.device-orientation.CompassHeading",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/compass.js",
        "id": "org.apache.cordova.device-orientation.compass",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/DirectoryEntry.js",
        "id": "org.apache.cordova.file.DirectoryEntry",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/DirectoryReader.js",
        "id": "org.apache.cordova.file.DirectoryReader",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Entry.js",
        "id": "org.apache.cordova.file.Entry",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/File.js",
        "id": "org.apache.cordova.file.File",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileEntry.js",
        "id": "org.apache.cordova.file.FileEntry",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileError.js",
        "id": "org.apache.cordova.file.FileError",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileReader.js",
        "id": "org.apache.cordova.file.FileReader",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileSystem.js",
        "id": "org.apache.cordova.file.FileSystem",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileUploadOptions.js",
        "id": "org.apache.cordova.file.FileUploadOptions",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileUploadResult.js",
        "id": "org.apache.cordova.file.FileUploadResult",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileWriter.js",
        "id": "org.apache.cordova.file.FileWriter",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Flags.js",
        "id": "org.apache.cordova.file.Flags",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/LocalFileSystem.js",
        "id": "org.apache.cordova.file.LocalFileSystem",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Metadata.js",
        "id": "org.apache.cordova.file.Metadata",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/ProgressEvent.js",
        "id": "org.apache.cordova.file.ProgressEvent",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystems.js",
        "id": "org.apache.cordova.file.fileSystems"
    },
    {
        "file": "plugins/org.apache.cordova.file/www/requestFileSystem.js",
        "id": "org.apache.cordova.file.requestFileSystem",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/resolveLocalFileSystemURI.js",
        "id": "org.apache.cordova.file.resolveLocalFileSystemURI",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/android/FileSystem.js",
        "id": "org.apache.cordova.file.androidFileSystem",
        "merges": [
            "FileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystems-roots.js",
        "id": "org.apache.cordova.file.fileSystems-roots",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystemPaths.js",
        "id": "org.apache.cordova.file.fileSystemPaths",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.file-transfer/www/FileTransferError.js",
        "id": "org.apache.cordova.file-transfer.FileTransferError",
        "clobbers": [
            "window.FileTransferError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file-transfer/www/FileTransfer.js",
        "id": "org.apache.cordova.file-transfer.FileTransfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/GlobalizationError.js",
        "id": "org.apache.cordova.globalization.GlobalizationError",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/globalization.js",
        "id": "org.apache.cordova.globalization.globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media/www/MediaError.js",
        "id": "org.apache.cordova.media.MediaError",
        "clobbers": [
            "window.MediaError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media/www/Media.js",
        "id": "org.apache.cordova.media.Media",
        "clobbers": [
            "window.Media"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureAudioOptions.js",
        "id": "org.apache.cordova.media-capture.CaptureAudioOptions",
        "clobbers": [
            "CaptureAudioOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureImageOptions.js",
        "id": "org.apache.cordova.media-capture.CaptureImageOptions",
        "clobbers": [
            "CaptureImageOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureVideoOptions.js",
        "id": "org.apache.cordova.media-capture.CaptureVideoOptions",
        "clobbers": [
            "CaptureVideoOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureError.js",
        "id": "org.apache.cordova.media-capture.CaptureError",
        "clobbers": [
            "CaptureError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/MediaFileData.js",
        "id": "org.apache.cordova.media-capture.MediaFileData",
        "clobbers": [
            "MediaFileData"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/MediaFile.js",
        "id": "org.apache.cordova.media-capture.MediaFile",
        "clobbers": [
            "MediaFile"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/capture.js",
        "id": "org.apache.cordova.media-capture.capture",
        "clobbers": [
            "navigator.device.capture"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.statusbar/www/statusbar.js",
        "id": "org.apache.cordova.statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.vibration/www/vibration.js",
        "id": "org.apache.cordova.vibration.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.chromium.alarms/alarms.js",
        "id": "org.chromium.alarms.Alarms",
        "clobbers": [
            "chrome.alarms"
        ]
    },
    {
        "file": "plugins/org.chromium.bootstrap/api/app/window.js",
        "id": "org.chromium.bootstrap.app.window",
        "clobbers": [
            "chrome.app.window"
        ]
    },
    {
        "file": "plugins/org.chromium.bootstrap/api/mobile.js",
        "id": "org.chromium.bootstrap.mobile.impl",
        "clobbers": [
            "chrome.mobile.impl"
        ]
    },
    {
        "file": "plugins/org.chromium.bootstrap/api/helpers/ChromeExtensionURLs.android.js",
        "id": "org.chromium.bootstrap.helpers.ChromeExtensionURLs"
    },
    {
        "file": "plugins/org.chromium.filechooser/fileChooser.js",
        "id": "org.chromium.filechooser.FileChooser"
    },
    {
        "file": "plugins/org.chromium.filesystem/fileSystem.js",
        "id": "org.chromium.filesystem.FileSystem",
        "clobbers": [
            "chrome.fileSystem"
        ]
    },
    {
        "file": "plugins/org.chromium.gcm/gcm.js",
        "id": "org.chromium.gcm.gcm",
        "clobbers": [
            "chrome.gcm"
        ]
    },
    {
        "file": "plugins/org.chromium.i18n/i18n.js",
        "id": "org.chromium.i18n.I18n",
        "clobbers": [
            "chrome.i18n"
        ]
    },
    {
        "file": "plugins/org.chromium.identity/identity.js",
        "id": "org.chromium.identity.Identity",
        "clobbers": [
            "chrome.identity"
        ]
    },
    {
        "file": "plugins/org.chromium.idle/idle.js",
        "id": "org.chromium.idle.idle",
        "clobbers": [
            "chrome.idle"
        ]
    },
    {
        "file": "plugins/org.chromium.notifications/notifications.js",
        "id": "org.chromium.notifications.notifications",
        "clobbers": [
            "chrome.notifications"
        ]
    },
    {
        "file": "plugins/org.chromium.polyfill.blob_constructor/Blob.js",
        "id": "org.chromium.polyfill.blob_constructor.blob-constructor",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.chromium.polyfill.customevent/customEvent.js",
        "id": "org.chromium.polyfill.customevent.customEvent",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.chromium.polyfill.xhr_features/xhr-blob.js",
        "id": "org.chromium.polyfill.xhr_features.xhr-blob",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.chromium.power/power.js",
        "id": "org.chromium.power.power",
        "clobbers": [
            "chrome.power"
        ]
    },
    {
        "file": "plugins/org.chromium.pushmessaging/pushMessaging.js",
        "id": "org.chromium.pushmessaging.pushMessaging",
        "clobbers": [
            "chrome.pushMessaging"
        ]
    },
    {
        "file": "plugins/org.chromium.socket/socket.js",
        "id": "org.chromium.socket.Socket",
        "clobbers": [
            "chrome.socket"
        ]
    },
    {
        "file": "plugins/org.chromium.syncfilesystem/syncFileSystem.js",
        "id": "org.chromium.syncfilesystem.SyncFileSystem",
        "clobbers": [
            "chrome.syncFileSystem"
        ]
    },
    {
        "file": "plugins/org.chromium.system.cpu/system.cpu.js",
        "id": "org.chromium.system.cpu.system.cpu",
        "clobbers": [
            "chrome.system.cpu"
        ]
    },
    {
        "file": "plugins/org.chromium.system.display/system.display.js",
        "id": "org.chromium.system.display.system.display",
        "clobbers": [
            "chrome.system.display"
        ]
    },
    {
        "file": "plugins/org.chromium.system.memory/system.memory.js",
        "id": "org.chromium.system.memory.system.memory",
        "clobbers": [
            "chrome.system.memory"
        ]
    },
    {
        "file": "plugins/org.chromium.system.network/system.network.js",
        "id": "org.chromium.system.network.system.network",
        "clobbers": [
            "chrome.system.network"
        ]
    },
    {
        "file": "plugins/org.chromium.zip/zip.js",
        "id": "org.chromium.zip.Zip",
        "clobbers": [
            "zip"
        ]
    },
    {
        "file": "plugins/org.chromium.zip/tests/tests.js",
        "id": "org.chromium.zip.tests"
    },
    {
        "file": "plugins/org.chromium.common/events.js",
        "id": "org.chromium.common.events",
        "clobbers": [
            "chrome.Event"
        ]
    },
    {
        "file": "plugins/org.chromium.common/errors.js",
        "id": "org.chromium.common.errors"
    },
    {
        "file": "plugins/org.chromium.common/stubs.js",
        "id": "org.chromium.common.stubs"
    },
    {
        "file": "plugins/org.chromium.common/helpers.js",
        "id": "org.chromium.common.helpers"
    },
    {
        "file": "plugins/org.chromium.storage/storage.js",
        "id": "org.chromium.storage.Storage",
        "clobbers": [
            "chrome.storage"
        ]
    },
    {
        "file": "plugins/org.chromium.runtime/api/app/runtime.js",
        "id": "org.chromium.runtime.app.runtime",
        "clobbers": [
            "chrome.app.runtime"
        ]
    },
    {
        "file": "plugins/org.chromium.runtime/api/runtime.js",
        "id": "org.chromium.runtime.runtime",
        "clobbers": [
            "chrome.runtime"
        ]
    },
    {
        "file": "plugins/org.chromium.runtime/lib/CryptoJS/sha256.js",
        "id": "org.chromium.runtime.CryptoJS-sha256"
    },
    {
        "file": "plugins/org.chromium.runtime/lib/CryptoJS/enc-base64-min.js",
        "id": "org.chromium.runtime.CryptoJS-enc-base64-min"
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.battery-status": "0.2.10",
    "org.apache.cordova.camera": "0.3.1",
    "org.apache.cordova.contacts": "0.2.12",
    "org.apache.cordova.device": "0.2.11",
    "org.apache.cordova.device-motion": "0.2.9",
    "org.apache.cordova.device-orientation": "0.3.8",
    "org.apache.cordova.dialogs": "0.2.9",
    "org.apache.cordova.file": "1.3.0",
    "org.apache.cordova.file-transfer": "0.4.5",
    "org.apache.cordova.geolocation": "0.3.9",
    "org.apache.cordova.globalization": "0.3.0",
    "org.apache.cordova.inappbrowser": "0.5.1",
    "org.apache.cordova.media": "0.2.12",
    "org.apache.cordova.media-capture": "0.3.2",
    "org.apache.cordova.network-information": "0.2.11",
    "org.apache.cordova.splashscreen": "0.3.2",
    "org.apache.cordova.statusbar": "0.1.7",
    "org.apache.cordova.vibration": "0.3.10",
    "org.chromium.alarms": "1.0.1",
    "org.chromium.audiocapture": "1.0.1",
    "org.chromium.bootstrap": "1.0.2",
    "org.chromium.filechooser": "1.0.1",
    "org.chromium.filesystem": "1.0.2",
    "org.chromium.gcm": "1.0.0",
    "org.chromium.i18n": "1.0.1",
    "org.chromium.identity": "1.2.2",
    "org.chromium.idle": "1.0.0",
    "org.chromium.navigation": "1.0.1",
    "org.chromium.notifications": "1.0.4",
    "org.chromium.polyfill.blob_constructor": "1.0.0",
    "org.chromium.polyfill.customevent": "1.0.2",
    "org.chromium.polyfill.xhr_features": "1.0.1",
    "org.chromium.power": "1.0.2",
    "org.chromium.pushmessaging": "1.0.1",
    "org.chromium.socket": "1.1.3",
    "org.chromium.syncfilesystem": "0.1.4",
    "org.chromium.system.cpu": "1.0.0",
    "org.chromium.system.display": "1.0.0",
    "org.chromium.system.memory": "1.0.0",
    "org.chromium.system.network": "1.0.0",
    "org.chromium.videocapture": "1.0.1",
    "org.chromium.zip": "2.1.0",
    "org.apache.cordova.engine.crosswalk": "0.0.1-dev",
    "org.chromium.common": "1.0.2",
    "org.chromium.storage": "1.0.2",
    "org.chromium.runtime": "1.0.2",
    "com.google.playservices": "19.0.0",
    "android.support.v4": "1.0.0",
    "org.chromium.frameworks.googleopensource": "1.0.0",
    "org.chromium.frameworks.googleplus": "1.0.1"
}
// BOTTOM OF METADATA
});