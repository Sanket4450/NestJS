import { Controller, Get, Post, Put, Delete, HttpCode, Param, Body } from '@nestjs/common'
import { UserService } from './user.service'
import { user } from './interfaces/user'
import { createUserDto } from './dto/create-user'
import { updateUserDto } from './dto/update-user'

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    @HttpCode(200)
    getUsers(): user[] {
        return this.userService.getUsers()
    }

    @Get(':id')
    @HttpCode(200)
    getUser(@Param() params: { id: string }): user | undefined {
        return this.userService.getUser(parseInt(params.id))
    }

    @Post()
    @HttpCode(200)
    createUser(@Body() userObject: createUserDto): user | undefined {
        return this.userService.createUser(userObject)
    }

    @Put(':id')
    @HttpCode(200)
    updateUser(@Param() params: { id: string }, userObject: updateUserDto): user | undefined {
        return this.userService.updateUser(parseInt(params.id), userObject)
    }

    @Delete(':id')
    @HttpCode(200)
    deleteUser(@Param() params: { id: string }): void {
        this.userService.deleteUser(parseInt(params.id))
    }
}
