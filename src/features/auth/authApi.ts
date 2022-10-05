import {IUser} from './authSlice'

interface IUserList {
    [login: string]: string
}

const userList: IUserList = {
    'Vasya': 'qwerty123',
    'Petya': 'qwerty321'
}

export function signIn(user: IUser) {
    return new Promise<{ data: IUser }>((resolve, reject) =>{
        const {password, ...newUser } = user
        if(userList[user.login] === user.password) {
            setTimeout(() => resolve({ data: {...newUser, id: 2} }), 500)
        } else {
            setTimeout(() => reject("User is not found"), 500)
        }
    });
}