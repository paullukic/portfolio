import { writable } from "svelte/store";
import { browser } from '$app/env';

export let activeWindowZIndex = writable(0);

export const commandHistoryLocalStorage = writable(
    (browser && localStorage.getItem('commandHistory')) || ''
);

export let iconsPositionLocalStorage = writable(
    (browser && localStorage.getItem('iconsPosition')) || ''
);

export let windowPositionLocalStorage = writable(
    (browser && localStorage.getItem('windowsPosition')) || ''
);
