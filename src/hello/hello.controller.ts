import { Controller, Get, HttpCode, Param, ParseBoolPipe, Req, Res, Query, UseGuards } from '@nestjs/common';
import { query, Request, Response } from 'express';
import { ValidateuserPipe } from './validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url)
        response.status(200).json({
            message: 'hello world',
        });
    }

    @Get('new')
    @HttpCode(201)
    somethingNew() {
        return 'Something new'
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 not found'
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
      return '404 not found'
    } 

    @Get('ticket:num')
    getNumber(@Param('num', ParseBoolPipe) num: number) {
        console.log(typeof num)
        return num + 14;
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof status)
        return status;
    }
    
    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}) {
        console.log(typeof query.age)
        console.log(typeof query.name)
        return `hello ${query.name}, you are ${query.age} years old`;
    }
    
    
}
