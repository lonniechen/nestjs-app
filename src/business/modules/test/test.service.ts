import {
    Injectable
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'

import { EntityTest } from '../../entities/test/test.entity'
import { DB_CONN_NAME_MONGO } from '../../../shared/database/mongodb.options'

@Injectable()
export class ApiTestService {

    constructor(
        @InjectRepository(EntityTest, DB_CONN_NAME_MONGO)
        private readonly testRepository: MongoRepository<EntityTest>,
    ) { }

    async createTest() {
        const test = {
            createdTimestamp: new Date(),
            updatedTimestamp: new Date()
        }
        return await this.testRepository.save(test)
    }

    async getTest() {
        return await this.testRepository.find({})
    }

}