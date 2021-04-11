import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CookiesConfigService {
  constructor(private configService: ConfigService) {}

  /**
   * @returns randomly generated string
   */
  get cookieSigningKey() {
    return this.configService.get('cookies.COOKIE_SIGNING_SECRET');
  }

  /**
   * @returns e.g. 1000 * 60 * 60 * 30 * 24
   */
  get cookieMaxAge() {
    return this.configService.get('cookies.COOKIE_MAX_AGE');
  }

  /**
   *
   */
  get cookieOptions() {
    const inDevelopment =
      this.configService.get('common.NODE_ENV').toLowerCase() !== 'production';

    if (inDevelopment)
      return {
        secure: false,
        httpOnly: false,
        maxAge: this.cookieMaxAge,
      };

    return {
      secure: true,
      httpOnly: true,
      sameSite: 'lax',
      maxAge: this.cookieMaxAge,
    };
  }
}
