// Loads every JSON file in content/ as one object, keyed by filename.
const files = import.meta.glob('/content/*.json', { eager: true, query: '?raw', import: 'default' });

export const content = Object.fromEntries(
	Object.entries(files).map(([path, raw]) => [path.split('/').pop().replace('.json', ''), JSON.parse(raw)])
);

// Character count for giant words: spaces included, as the template's --len expects.
export const len = (s) => [...s].length;

// Split "line one\nline two" into lines.
export const lines = (s) => s.split('\n');

// A section is shown only when it has content (empty string / empty array = hidden).
export const has = (v) => Array.isArray(v) ? v.length > 0 : !!v;
