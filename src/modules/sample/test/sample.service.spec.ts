// Dependencies
import { Test, TestingModule } from '@nestjs/testing';

// Services
import { SampleService } from '../sample.service';

// Entities
import { SampleEntity } from '../sample.entity';

/**
 * Service test file for {@link SampleService}
 * 
 * @author Daniel Mejia
 * @File sample.service.spec.ts
 */
describe('SampleService: Test suit', () => {
  let sampleService: SampleService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleService]
    }).compile();

    sampleService = module.get<SampleService>(SampleService);
  });

  it('should get instance fine', () => {
    expect(sampleService).toBeDefined();
  });

  it('should get samples', () => {
    const sampleEntiy = new SampleEntity();
    sampleEntiy.name = 'Hello World';

    const response = sampleService.getSamples();
    expect(response).toEqual([sampleEntiy])
  })
});
