const Book = require('./model/book');
const User = require('./model/user');

class FakeDB{
    constructor(){
        this.books = [{
            id: "1",
            title: "Full stack angular for java developers",
            edition: 4,
            author: "Ambani Matsedu",
            year: 2019,
            category: "Programming",
            isbn: 9793161484100,
            price: 500,
            image: 'https://images-na.ssl-images-amazon.com/images/I/41AYQnOFctL._SX348_BO1,204,203,200_.jpg',
            negotiable: true,
            previousOwners: 2,
            university: "UNISA",
            city: "Johannesburg",
            street: "28 Pioneer Ave, Florida Park"
          },
          {
            id: "2",
            title: "Introduction to Business Management",
            edition: 4,
            author: "Thembi",
            year: 2003,
            category: "Business",
            isbn: 9795487965523,
            price: 350,
            image: 'https://media.loot.co.za/static/gallery/details/d/h/x/dhxm-3214-g520/detail.dhxm-3214-g520.0.photo.0190412801.jpg',
            negotiable: false,
            previousOwners: 0,
            university: "UJ",
            city: "Johannesburg",
            street: "Kingsway Ave"
          },
          {
            id: "3",
            title: "Human Interaction with computers II",
            edition: 4,
            author: "John",
            year: 2010,
            category: "Business",
            isbn: 97954888882,
            price: 600,
            image: 'https://images-na.ssl-images-amazon.com/images/I/51avUtKUdtL._SX381_BO1,204,203,200_.jpg',
            negotiable: false,
            previousOwners: 4,
            university: "Wits",
            city: "Johannesburg",
            street: "Jan Smuts Ave"
          },
          {
            id: "4",
            title: "Introduction Human Resource",
            edition: 2,
            author: "Simphiwe",
            year: 2012,
            category: "Human Resources",
            isbn: 9795411111111,
            price: 600,
            image: 'https://www.oxford.co.za/covers/9780199059829.jpg',
            negotiable: true,
            previousOwners: 2,
            university: "UP",
            city: "Pretoria",
            street: "University Rd"
          }];

          this.users = [{
            username: "Test User",
            email: "test@gmail.com",
            password: "testtest"
        }];
    }

    async cleanDB(){
      await User.remove({});
      await Book.remove({});
    }

    pushBookToDB(){
      const user = new User(this.users[0]);

        this.books.forEach((book) => {
            const newBook = new Book(book);
            newBook.user = user;

            user.books.push(newBook);

            newBook.save();
        });

        user.save();
    }

    async seedDB(){
      await this.cleanDB();
        this.pushBookToDB();
    }
}

module.exports = FakeDB;