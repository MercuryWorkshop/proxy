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
mkdir -p public/baremux
cp CurlTransport/dist/index.mjs public/uv/curlmod.js
cp EpoxyTransport/dist/index.mjs public/uv/epxmod.js
cp bare-as-module3/dist/index.mjs public/uv/baremod.js
cp Ultraviolet/dist/* public/uv/
cp bare-mux/dist/* public/baremux/
