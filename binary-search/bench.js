const Benchmark = require('benchmark');

const binarySearch = require('./index');
const tests = require('./bench.json');

tests.forEach((test) => {
  const suite = new Benchmark.Suite;
  // add tests
  suite.add(`binarySearch#${test.name}#iterative`, function() {
    const index = binarySearch.search(test.array, test.value);
    if (index !== test.index) throw new Error('incorrect value found');
  })
  .add(`binarySearch#${test.name}#recursive`, function() {
    const index = binarySearch.searchRecursive(test.array, 0, test.array.length, test.value);
    if (index !== test.index) throw new Error('incorrect value found');
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run();
})
