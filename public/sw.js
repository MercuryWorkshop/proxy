/*global UVServiceWorker,__uv$config*/
/*
 * Stock service worker script.
 * Users can provide their own sw.js if they need to extend the functionality of the service worker.
 * Ideally, this will be registered under the scope in uv.config.js so it will not need to be modified.
 * However, if a user changes the location of uv.bundle.js/uv.config.js or sw.js is not relative to them, they will need to modify this script locally.
 */

importScripts('/uv/uv.bundle.js');
importScripts('/uv.config.js');
importScripts(__uv$config.sw || '/uv/uv.sw.js');

// Fetch vencord and store the text in a variable
self.vencordjs = "";
self.vencordcss = "";
async function loadVC() {
    self.vencordjs = await fetch("https://raw.githubusercontent.com/Vencord/builds/main/browser.js").then(response => response.text());
    self.vencordcss = await fetch("https://raw.githubusercontent.com/Vencord/builds/main/browser.css").then(response => response.text());
    self.__uv$config.inject = [{
        host: "google.com",
        html: `<script>
            console.log("injected from uv!")
            </script>`,
        injectTo: "head"
    },
    {
        host: "discord.com",
        html: `
            <script>${vencordjs}</script>
            <style>${vencordcss}</style>
        `,
        injectTo: "head"
    }];
}
loadVC();



const uv = new UVServiceWorker();

async function handleRequest(event) {
    if (uv.route(event)) {
        return uv.fetch(event);
    }
    
    return fetch(event.request)
}

self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event));
});
