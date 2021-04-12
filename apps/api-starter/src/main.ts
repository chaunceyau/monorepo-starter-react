import { createClient } from 'redis';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import * as helmet from 'helmet';
import * as passport from 'passport';
import session from 'express-session';
import connectRedis from 'connect-redis';

import { AppModule } from './app/app.module';
import { GlobalConfigService } from './app/config/services/global.config';
import { CookiesConfigService } from './app/config/services/cookies.config';

async function bootstrap() {
  const RedisStore = connectRedis(session);
  const redisClient = createClient();

  // 
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // 
  const globalConfigService = app.get(GlobalConfigService);
  const cookiesConfigService = app.get(CookiesConfigService);
  
  app.enableCors(globalConfigService.corsConfig);
  app.use(helmet());


  // app.use((req, res, next) => {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   next()
  // })

  if (!globalConfigService.inDevelopment) {
    // @ts-ignore
    app.set('trust proxy', 1) // trust first proxy
  }

  // app.use(function (req, res, next) {
  //   if (req.headers['x-arr-ssl'] && !req.headers['x-forwarded-proto']) {
  //     req.headers['x-forwarded-proto'] = 'https'
  //   }
  //   return next()
  // })

  // console.log()

  app.use(
    session({
      name: 'sessionid',
      secret: cookiesConfigService.cookieSigningKey,
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false,
        httpOnly: false,
        domain: 'localhost',
        maxAge: 60 * 60 * 60 * 60,
      },
      store: new RedisStore({ client: redisClient }),
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  // TODO: instead of csurf, let's enforce JSON only communication?
  // 👀 potential problem - multipart form data?
  // https://github.com/pillarjs/understanding-csrf
  // app.use(csurf())


  app.useGlobalPipes(new ValidationPipe());

  await app.listen(globalConfigService.port, () => {
    Logger.log('Listening at http://localhost:' + globalConfigService.port + '/' + globalPrefix);
  });
}

bootstrap();
