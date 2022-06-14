import { NestFactory } from '@nestjs/core';
import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module';
import { HelloCommanderModule } from './hello-commander/hello-commander.module';

async function bootstrap() {
  await CommandFactory.run(HelloCommanderModule);
}
bootstrap();
