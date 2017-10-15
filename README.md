# RNFirebase Instant Chat
RNFirebase is a light-weight layer sitting on-top of the native Firebase libraries for both iOS and Android which mirrors the Firebase Web SDK as closely as possible.

Although the Firebase Web SDK library will work with React Native, it is mainly built for the web.

RNFirebase provides a JavaScript bridge to the native Firebase SDKs for both iOS and Android therefore Firebase will run on the native thread, allowing the rest of your app to run on the JS thread. The Firebase Web SDK also runs on the JS thread, therefore potentially affecting the frame rate causing jank with animations, touch events etc.

The native SDKs also allow us to hook into device sdk's which are not possible with the web SDK, for example crash reporting, offline realtime database support, analytics and more!

All in all, RNFirebase provides much faster performance (~2x) over the web SDK and provides device sdk's not found in the web sdk (see the feature table below).
