// shallow copy sample
const orig = {
    test: 'test',
    userDetails: {
        address: {
            province: 'Province',
            county: 'country'
        },
        name: 'myObject'
    }
}

const copy = Object.assign({}, orig);

copy.test = 'newTest';
// copy.userDetails.name = 'newName';

console.log('orig:', orig);

console.log('copy:', copy);


// deep copy sample
const orig = {
    test: 'test',
    userDetails: {
        address: {
            province: 'Province',
            county: 'country'
        },
        name: 'myObject'
    },
    myFn: () => {},
    undef: undefined
}

const copy = JSON.parse(JSON.stringify(orig));

copy.userDetails.name = 'newName';

console.log('orig:', orig);

console.log('copy:', copy);