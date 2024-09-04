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
cp Ultraviolet/dist/* public/uv/
mkdir -p public/baremux
cp bare-mux/dist/* public/baremux/

mkdir -p public/epoxy
cp EpoxyTransport/dist/index.mjs public/epoxy/index.mjs
mkdir -p public/libcurl
cp CurlTransport/dist/index.mjs public/libcurl/index.mjs
mkdir -p public/baremod
cp bare-as-module3/dist/index.mjs public/baremod/index.mjs