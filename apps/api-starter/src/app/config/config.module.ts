import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as Joi from '@hapi/joi'
//
import { LocalConfigService } from './config.service'
import common from './namespaces/common'
import cookies from './namespaces/cookies'
import stripe from './namespaces/stripe'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [common, cookies, stripe],
      validationSchema: Joi.object({
        PORT: Joi.number().default(5000).required(),
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        //
        DATABASE_URL: Joi.string().required(),
        FRONTEND_URL: Joi.string().required(),
        // COOKIES
        COOKIE_SIGNING_SECRET: Joi.string().required(),
        // STRIPE
        STRIPE_SECRET_KEY: Joi.string().required(),
        STRIPE_SUBSCRIPTION_PRODUCT_ID: Joi.string().required(),
        STRIPE_SUBSCRIPTION_MONTHLY_PRICE_ID: Joi.string().required(),
        STRIPE_SUBSCRIPTION_ANNUAL_PRICE_ID: Joi.string().required(),
        STRIPE_BILLING_PORTAL_REDIRECT_URL: Joi.string().required(),
        STRIPE_CHECKOUT_SUCCESS_REDIRECT_URL: Joi.string().required(),
        STRIPE_CHECKOUT_CANCEL_REDIRECT_URL: Joi.string().required(),
        //
      }),
    }),
  ],
  providers: [LocalConfigService],
  exports: [LocalConfigService],
})
export class LocalConfigModule {}
