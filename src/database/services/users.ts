import Users from '../modals/users';

class UserService {
    static async signUp(newUser:any){
        try {
            return await Users.create(newUser);
        }catch(error){
            throw error
        }
    }
   static async findUser(data:any)
   {
       try {
          return await Users.findOne(data) ;
       } catch (error) {
           throw error
       }
   }
}

export {UserService}