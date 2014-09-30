cordova.define("org.chromium.apkpackager.APKPackager", function(require, exports, module) { 
var exec = cordova.require('cordova/exec');

function pkgSuccess( msg ) {
      console.log(msg);
}

function pkgFail(msg) {
    console.log('Error: ' + msg);
}


module.exports.buildAPK =  function(zipPath, assetsPath, outputPath, templatePath) {
    exec(pkgSuccess, pkgFail, 'APKPackager', 'packageAPK', [templatePath, zipPath, assetsPath, outputPath]);
}



});
