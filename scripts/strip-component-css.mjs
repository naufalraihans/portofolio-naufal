// One-shot: strip <style ...> blocks from Svelte components (CSS lives in src/app.css).
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

const dir = 'src/lib/components';
for (const file of readdirSync(dir)) {
	const path = `${dir}/${file}`;
	const src = readFileSync(path, 'utf8');
	const out = src.replace(/\n<style[\s\S]*?<\/style>\n?/g, '\n');
	if (out !== src) { writeFileSync(path, out); console.log('stripped', file); }
}
