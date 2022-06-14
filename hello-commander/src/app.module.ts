import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloCommanderModule } from './hello-commander/hello-commander.module';

@Module({
  imports: [HelloCommanderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
