class Store {

    books = {data: []};

    charts = {data: []};

    events = {data: []};

    reviews = {data: []};

    articles = {data: []};

    getData(type = '') {
        if (!this[type]) throw console.error('ERROR DATA TYPE');
        return this[type];
    };

    setData(type, data) {
        if (!this[type]) throw console.error('ERROR DATA TYPE');
        this[type] = data;
    };

    getAll() {
        const array = ['books', 'charts', 'events', 'reviews', 'articles'];
        return array.flatMap(item =>
            this[item].data.map(({title, id}) => {
                return {
                    title,
                    id,
                    entity: item
                }
            })
        )
    };
}

export default new Store();