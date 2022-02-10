# ZSTD Web

Simple web implementation for the Zstandard compression library.

This library should work on any modern browser that accept WebAssembly.

Please note that I am not the creator of this module, you can find the original source here : https://deno.land/x/zstd_wasm

Here is a basic exemple of usage :
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Zstd</title>
</head>
<body>
	<script type="module">
		import { decompress, compress } from "./zstd.js"
		const before = new Uint8Array(new ArrayBuffer(1024 * 1024 * 10))
		const data = compress(before)
		const after = decompress(data)
		console.assert(before.byteLength === after.byteLength)
		console.table({"Uncompressed": before.byteLength,"Compressed": data.byteLength, "Decompressed": after.byteLength}, ["byteLength"])

		const exemple2 = new Uint8Array(new ArrayBuffer(1024 * 1024 * 50))
		const newdata = new Uint8Array(...[exemple2].flat())
		const newdata2 = compress(newdata)
		const newdata3 = decompress(newdata2)
		console.assert(newdata.byteLength === newdata3.byteLength)
		console.table({"Uncompressed": newdata.byteLength,"Compressed": newdata2.byteLength, "Decompressed": newdata3.byteLength})
	</script>
</body>
</html>
```