import { Module } from '@nestjs/common';
import { HelloCommander } from './hello-commander';

@Module({
  providers: [HelloCommander],
  exports: [HelloCommander],
})
export class HelloCommanderModule {}
