//Task_1: Object Creation Of book
let book = {title:"Pralay:The Great Deluge",
    author:"Vineet Bajpai",
    year:2020
}
console.log(book);

//Task_2:Access Properties
console.log(book.title);
console.log(book.author);

// Task_3: Method in Object
book.getDetails=function(){
    return `Title:${this.title} by Author:${this.author}`;
}
console.log(book.getDetails());

// Task_4: Method in Object Year
book.UpdateYear = function(newYear){
    book.year = newYear;
} 
book.UpdateYear(2021);
console.log(book);

//Task_5:Nested Object
let library = {
    name: "Central Library",
    Location:"Pune",
    
    books:[{title:"Pralay:The Great Deluge",
    author:"Vineet Bajpai",
    year:2020
},
{title:"Harappa",
    author:"Vineet Bajpai and Vivasan Pujari",
    year: 2019
},
{title:"Kashi",
    author:"Vineet Bajpai and Raja Manu",
    year:2021
}
]}
console.log(library);

//Task_6: All book titles in library
library.books.forEach((book) => {
    console.log("Book Title:",book.title);
});

// Task_7:


