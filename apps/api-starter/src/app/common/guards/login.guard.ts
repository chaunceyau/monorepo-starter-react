import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class LoginGuard extends AuthGuard('local') implements CanActivate {
  async canActivate(context: ExecutionContext) {
    console.log("HERLMLM")
    console.log({context})
    const result = (await super.canActivate(context)) as boolean
    const request = context.switchToHttp().getRequest()
    await super.logIn(request)
    return result
  }
}
