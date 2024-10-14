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
    proxy: ""
}, { ident: "settings", backing: "localstorage", autosave: "auto" });

// Set default transport
connection.setTransport("/epoxy/index.mjs", [{ wisp: store.wispurl }]);

const Config: Component<{}, {}> = function () {
	this.css = `
    transition: opacity 0.4s ease;
    :modal[open] {
        animation: fade 0.4s ease normal;
    }

    :modal::backdrop {
     backdrop-filter: blur(3px);
    }

    .buttons {
      gap: 0.5em;
    }
    .buttons button {
      border: 1px solid #4c8bf5;
      background-color: #313131;
      border-radius: 0.75em;
      color: #fff;
      padding: 0.45em;
    }
    .input_row input {
      background-color: rgb(18, 18, 18);
      border: 2px solid rgb(49, 49, 49);
      border-radius: 0.75em;
      color: #fff;
      outline: none;
      padding: 0.45em;
    }
    .input_row {
      margin-bottom: 0.5em;
      margin-top: 0.5em;
    }
    .input_row input {
      flex-grow: 1;
    }
    .centered {
      justify-content: center;
      align-items: center;
    }
  `;

	function handleModalClose(modal) {
		modal.style.opacity = 0;
		setTimeout(() => {
			modal.close();
			modal.style.opacity = 1;
		}, 250);
	}

	return (
     <dialog class="cfg" style="background-color: #121212; color: white; border-radius: 8px;">
        <div style="align-self: end">
          <div class={[flex, "buttons"]}>
            <button on:click={() => connection.setTransport("/baremod/index.mjs", [store.bareurl])}>use bare server 3</button>
            <button on:click={() => connection.setTransport("/libcurl/index.mjs", [{ wisp: store.wispurl }])}>use libcurl.js</button>
            <button on:click={() => connection.setTransport("/epoxy/index.mjs", [{ wisp: store.wispurl }])}>use epoxy</button>
          </div>
        </div>
        <div class={[flex, col, "input_row"]}>
          <label for="wisp_url_input">Wisp URL:</label>
          <input id="wisp_url_input" bind:value={use(store.wispurl)} spellcheck="false"></input>
        </div>
        <div class={[flex, col, "input_row"]}>
          <label for="bare_url_input">Bare URL:</label>
          <input id="bare_url_input" bind:value={use(store.bareurl)} spellcheck="false"></input>
        </div>
        <div class={[flex, "buttons", "centered"]}>
          <button on:click={() => handleModalClose(this.root)}>close</button>
        </div>
    </dialog>
  );
}

const App: Component<
  {},
  {
    url: string;
    frame: HTMLIFrameElement;
  }
> = function () {
	this.css = `
    width: 100%;
    height: 100%;
    color: #e0def4;
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    padding-top: 0;
    box-sizing: border-box;

    a {
    color: #e0def4;
    }

    input,
    button {
      font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
        sans-serif;
    }
    .version {
    }
    h1 {
      font-family: "Inter Tight", "Inter", system-ui, -apple-system, BlinkMacSystemFont,
      sans-serif;
      margin-bottom: 0;
    }
    iframe {
      background-color: #fff;
      border: none;
      border-radius: 0.3em;
      flex: 1;
      width: 100%;
    }

    input.bar {
      font-family: "Inter";
      padding: 0.1em;
      padding-left: 0.3em;
      border: none;
      outline: none;
      color: #fff;
      height: 1.5em;
      border-radius: 0.3em;
      flex: 1;

      background-color: #121212;
      border: 1px solid #313131;
    }
    .input_row > label {
      font-size: 0.7rem;
      color: gray;
    }
    p {
      margin: 0;
      margin-top: 0.2em;
    }

    .nav {
      padding-top: 0.3em;
      padding-bottom: 0.3em;
      gap: 0.3em;
    }
    spacer {
      margin-left: 10em;
    }

    .nav button {
      color: #fff;
      outline: none;
      border: none;
      border-radius: 0.30em;
      background-color: #121212;
      border: 1px solid #313131;
    }
  `;
  
  this.mount = () => {
    this.frame.addEventListener("load", () => {
      let url = this.frame.contentWindow!.location.href;
      if (!url) return;
      if (url === "about:blank") return;
  
      this.url = __uv$config.decodeUrl(
        url.slice((location.origin + __uv$config.prefix).length)
      );
    });
  }

  this.url = store.url;


	const handleSubmit = (e) => {
		this.url = this.url.trim();
		if (!this.url.startsWith("http")) {
			this.url = "https://" + this.url;
		}
    this.frame.src = __uv$config.prefix + __uv$config.encodeUrl(e.target.value)
	};

	const cfg = h(Config);
	document.body.appendChild(cfg);

  return (
    <div>
      <div class={[flex, "nav"]}>
        <button on:click={() => cfg.showModal()}>config</button>
        <button on:click={() => this.frame.contentWindow?.history.back()}>&lt;-</button>
        <button on:click={() => this.frame.contentWindow?.history.forward()}>-&gt;</button>
        <button on:click={() => this.frame.contentWindow?.location.reload()}>&#x21bb;</button>

        <input class="bar" bind:value={use(this.url)} on:input={(e) => {
          this.url = e.target.value;
        }} on:keyup={(e) => e.keyCode == 13 && (store.url = this.url) && handleSubmit(e)}></input>

        <button on:click={() => window.open(__uv$config.prefix + __uv$config.encodeUrl(this.url))}>open</button>

        <p class="version">
          <b>percury unblocker</b>
        </p>
      </div>
      <iframe id="proxy-frame" bind:this={use(this.frame)}></iframe> 
  </div>
  );
};

declare var __uv$config: any;
(async () => {
  await navigator.serviceWorker.register("/sw.js").then((reg) => {
    reg.update();
  })
  document.querySelector("#app")?.appendChild(<App />);
})();

(window as any).b = BareClient;
