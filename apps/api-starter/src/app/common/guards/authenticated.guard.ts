import { Reflector } from '@nestjs/core';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler()
    );
    if (isPublic) {
      return true;
    }
    if (context.getType() === 'http') {
      const request = context.switchToHttp().getRequest();
      console.log({ requestUser: request.user });
      return request.isAuthenticated();
    } else if (context.getType() === 'rpc') {
      // do something that is only important in the context of Microservice requests
    } else if (context.getType<GqlContextType>() === 'graphql') {
      const ctx = GqlExecutionContext.create(context);
      const req = ctx.getContext().req;

      return req?.user;
    }
  }
}
