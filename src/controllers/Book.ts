import { books } from "../data";
import {UserService} from "../database/services/users"
import out from '../helpers/response'

 class Book {
  static all() {
    try {
      UserService.signUp({"firstname":"sharif","lastname":"Habimana"})
      return out('response', 201, 'Book fetched successfully', books,null);
    } catch (error) {
      
    }
    
  }

  static addBook(parent:any, {title,author}:{title:any,author:any},ctx:any){
    let newBook = {
        
     title,
     author
    }

  
    
    return newBook
}


}
export {Book}

