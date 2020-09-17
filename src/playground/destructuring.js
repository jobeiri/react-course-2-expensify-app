//
// object destructuring
//


// const person = {
//     age: '24',
//     location: {
//         city: 'tehran',
//         temp: 92
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temprature } = person.location;
// if (city && temprature) {
//     console.log(`It's ${temprature} in ${city}`)
// }

const book = {
    title: 'Ego is the Enemy.',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName)

//
// array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);


const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item
console.log(`A medium ${itemName} costs ${price}`);