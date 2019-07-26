// Dependencies
import { Module } from '@nestjs/common';
import { SampleController } from './sample.controller';

// Services
import { SampleService } from './sample.service';

/**
 * The Sample Module
 *
 * @author Daniel Mejia
 * @Class SampleModule
 */
@Module({
  controllers: [SampleController],
  providers: [SampleService],
})
export class SampleModule {}
