import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';

import { Account as AccountModel } from 'src/account/account.model';
import { AccountService } from 'src/account/account.service';
import { CreateAccountDto } from 'src/account/account.dto';

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) { }

    @Get()
    async findAll(): Promise<AccountModel[]> {
        return await this.accountService.findAll();
    }

    @Post()
    async create(@Body() account: CreateAccountDto): Promise<AccountModel> {
        return await this.accountService.create(account);
    }
}