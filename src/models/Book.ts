import { books } from "../data";
import {UserService} from "../database/services/users"

 class Book {
  static all() {
    UserService.signUp({"firstname":"sharif","lastname":"Habimana"})
    return books;
  }
}
export {Book}

