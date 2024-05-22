importScripts("https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyBLV_h5O8b0b281hZL_RTQpcFtcVXsfgeQ",
    authDomain: "la-taverne-b5b1e.firebaseapp.com",
    projectId: "la-taverne-b5b1e",
    storageBucket: "la-taverne-b5b1e.appspot.com",
    messagingSenderId: "1033348493345",
    appId: "1:1033348493345:web:9598ef5441eac36f617360",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("[firebase-messaging-sw.js] Received background message ", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
