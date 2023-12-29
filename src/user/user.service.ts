import { Injectable } from '@nestjs/common'
import { user } from './interfaces/user'
import userData from '../database/users'
import { createUserDto } from './dto/create-user'
import { updateUserDto } from './dto/update-user'

@Injectable()
export class UserService {
    getUsers = (): user[] => {
        return userData
    }

    getUser = (id: number): user | undefined => {
        return userData.find(user => id === user.id)
    }

    createUser = (userObject: createUserDto): user | undefined => {
        const length = userData.push({ id: userData.length + 1, ...userObject })
        return userData.find(user => user.id === length)
    }

    updateUser = (id: number, userObject: updateUserDto): user | undefined => {
        const user = userData.forEach(user => {
            if (user.id === id) {
                (user as any) = { id: userData.length + 1, ...userObject }
            }
        })
        return userData.find(user => id === user.id)
    }

    deleteUser = (id: number): void => {
        userData.splice(id - 1, 1)
    }
}
