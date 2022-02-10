import { equals } from "https://deno.land/std@0.125.0/bytes/mod.ts";
import { assertEquals } from "https://deno.land/std@0.125.0/testing/asserts.ts";
import {compressTest} from "./compressToFile.ts";
import {decompressTest} from "./decompress.ts";

Deno.test({
	name: "BibleLength",
	async fn(): Promise<void> {
		console.warn(`This test doesnt check Data integrity, it just checks if the file size`);
		const {compressed, original} = await compressTest();
		const decompressRes = await decompressTest();
		return assertEquals(original.byteLength, decompressRes.byteLength);
	}
});
