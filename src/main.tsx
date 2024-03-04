import BareClient, { SetSingletonTransport, SetTransport, registerRemoteListener } from "@mercuryworkshop/bare-mux";
//@ts-ignore
import "dreamland";
import "./index.css";


navigator.serviceWorker.register("/sw.js");


let app: ThisParameterType<typeof App>;

const flex = rule`display: flex;`;
const col = rule`flex-direction: column;`;

const store = $store({
  url: "https://google.com",
  wispurl: "wss://wisp.mercurywork.shop/",
  bareurl: "http://localhost:8080/bare/"
}, "settings", "localstorage");
const App: Component<{}, {

  urlencoded: string,
}> = function() {
  app = this;
  this.urlencoded = "";
  this.css = css`
    self {
      width: 100%;
      height:100%;
      color:  #e0def4;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction:column;
    }
    h1 {
      font-family: "Inter";
      text-align: center;
    }
    iframe {
      border: 8px solid #11528f;
      background-color: #11528f;
      border-radius: 25px;
      margin: 2em;
      width: calc(100% - 4em);
      height: calc(100% - 8em);
    }

    input.bar {
      border: none;
      outline: none;
      color: #191724;
      height:2em;
      width:60%;
      text-align:center;
      border-radius: 5px;
      background-color: #eb6f92;
    }
    .cfg * {
      margin: 2px;
    }
    .buttons button {
      border: 4px solid #11528f;
      background-color: #eb6f92;
      color: #191724;
    }
    .cfg input {
      border: 3px solid #3d84a8;
      background-color: #eb6f92;
      outline: none;
    }
`;
  return <div>
    <h1>Percury Unblocker</h1>
    surf the unblocked and mostly buggy web

    <div class={[flex, col, "cfg"]}>
      <input bind:value={use(store.wispurl)} />
      <input bind:value={use(store.bareurl)} />


      <div class={[flex, "buttons"]}>
        <button on:click={() => SetTransport("BareMod.BareClient", store.bareurl)}>use bare server 3</button>
        <button on:click={() => SetTransport("CurlMod.LibcurlClient", { wisp: store.wispurl })}>use libcurl.js</button>
        <button on:click={() => SetTransport("EpxMod.EpoxyClient", { wisp: store.wispurl })}>use epoxy</button>
        <button on:click={() => SetSingletonTransport(new BareMod.BareClient(store.bareurl))}>use bare server 3 (remote)</button>
      </div>
    </div>
    <input class="bar" bind:value={use(store.url)} on:input={(e: any) => (store.url = e.target.value)} on:keyup={(e: any) => e.keyCode == 13 && console.log(this.urlencoded = "/uvsw/" + Ultraviolet.codec.xor.encode(store.url))} />
    <iframe src={use(this.urlencoded)}></iframe>
  </div>
}


declare var CurlMod: any;
declare var EpxMod: any;
declare var BareMod: any;
declare var Ultraviolet: any;

(async () => {
  registerRemoteListener(navigator.serviceWorker.controller!);
  document.querySelector("#app")?.appendChild(<App />)
})();

(window as any).b = BareClient
