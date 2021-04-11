import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StripeModule } from 'nestjs-stripe';
import { SentryModule } from '@ntegral/nestjs-sentry';

import { CaslModule } from './casl/casl.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { AccountModule } from './account/account.module';
import { LocalConfigModule } from './config/config.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { SentryConfigService } from './config/services/sentry.config';
import { GlobalConfigService } from './config/services/global.config';
import { StripeConfigService } from './config/services/stripe.config';
@Module({
  imports: [
    SentryModule.forRootAsync({
      imports: [LocalConfigModule],
      useFactory: async (localConfigService: SentryConfigService) => ({
        dsn: localConfigService.sentryDsn,
        debug: true,
        environment: 'dev',
        release: 'some_release', // must create a release in sentry.io dashboard
        // logLevel: LogLevel.Debug, //based on sentry.io loglevel //
        logLevel: 2, //based on sentry.io debug loglevel //
      }),
      inject: [SentryConfigService],
    }),
    AccountModule,
    AuthModule,
    CaslModule,
    UserModule,
    PrismaModule,
    AccountModule,
    LocalConfigModule,
    SubscriptionModule,
    GraphQLModule.forRootAsync({
      imports: [LocalConfigModule],
      useFactory: (localConfigService: GlobalConfigService) => ({
        autoSchemaFile: localConfigService.autoSchemaFile,
        cors: localConfigService.corsConfig,
      }),
      inject: [GlobalConfigService],
    }),
    StripeModule.forRootAsync({
      imports: [LocalConfigModule],
      useFactory: (localConfigService: StripeConfigService) => ({
        apiKey: localConfigService.stripeSecretKey,
        apiVersion: localConfigService.stripeApiVersion,
      }),
      inject: [StripeConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
