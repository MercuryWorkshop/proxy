#!/bin/bash

set -e

submodules="bare-mux CurlTransport EpoxyTransport Ultraviolet bare-as-module3"

if [ ! -d "node_modules" ]; then
  pnpm i
fi

for subdir in $submodules; do
  (
    cd $subdir
    pnpm run build
  )
done

mkdir -p public/uv
cp CurlTransport/node_modules/libcurl.js/libcurl.wasm public/libcurl.wasm
cp CurlTransport/dist/index.cjs public/uv/curlmod.js
cp EpoxyTransport/dist/index.js public/uv/epxmod.js
cp bare-as-module3/dist/bare.cjs public/uv/baremod.js
cp bare-mux/dist/* public/uv/
cp Ultraviolet/dist/* public/uv/