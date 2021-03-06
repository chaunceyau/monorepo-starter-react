import Stripe from 'stripe'
import { InjectStripe } from 'nestjs-stripe'
import { UseGuards, NotFoundException } from '@nestjs/common'
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
//
import { User } from './models/user.model'
import { UserService } from './user.service'
import { GraphQLUser } from '../common/decorators/user.decorator'
import { CreatePaymentInput } from './models/create-payment.input'
import { AuthenticatedGuard } from '../common/guards/authenticated.guard'

@Resolver(_of => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    @InjectStripe() private readonly stripeClient: Stripe
  ) {}

  @UseGuards(AuthenticatedGuard)
  @Query(_returns => User)
  async user(@Args('id') id: string) {
    return this.userService.findUniqueById(id)
  }

  @UseGuards(AuthenticatedGuard)
  @Query(_returns => User)
  async currentUser(@GraphQLUser() user) {
    try {
      const currentUser = await this.userService.findUniqueById(user.id)
      return currentUser
    } catch (err) {
      throw new NotFoundException('Not user found with this ID.')
    }
  }

  // @Mutation(_returns => String)
  // @UseGuards(AuthenticatedGuard)
  // async createPaymentMethod(
  //   @GraphQLUser() user,
  //   @Args('input') input: CreatePaymentInput
  // ) {

  //   this.stripeClient.paymentMethods.create({

  //   })
  //   return ':)'
  // }
}
