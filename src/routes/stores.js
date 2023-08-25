import { writable } from 'svelte/store';

export const feelings = writable({ current_feels: 'sad' });
