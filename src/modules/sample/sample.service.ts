// Dependencies
import { Injectable } from '@nestjs/common';

// Entities
import { SampleEntity } from './sample.entity';

/**
 * Service for {@link SampleEntity}
 * 
 * @author Daniel Mejia
 * @Class SampleService
 */
@Injectable()
export class SampleService {

  /**
   * Creates an instance of SampleService.
   */
  constructor() { }

  /**
   * Get the samples entities.
   * 
   * @returns { SampleEntity [] } The samples entities.
   */
  getSamples(): SampleEntity[] {
    const sampleEntiy = new SampleEntity();
    sampleEntiy.name = 'Hello World';

    return [sampleEntiy];
  }
}
