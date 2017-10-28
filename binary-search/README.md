# Binary Search


# Benchmarks

All test inputs are provided from the `bench.json` file in this directory.

## JavaScript

```
$ node binary-search/bench.js
binarySearch#SmallArray#iterative x 16,248,294 ops/sec ±0.98% (84 runs sampled)
binarySearch#SmallArray#recursive x 11,734,060 ops/sec ±0.90% (85 runs sampled)
Fastest is binarySearch#SmallArray#iterative
binarySearch#LargeArray#iterative x 4,355,472 ops/sec ±1.11% (84 runs sampled)
binarySearch#LargeArray#recursive x 3,322,481 ops/sec ±0.92% (87 runs sampled)
Fastest is binarySearch#LargeArray#iterative
binarySearch#ValueNotFound#iterative x 6,417,426 ops/sec ±0.87% (86 runs sampled)
binarySearch#ValueNotFound#recursive x 2,107,255 ops/sec ±2.06% (85 runs sampled)
Fastest is binarySearch#ValueNotFound#iterative
```