/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/uvsw/',
    encodeUrl: Ultraviolet.codec.plain.encode,
    decodeUrl: Ultraviolet.codec.plain.decode,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv.config.js',
    sw: '/uv/uv.sw.js',
};
