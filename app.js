const person = {
    name: "Taran",
    age: "21",
    favColor: "red",
    getName: function() {
        return this.name;
    },
}

//complex objects below

const blogPost = {
    title: "my first blog post",
    author: {
        name: "Taran",
        age: "21",
        favColor: "red",
    },
    tags: ["coding","js","html","css"],
    content: "This my first post hellooo",
}

console.log(blogPost.author.name)
console.log(blogPost.tags[0])

//object methods below

//An object method is basically a function in an object


console.log(person.getName()
)


const car = {
    make: "Honda",
    model: "Civic",
    color: "Red", 
    advert: function() {
        return `This car is a ${this.color} ${this.make} ${this.model}.`;
    },

}

const carDetail=car.advert()
console.log(carDetail)
