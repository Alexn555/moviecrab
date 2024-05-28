export class API {
    apiKey: string = '';
    locale: string = '';

    constructor() {
        this.apiKey = '67aeed398efbb2e1a3d33ea43395c16f';
        this.locale = 'en-US';
    }

    getApiKey() {
        return this.apiKey;
    }

    getLocale() {
        return this.locale;
    }
}