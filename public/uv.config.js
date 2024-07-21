/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/uvsw/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv.config.js',
    sw: '/uv/uv.sw.js',
    inject: [{
        host: "google.com",
        html: `<script>
            console.log("injected from uv!")
            </script>`,
        injectTo: "head"
    },
    {
        host: "discord.com",
        html: `<script>
                async function applyCSS() {
                    let vencordCSS = await fetch("https://raw.githubusercontent.com/Vencord/builds/main/browser.css")
                    let cssLink = document.createElement("style");
                    
                    cssLink.innerHTML = await vencordCSS.text();
                    document.head.appendChild(cssLink)
                }
                applyCSS();
                </script>
                <script src="https://raw.githubusercontent.com/Vencord/builds/main/browser.js"></script>`,
        injectTo: "head"
    }]
};
