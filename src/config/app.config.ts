// Dependencies
import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

// App information
const { npm_package_name: appName, npm_package_apiVersion: apiVersion, npm_package_description: appDescription } = process.env;

/**
 * Class to configure the application.
 *
 * @class AppConfig
 */
export class AppConfig {

  /**
   * The application to configure.
   * 
   * @type { INestApplication }
   */
  static app: INestApplication;

  /**
   * App base url for the API.
   * 
   * @param { string }
   */
  static appBaseUrl = `api/${apiVersion}`;

  /**
   * Url resource to serve the documentation
   * 
   * @param { string }
   */
  static documentationUrl: string = 'docs';

  /**
   * Configure the application with the defaul parameters.
   * 
   * @param { INestApplication} app The application to configure.
   */
  static configure(app: INestApplication): void {
    this.app = app;
    this.app.setGlobalPrefix(this.appBaseUrl)
    this.configureSwagger();
  }

  /**
  * Configure the swagger documentation for the app.
  */
  private static configureSwagger(): void {
    const options = new DocumentBuilder()
      .setTitle(appName)
      .setDescription(appDescription)
      .setVersion(apiVersion)
      .setBasePath(this.appBaseUrl)
      .setSchemes('https', 'http')
      .build();
    const document = SwaggerModule.createDocument(this.app, options);
    SwaggerModule.setup(`${this.appBaseUrl}/${this.documentationUrl}`, this.app, document);
  }
}
