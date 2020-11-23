import { NestFactory } from '@nestjs/core';

import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {
    const env = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'dev'
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule.forRoot(env),
        new FastifyAdapter()
    );

    const port = parseInt(process.env.PORT) || 8080;
    await app.listen(port, '0.0.0.0');
}

bootstrap();
