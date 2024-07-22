//Feature Request 1

let book = {title:"Pralay:The Great Deluge",
    author:"Vineet Bajpai",
    year:2020
}
book.getDetails=function(){
    return `Title:${this.title} by Author:${this.author}`;
}
book.UpdateYear = function(newYear){
    book.year = newYear;
} 
book.UpdateYear(2021);

book.UseThis = function(){
    let a = `A book named ${this.title} was launched in ${this.year}.`;
    return a;
}
console.log(book);
console.log(book.UseThis());

//Feature Request 2

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


library.books.forEach((book) => {
    console.log("Book Title:",book.title);
});

//Feature Request 3
for(let props in book){
    if(typeof book[props] === 'function'){
        console.log(`The Property ${props} returns ${book[props](2023)}`);
    } else{ 
    console.log(`The Property ${props} has value ${book[props]}`);//Use book[props] to dynamically access property values correctly as props is reference and not actual property in books.
}
}


let props = Object.keys(book);
console.log(`props: ${props}`);
let values = Object.values(book);
console.log(`${props} => values:${values}`);