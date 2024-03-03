import { SetTransport } from "@mercuryworkshop/bare-mux";
//@ts-ignore
import "dreamland";
import "./index.css";


navigator.serviceWorker.register("/sw.js");


let app: ThisParameterType<typeof App>;

const App: Component<{}, {
  url: string
  urlencoded: string,
  active: boolean,
}> = function() {
  app = this;
  this.active = false;
  this.url = "https://google.com"
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

    input {
      border: none;
      outline: none;
      color: #191724;
      height:2em;
      width:60%;
      text-align:center;
      border-radius: 5px;
      background-color: #eb6f92;
    }
`;
  return <div>
    <h1>Percury Unblocker</h1>
    surf the unblocked and mostly buggy web
    {use(this.active, enabled => enabled &&
      //@ts-ignore
      <input bind:value={use(this.url)} on:input={(e) => (this.url = e.target.value)} on:keyup={e => e.keyCode == 13 && console.log(this.urlencoded = "/uvsw/" + Ultraviolet.codec.xor.encode(this.url))} />
    )
    }
    <iframe src={use(this.urlencoded)}></iframe>
  </div>
}


document.addEventListener("libcurl_load", () => {
  console.log("libcurl.js ready!");
});

declare var BareMod: any;
(async () => {
  document.querySelector("#app")?.appendChild(<App />)
  // SetSingletonTransport(new BareMod.BareClient("http://localhost:8080/bare/"));
  // registerRemoteListener(navigator.serviceWorker.controller!);
  // SetTransport("BareMod.BareClient", "http://localhost:8080/bare/");
  SetTransport("BareTLS.TLSClient", { wisp: "ws://localhost:4000/", type: "epoxy" });

  // let root = ((window.location.protocol === "https:") ? "wss://" : "ws://") + window.location.host;
  // let bcctls = new TLSClient({ mux: "ws://localhost:6001" });
  // //@ts-ignore
  // window.b = bcctls;
  // setBareClientImplementation(bcctls);
  //@ts-ignore
  app.active = true;
})();

