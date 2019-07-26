// Dependencies
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { classToPlain } from 'class-transformer';

// Modules
import { SampleModule } from '../../src/modules/sample/sample.module';

// Services
import { SampleService } from './../../src/modules/sample/sample.service';

// Entities
import { SampleEntity } from '../../src/modules/sample/sample.entity';

/**
 * Service test file for {@link SampleModule}
 * 
 * @author Daniel Mejia
 * @File sample.e2e-spec.ts
 */
describe('AppController (e2e)', () => {
  let app: INestApplication;
  let mockSampleService: SampleService;
  const sampleResource = `/${SampleEntity.SAMPLES_RESOURCE}`;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [SampleModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    mockSampleService = moduleFixture.get(SampleService);
    await app.init();
  });

  it(`${sampleResource} (GET) Samples`, async () => {
    const expectedResult = [new SampleEntity()];
    jest.spyOn(mockSampleService, 'getSamples').mockReturnValue(expectedResult);

    await request(app.getHttpServer())
      .get(sampleResource)
      .expect(200)
      .expect(classToPlain(expectedResult));
    expect(mockSampleService.getSamples).toHaveBeenCalled();
  });
});
