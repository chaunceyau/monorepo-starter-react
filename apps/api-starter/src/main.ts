import { createClient } from 'redis'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'

import * as helmet from 'helmet'
import * as passport from 'passport'
import * as session from 'express-session'
import * as connectRedis from 'connect-redis'

import { AppModule } from './app/app.module'
import { LocalConfigService } from './app/config/config.service'

async function bootstrap() {
  const RedisStore = connectRedis(session)
  const redisClient = createClient()

  const app = await NestFactory.create(AppModule)
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  const port = process.env.PORT || 3333

  const configService = app.get(LocalConfigService)

  app.use(helmet())

  app.enableCors(configService.corsConfig)

  app.use(
    session({
      name: 'sessionid',
      secret: configService.cookieSigningKey,
      resave: false,
      saveUninitialized: false,
      cookie: configService.cookieOptions,
      store: new RedisStore({ client: redisClient }),
    })
  )
  // TODO: instead of csurf, let's enforce JSON only communication?
  // 👀 potential problem - multipart form data?
  // https://github.com/pillarjs/understanding-csrf
  // app.use(csurf())

  app.use(passport.initialize())
  app.use(passport.session())

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix)
  })
}

bootstrap()
