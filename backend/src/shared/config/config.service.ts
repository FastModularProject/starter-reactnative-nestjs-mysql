import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { environment as environmentDev } from '../../environments/environment.dev';
import { environment as environmentStaging } from '../../environments/environment.staging';
import { environment as environmentProd } from '../../environments/environment.prod';

@Injectable()
export class ConfigService {
    public environment;

    constructor() {
        Logger.log(`Configuration : ${process.env.ENV || 'DEV'}`);

        switch (process.env.ENV) {
            case 'PROD':
                this.environment = environmentProd;
                break;
            case 'STAGING':
                this.environment = environmentStaging;
                break;
            default:
                this.environment = environmentDev;
                break;
        }
    }
}
