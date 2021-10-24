import Users from '../modals/users';

class UserService {
    static async signUp(newUser:any){
        try {
            return await Users.create(newUser);
        }catch(error){
            throw error
        }
    }
}

export {UserService}