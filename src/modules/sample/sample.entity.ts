import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from "class-validator";

/**
 * Sample entity for Sample table.
 *
 * @author Daniel Mejia
 * @Class SampleEntity
 */
export class SampleEntity {

  /**
   * Samples resource.
   *
   * @type { String }
   */
  public static SAMPLES_RESOURCE: string = 'samples';

  /**
   * The name for the sample.
   *
   * @type { string }
   */
  @IsString({ always: true })
  @IsNotEmpty()
  @ApiModelProperty()
  name: string;
}
