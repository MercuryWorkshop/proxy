import { registerRemoteListener, setBareClientImplementation } from "@mercuryworkshop/bare-client-custom";
//@ts-ignore
import { TLSClient } from "../node_modules/bcc-tls/dist/index.mjs";
import "../node_modules/@mercuryworkshop/alicejs/AliceJS.js";
import "./index.css";


navigator.serviceWorker.register("/sw.js");
registerRemoteListener();


let app: ThisParameterType<typeof App>;

function App(this: {
  url: string
  urlencoded: string,
  active: boolean,
}) {
  app = this;
  this.active = false;
  this.url = "https://google.com"
  this.urlencoded = "";
  let css = styled.new`
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
  return <div css={css}>
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

(async () => {
  document.querySelector("#app")?.appendChild(<App />)
  let root = ((window.location.protocol === "https:") ? "wss://" : "ws://") + window.location.host;
  let bcctls = new TLSClient({ mux: "ws://localhost:6001" });
  //@ts-ignore
  window.b = bcctls;
  setBareClientImplementation(bcctls);
  //@ts-ignore
  app.active = true;
})();
//@ts-ignore
window.t = TLSClient;
