
const user = { name: 'Diego', id: 7};
user.books = [];

const book1 = {
    title: 'The Catcher in the Rye',
    author: 'J.D Salinger',
    isbn: '0316769487',
    category: 'Classic Literature'
    };

const book2 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '0446310786',
    category: 'Classic Literature'
    };

const library = [];
library.push(user);

const book3 = {
    title: 'The art of driving in the rain',
    author: 'Garth Stain',
    isbn: '0123456789',
    category: 'Classic Literature'
};
library[0].books.push(book1);
library[0].books.push(book2);
library[0].books.push(book3);

for(const person of library){
    console.log(person.name);
    for(const book of user.books){
        console.log(`${book.title}, ${book.author}`);
    }
}