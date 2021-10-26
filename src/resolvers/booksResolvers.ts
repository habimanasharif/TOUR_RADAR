import {Book,}  from "../controllers";

const booksResolvers = {
  Query: {
    books: () => Book.all(),
  },
  Mutation:{
   addBook:(parent:any,args:any,ctx:any)=>Book.addBook(parent, args,ctx),
  }
};

export{ 
  booksResolvers,
}
