import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class UsersController {
    constructor(private usersService: UsersService) {}

    @ApiTags('Users')
        @Get('/users')
        getUsers() {
           return this.usersService.getUsers();
   }

   @Post('/users')
   @ApiTags('Users')
   createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user)
   }
}
