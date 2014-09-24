cordova.define("org.chromium.polyfill.customevent.customEvent", function(require, exports, module) { // Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

if (typeof window.CustomEvent !== 'function') {
    exports.CustomEvent = function(type, eventInitDict) {
        var newEvent = document.createEvent('CustomEvent');
        newEvent.initCustomEvent(type,
                                 !!(eventInitDict && eventInitDict.bubbles),
                                 !!(eventInitDict && eventInitDict.cancelable),
                                 (eventInitDict ? eventInitDict.details : null));
        return newEvent;
    };
}

});
