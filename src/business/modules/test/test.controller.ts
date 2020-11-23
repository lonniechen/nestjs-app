import {
    Controller,
    Get,
    Post,
} from '@nestjs/common';

import { ApiTestService } from './test.service'

@Controller('/test')
export class ApiTestController {
    constructor(
        private readonly testService: ApiTestService
    ) { }

    @Post()
    async createTest() {
        return await this.testService.createTest()
    }

    @Get()
    async getTest() {
        return await this.testService.getTest()
    }
}
