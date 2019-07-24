// Dependencies
import { Controller, Get, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

// Services
import { SampleService } from './sample.service';

// Entities
import { SampleEntity } from './sample.entity';

/**
 * Controller for {@link SampleEntity}
 * 
 * @author Daniel Mejia
 * @Class SampleController
 */
@UseInterceptors(ClassSerializerInterceptor)
@ApiUseTags(SampleEntity.SAMPLES_RESOURCE)
@Controller(SampleEntity.SAMPLES_RESOURCE)
export class SampleController {

  /**
   * Creates an instance of Sample Controller.
   *
   * @param { SampleService } sampleService The test service to manipulate Test entity.
   */
  constructor(public readonly service: SampleService) { }

  /**
   * Get the samples entities.
   * 
   * @returns { SampleEntity [] } The samples entities.
   */
  @Get()
  getSamples(): SampleEntity[] {
    return this.service.getSamples();
  }
}
