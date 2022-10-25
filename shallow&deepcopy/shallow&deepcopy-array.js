// shallow copy sample
const orig = ['avocado', 'apple', { name: 'strawberry' }];

const copy = orig.slice();

copy.push('guava');
// copy[2].name = 'coconut';

console.log('orig', orig);

console.log('copy:', copy);


// deep copy sample
const orig = ['avocado', 'apple', { name: 'strawberry' }];

const copy = JSON.parse(JSON.stringify(orig));

copy[2].name = 'coconut';

console.log('orig', orig);

console.log('copy:', copy);