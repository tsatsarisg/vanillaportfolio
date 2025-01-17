const books = [
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    image: "../assets/books/clean-code.jpg",
    url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
  },
  {
    title: "The Pragmatic Programmer: Your journey to mastery",
    image: "../assets/books/pragmatic.jpg",
    url: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
  },
  {
    title: "Refactoring: Improving the Design of Existing Code",
    image: "../assets/books/refactoring.jpg",
    url: "https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599",
  },
  {
    title: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    image: "../assets/books/ddd.jpg",
    url: "https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215",
  },
  {
    title: "Implementing Domain-Driven Design",
    image: "../assets/books/ddd-implement.jpg",
    url: "https://www.amazon.com/Implementing-Domain-Driven-Design-Vaughn-Vernon/dp/0321834577",
  },
  {
    title:
      "Head First Design Patterns: Building Extensible and Maintainable Object-Oriented Software",
    image: "../assets/books/head.jpg",
    url: "https://www.amazon.com/Head-First-Design-Patterns-Object-Oriented/dp/149207800X",
  },
  {
    title: "Test Driven Development: By Example",
    image: "../assets/books/tdd.jpg",
    url: "https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530",
  },
  {
    title:
      "Strategic Monoliths and Microservices: Driving Innovation Using Purposeful Architecture",
    image: "../assets/books/monoliths.jpg",
    url: "https://www.amazon.com/Strategic-Monoliths-Microservices-Addison-Wesley-Signature/dp/0137355467",
  },
  {
    title:
      "Clean Architecture: A Craftsman’s Guide to Software Structure and Design",
    image: "../assets/books/clean.jpg",
    url: "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164",
  },
  {
    title: "Scrum: The Art of Doing Twice the Work in Half the Time",
    image: "../assets/books/scrum.jpg",
    url: "https://www.amazon.com/Scrum-Doing-Twice-Work-Half/dp/038534645X",
  },
  {
    title: "Elegant Objects",
    image: "../assets/books/elegant.jpg",
    url: "https://www.amazon.com/Elegant-Objects-1-Yegor-Bugayenko/dp/1519166915",
  },
  {
    title: "Patterns of Enterprise Application Architecture",
    image: "../assets/books/application.jpg",
    url: "https://www.amazon.com/Patterns-Enterprise-Application-Architecture-Martin/dp/0321127420",
  },
  {
    title: "Node.js Design Patterns",
    image: "../assets/books/node.jpg",
    url: "https://www.nodejsdesignpatterns.com/",
  },
];

function renderBookCards() {
  const container = document.getElementById("book-cards-container");

  books.forEach((book) => {
    const template = `
        <div class="book-card">
          <img src="${book.image}" alt="${book.title}">
          <h3><a href="${book.url}" target="_blank">${book.title}</a></h3>
        </div>
      `;
    container.innerHTML += template;
  });
}

renderBookCards();
