// class Todo {
//   constructor(id, title) {
//     this.id = id;
//     this.title = title;
//     this.isDone = false;
//     this.createdAt = new Date();
//   }
// }
// class TodoList {
//   constructor() {
//     this.todos = [];
//   }

//   add(title) {
//     const id = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1;
//     const todo = new Todo(id, title);
//     this.todos.push(todo);
//   }

//   delete(id) {
//     this.todos = this.todos.filter((todo) => !todo.id == id);
//   }

//   checkedActiveTodo(id) {
//     const todo = this.todos((t) => t.id == id);
//     if (todo) {
//       todo.isDone = !todo.isDone;
//     }
//   }
//   getAllTodos(filter = {}) {
//     if (filter.active === true) {
//       return this.todos.filter((todo) => !todo.isDone);
//     } else if (filter.active === false) {
//       return this.todos.filter((todo) => todo.isDone);
//     } else {
//       return this.todos;
//     }
//   }
// }
// const myList = new TodoList();
// myList.add("nika");
// myList.add("aptsiauri");
// myList.add("React");
// myList.checkedActiveTodo(2);

//2
// class Product {
//   constructor(id, name, price, quantity = 1) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }
// }
// class ShoppingCart {
//   constructor() {
//     this.items = [];
//   }

//   AddToCart(Product) {
//     const exist = this.items.find((item) => item.id === Product.id);
//     if (exist) {
//       exist.quantity += product.quantity;
//     } else {
//       this.items.push(Product);
//     }
//   }
//   RemoveFromCart(id) {
//     this.items = this.items.filter((item) => item.id !== id);
//   }
//   UpdateItem(id, newQuant) {
//     const item = this.items.find((i) => i.id == id);
//     if (item) {
//       quantity = newQuant;
//     }
//   }

//   calculateTotalPrice() {
//     return this.items.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//   }
// }

// const cart = new ShoppingCart();

//3)
// class Book {
//   constructor(id, title, author, year) {
//     this.id = id;
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
// }

// class Library {
//   constructor() {
//     this.books = [];
//   }

//   AddBook() {
//     this.books.push(Book);
//   }

//   RemoveBook(id) {
//     this.books = this.books.filter((i) => i.id !== id);
//   }

//   listBooks(sortBy, order) {
//     let result = [...this.books];

//     if (sortBy) {
//       result.sort((a, b) => {
//         if (a[sortBy] < b[sortBy]) return order === "asc" ? -1 : 1;
//         if (a[sortBy] > b[sortBy]) return order === "asc" ? 1 : -1;
//         return 0;
//       });
//     }

//     return result;
//   }
// }
// const library = new Library();

//4) ContactManager კლასი
// უნდა ჰქონდეს შემდეგი მეთოდები:
// addNewContact() // სახელი, ნომერი, იმეილი დაადეთ ვალიდაცია რომ 2 ერთი და იგივე იმეილის კონტაქტი ვერ უნდა შექმნათ, ვერც ორი ერთი და იგივე ნომერი
// viewAllContacts(), updatePhone(), deleteContact()

class Contact {
  constructor(id, name, phone, email) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

class ContactManager {
  constructor() {
    this.contacts = [];
  }

  AddNewContacts(name, phone, email) {
    const existPhone = this.contacts.some((i) => i.email === email);
    const existEmail = this.contacts.some((i) => i.phone === phone);

    if (existEmail) {
      console.log("მსგავსი ემაილი არსებობს უკვე");
    }

    if (existPhone) {
      console.log("მსგავსი ნომერი არსებობს უკვე");
    }

    const id = this.contacts.length
      ? this.contacts[this.contacts.length - 1].id + 1
      : 1;
    const contact = new Contact(id, name, phone, email);
    this.contacts.push(contact);
  }
  AllContacts() {
    return this.contacts;
  }
  DeleteContact(id) {
    const contact = this.contacts.find((c) => c.id === id);
    this.contacts = this.contacts.filter((c) => c.id !== id); //დარჩენილები
    console.log(`კონტაქტი წაშლილია ${contact}`);
  }
  updatePhone(id, newPhone) {
    const contact = this.contacts.find((c) => c.id === id);
    if (!contact) return console.log(`ვერ მოიძებნა ID ${id}`);
    if (this.contacts.some((c) => c.phone === newPhone && c.id !== id))
      contact.phone = newPhone;
    return console.log(` უკვე არსებობს`);
  }
}
const manager = new ContactManager();
