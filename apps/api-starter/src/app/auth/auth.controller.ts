import {
  Controller,
  Post,
  Request,
  Get,
  UseGuards,
  Body,
} from '@nestjs/common';
//
import { User } from '../user/models/user.model';
import { UserService } from '../user/user.service';
import { AccountService } from '../account/account.service';
import { CreateAccountDTO } from '../account/dto/create-account.dto';
import { AuthenticatedGuard } from '../common/guards/authenticated.guard';
// import * as passport from 'passport';
import { LoginGuard } from '../common/guards/login.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private accountService: AccountService
  ) {}

  @UseGuards(AuthenticatedGuard)
  @Get('whoami')
  async whoami(@Request() req) {
    // console.log('req->user', req)
    // console.log('req.cookies', req.cookies)
    // console.log('req.cookies', req.signedCookies)
    return this.userService.findUniqueById(req.user.id);
  }

  @UseGuards(LoginGuard)
  @Post('login')
  // , @Res({ passthrough: true }) res: Response
  login() {
    return { success: true };
    // return passport.authenticate('local', {
    //   failureRedirect: '/lofodso',
    //   successRedirect: 'google.com',
    //   session: true,
    // });
  }

  @Post('register')
  async register(@Body() { email, password }: CreateAccountDTO): Promise<User> {
    return await this.accountService.createAccount(email, password);
  }

  @Post('logout')
  logout(@Request() req) {
    req.logout();
  }
}
