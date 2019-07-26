// Dependencies
import { Module } from '@nestjs/common';
import { SampleModule } from './sample/sample.module';

/**
 * App Module.
 *
 * @author Daniel Mejia
 * @Class AppModule
 */
@Module({
  imports: [SampleModule]
})
export class AppModule {}
