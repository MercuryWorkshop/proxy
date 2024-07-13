import BareClient, { BareMuxConnection } from "@mercuryworkshop/bare-mux";
import "dreamland";
import "./index.css";

const connection = new BareMuxConnection("/baremux/worker.js")
const flex = css`display: flex;`;
const col = css`flex-direction: column;`;

const store = $store({
    url: "https://google.com",
    wispurl: "wss://wisp.mercurywork.shop/",
    bareurl: (location.protocol === "https:" ? "https" : "http") + "://" + location.host + "/bare/",
}, { ident: "settings", backing: "localstorage", autosave: "auto" });
const App: Component<
  {},
  {
    urlencoded: string;
  }
> = function () {
  this.urlencoded = "";
  this.css = `
    width: 100%;
    height: 100%;
    color: #e0def4;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input,
    button {
      font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
        sans-serif;
    }
    h1 {
      font-family: "Inter Tight", "Inter", system-ui, -apple-system, BlinkMacSystemFont,
      sans-serif;
      margin-bottom: 0;
    }
    iframe {
      border: 4px solid #313131;
      background-color: #121212;
      border-radius: 1rem;
      margin: 2em;
      margin-top: 0.5em;
      width: calc(100% - 4em);
      height: calc(100% - 8em);
    }

    input.bar {
      border: none;
      outline: none;
      color: #fff;
      height: 2em;
      width: 60%;
      text-align: center;
      border-radius: 0.75em;
      background-color: #313131;
      padding: 0.45em;
    }
    .cfg * {
      margin: 2px;
    }
    .buttons button {
      border: 2px solid #4c8bf5;
      background-color: #313131;
      border-radius: 0.75em;
      color: #fff;
      padding: 0.45em;
    }
    .cfg input {
      border: none;
      background-color: #313131;
      border-radius: 0.75em;
      color: #fff;
      outline: none;
      padding: 0.45em;
    }
  `;
  return (
    <div>
    <h1>Percury Unblocker</h1>
    <p>surf the unblocked and mostly buggy web</p>

    <div class={[flex, col, "cfg"]}>
      <input bind:value={use(store.wispurl)}></input>
      <input bind:value={use(store.bareurl)}></input>


      <div class={[flex, "buttons"]}>
        <button on:click={() => connection.setTransport("/uv/baremod.js", [store.bareurl])}>use bare server 3</button>
        <button on:click={() => connection.setTransport("/uv/curlmod.js", [{ wisp: store.wispurl }])}>use libcurl.js</button>
        <button on:click={() => connection.setTransport("/uv/epxmod.js", [{ wisp: store.wispurl }])}>use epoxy</button>
        <button on:click={() => window.open(this.urlencoded)}>open in fullscreen</button>
      </div>
    </div>
    <input class="bar" bind:value={use(store.url)} on:input={(e: any) => (store.url = e.target.value)} on:keyup={(e: any) => e.keyCode == 13 && console.log(this.urlencoded = __uv$config.prefix + __uv$config.encodeUrl(e.target.value))}></input>
    <iframe src={use(this.urlencoded)}></iframe>
  </div>
  );
};

declare var CurlMod: any;
declare var EpxMod: any;
declare var BareMod: any;
declare var __uv$config: any;
declare var Ultraviolet: any;

(async () => {
  await navigator.serviceWorker.register("/sw.js");
  document.querySelector("#app")?.appendChild(<App />);
})();

(window as any).b = BareClient;
