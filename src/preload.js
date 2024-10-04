import { preload } from './data';

let preloadComplete = false;

export const preloadAssets = (pre) => {
    if (!preloadComplete) {
        preload(pre);
        preloadComplete = true;
    }
};