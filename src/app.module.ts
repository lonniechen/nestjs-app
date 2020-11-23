import {
    DynamicModule
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'

export class AppModule {
    static forRoot(env: string): DynamicModule {
        return {
            module: AppModule,
            imports: [
                ConfigModule.forRoot({
                    envFilePath: `./config/${env}.env`,
                    isGlobal: true,
                }),
            ],
            controllers: [
                AppController
            ]
        }
    }
}
