import { join } from 'path';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GlobalConfigService {
  constructor(private configService: ConfigService) {}

  /**
   * Auto-generated GraphQL Schema from annotations
   */
  get autoSchemaFile() {
    return join(process.cwd(), 'schema.graphql');
  }

  /**
   * Cors config for Apollo Server & Express
   * note: used in both places
   */
  get corsConfig() {
    return {
      origin: this.frontendURL,
      credentials: true,
    };
  }

  /**
   * @returns e.g. http://localhost:3000
   */
  private get frontendURL() {
    return this.configService.get('common.FRONTEND_URL');
  }
}
