import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EntityTest } from '../../entities/test/test.entity';
import { ApiTestController } from './test.controller';
import { ApiTestService } from './test.service';
import { DB_CONN_NAME_MONGO } from '../../../shared/database/mongodb.options'

@Module({
    controllers: [
        ApiTestController
    ],
    providers: [
        ApiTestService
    ],
    imports: [
        TypeOrmModule.forFeature(
            [
                EntityTest
            ],
            DB_CONN_NAME_MONGO
        )
    ]
})
export class ApiTestModule { }
