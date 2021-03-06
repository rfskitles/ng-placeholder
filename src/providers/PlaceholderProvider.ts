import { PlaceholderConfigService } from './PlaceholderConfigService';

export class PlaceholderProvider implements Placeholder.IPlaceholderConfigProvider {

    private configs: Array<Placeholder.IConfigModel>;
    private defaultConfig: Placeholder.IConfigModel;
    private active: boolean = true;

    constructor() {
        this.configs = new Array();
        this.defaultConfig = {
            template_id: 'default',
            template_html: '<p>Loading...</p>',
            template_repeats: 1
        };
    }

    addConfig(config: Placeholder.IConfigModel): void {
        this.configs.push(config);
    }

    setConfigs(configs: Array<Placeholder.IConfigModel>): void {
        this.configs = this.configs.concat(configs);
    }

    setDefaultConfig(defaultConfig: Placeholder.IConfigModel): void {
        this.defaultConfig = defaultConfig;
    }

    enable(): void {
        this.active = true;
    }

    disable(): void {
        this.active = false;
    }

    $get(): Placeholder.IPlaceholderConfigService {
        return new PlaceholderConfigService(this.configs, this.defaultConfig, this.active);
    }
}