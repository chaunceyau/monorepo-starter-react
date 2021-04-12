import { Controller, Post, UseGuards, Body, Get } from '@nestjs/common'
//
import { AccountService } from './account.service'
import { PrismaService } from '../prisma/prisma.service'
import { UpdatePasswordDTO } from './dto/update-password.dto'
import {
  RESTUser,
  ResponseObjectUser,
} from '../common/decorators/user.decorator'
import { AuthenticatedGuard } from '../common/guards/authenticated.guard'
import { Action, CheckPolicies } from '../casl/policy-types'
import { AppAbility } from '../casl/casl-ability.factory'
import { User } from '../user/models/user.model'
import { PoliciesGuard } from '../casl/policy-guard'

@Controller('account')
export class AccountController {
  constructor(
    private accountService: AccountService,
    private prisma: PrismaService
  ) { }

  @Get('hm')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, User))
  fdafds() {
    return "fldmsalfmd"
  }


  @UseGuards(AuthenticatedGuard)
  @Post('changepass')
  async changePassword(
    @Body() body: UpdatePasswordDTO,
    @RESTUser() user: ResponseObjectUser
  ) {
    return this.accountService.changePassword(
      user.id,
      body.oldPassword,
      body.newPassword
    )
  }
}
