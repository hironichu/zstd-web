//This file is here to generate zstd file
import { init, decompress, compress } from 'https://deno.land/x/zstd_wasm/deno/zstd.ts';

await init();
export const decompressTest = async () => {
	const bible = Deno.readFileSync("bible.zst");
	const decompressed = await decompress(bible);
	return decompressed
}

