// Dependencies
import { Test, TestingModule } from '@nestjs/testing';
import { SampleController } from '../sample.controller';

// Services
import { SampleService } from '../sample.service';

// Entities
import { SampleEntity } from './../sample.entity';

/**
 * Controller test file for {@link SampleController}
 * 
 * @author Daniel Mejia
 * @File sample.controller.spec.ts
 */
describe('SampleController: Test suit', () => {
  let sampleController: SampleController;
  let mockSampleService: SampleService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleController],
      providers: [SampleService]
    }).compile();
    sampleController = module.get<SampleController>(SampleController);
    mockSampleService = module.get(SampleService);
  });

  it('should get instance fine', () => {
    expect(sampleController).toBeTruthy();
  });

  it('should get samples', () => {
    const expectedResponse = [new SampleEntity()]
    jest.spyOn(mockSampleService, 'getSamples').mockReturnValue(expectedResponse);

    const response = sampleController.getSamples();
    expect(response).toEqual(expectedResponse)
    expect(mockSampleService.getSamples).toHaveBeenCalled();
  })
});
