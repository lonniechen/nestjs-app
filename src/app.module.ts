import {
    DynamicModule
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { ApiTestModule } from './business/modules/test/test.module'
import {
    DB_CONN_NAME_MONGO,
    MongodbOptions
} from './shared/database/mongodb.options';

export class AppModule {
    static forRoot(env: string): DynamicModule {
        return {
            module: AppModule,

            imports: [
                ConfigModule.forRoot({
                    envFilePath: `./config/${env}.env`,
                    isGlobal: true,
                }),

                TypeOrmModule.forRootAsync({
                    name: DB_CONN_NAME_MONGO,
                    useFactory: () => {
                        const mongodbOptions = new MongodbOptions(
                            `${__dirname}/business/entities/**/*`
                        );
                        return mongodbOptions.createTypeOrmOptions();
                    },
                }),

                ApiTestModule,
            ],

            controllers: [
                AppController
            ]
        }
    }
}
