import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '99c8a71ff8664332aab9d5f56ca1f58f',
        });
    }
}

export default AppLoader;
