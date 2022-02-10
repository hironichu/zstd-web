//This file is here to generate zstd file
import { init, decompress, compress } from 'https://deno.land/x/zstd_wasm/deno/zstd.ts';

await init();

export const compressTest = async () => {
	const bible = "https://raw.githubusercontent.com/mxw/grmr/master/src/finaltests/bible.txt";
	//Note that the following will take longer if your internet connection is slow
	const original = await(await fetch(bible)).arrayBuffer();
	
	const compressed = await compress(original, 10);
	
	const data = compressed;
	Deno.writeFileSync("bible.zst", data);
	return {
		original,
		compressed
	};
}