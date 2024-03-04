# proxy

generic proxy testing

## Usage
```
pnpm i
pnpm run dev
```

## Actually changing anything

### Epoxy
```bash
cd EpoxyTransport
pnpm build
cp -r dist/index.cjs ../public/uv/epxmod.js
cd ..
```

### cURL
```bash
cd CurlTransport
pnpm build
cp -r dist/index.cjs ../public/uv/curlmod.js
cd ..
```

### Ultraviolet
```bash
cd Ultraviolet
pnpm build
cp -r dist/* ../public/uv
cd ..
```

### Baremux
```bash
cd bare-mux
pnpm build
cp -r dist/bare.cjs ../public/uv/baremod.js
cd ..
```
