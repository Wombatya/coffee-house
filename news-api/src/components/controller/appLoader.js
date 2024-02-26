import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '376872fc3c11491db7527f5c0397e7bf', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
