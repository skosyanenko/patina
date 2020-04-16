class Store {

    books = {data: []};

    charts = [];

    events = [];

    reviews = [];

    news = [];

    getData(type = '') {
        if (!this[type]) throw console.error('ERROR DATA TYPE');
        return this[type];
    }

    setData(type, data) {
        if (!this[type]) throw console.error('ERROR DATA TYPE');
        this[type] = data;
    }
}

export default new Store();