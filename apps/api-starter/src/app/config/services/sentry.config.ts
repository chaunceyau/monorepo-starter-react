import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SentryConfigService {
  constructor(private configService: ConfigService) {}

  get sentryDsn() {
    return this.configService.get('sentry.SENTRY_DSN');
  }
}
