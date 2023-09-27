import {proxyMiddleware} from "./proxy.middleware";

export function prepareProxy() {
    const proxyConfig = {
        "/maps/*": {
            "target": "https://maps.googleapis.com",
            "secure": false,
            "changeOrigin": true
        }
    };

    return proxyMiddleware(proxyConfig);
}
