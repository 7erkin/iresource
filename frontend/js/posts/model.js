class Model {
    constructor() {
        this._originalDeals = [
            {
                id: 3,
                name: "Polys Gold",
                datePublish: "20.12.2018",
                like: 10,
                comment: 10,
                watcher: 10000,
                image: 'https://vanin-invest.com/wp-content/uploads/2016/09/Polyus.jpg'
            },
            {
                id: 4,
                name: "Aeroflot",
                datePublish: "20.12.2018",
                like: 100,
                comment: 30,
                watcher: 10000,
                image: 'https://regnum.ru/uploads/pictures/news/2017/10/11/regnum_picture_15077158461288890_big.jpg'
            },
            {
                id: 5,
                name: "Phosagro",
                datePublish: "20.12.2018",
                like: 260,
                comment: 120,
                watcher: 10000,
                image: 'http://toplogos.ru/images/logo-phosagro.png'
            },
            {
                id: 2,
                name: "Mechel",
                datePublish: "20.12.2018",
                like: 30,
                comment: 210,
                watcher: 10000,
                image: 'http://cdn.forbes.ru/files/presets/900_566/profile/magnit3.jpg__1506495387__73040__vid422245e.jpg'
            },
            {
                id: 1,
                name: "Apple",
                datePublish: "20.12.2018",
                like: 20,
                comment: 10,
                watcher: 10000,
                image: 'https://www.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg'
            },
            {
                id: 3,
                name: "Polys Gold",
                datePublish: "20.12.2018",
                like: 10,
                comment: 10,
                watcher: 10000,
                image: 'https://vanin-invest.com/wp-content/uploads/2016/09/Polyus.jpg'
            },
            {
                id: 4,
                name: "Aeroflot",
                datePublish: "20.12.2018",
                like: 100,
                comment: 30,
                watcher: 10000,
                image: 'https://regnum.ru/uploads/pictures/news/2017/10/11/regnum_picture_15077158461288890_big.jpg'
            },
            {
                id: 5,
                name: "Phosagro",
                datePublish: "20.12.2018",
                like: 260,
                comment: 120,
                watcher: 10000,
                image: 'http://toplogos.ru/images/logo-phosagro.png'
            },
            {
                id: 2,
                name: "Mechel",
                datePublish: "20.12.2018",
                like: 30,
                comment: 210,
                watcher: 10000,
                image: 'http://cdn.forbes.ru/files/presets/900_566/profile/magnit3.jpg__1506495387__73040__vid422245e.jpg'
            },
            {
                id: 1,
                name: "Apple",
                datePublish: "20.12.2018",
                like: 20,
                comment: 10,
                watcher: 10000,
                image: 'https://www.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg'
            }
        ];
        this._transformedDeals = this._originalDeals.slice();
        this._sortStrategy;
        this._searchStrategy;
        this._subscribers = new Set();
    }
    addSubscriber(subscriber){
        this._subscribers.add(subscriber);
    }
    removeSubscriber(subscriber){
        this._subscribers.delete(subscriber);
    }
    notify(){
        for(let subscriber of this._subscribers)
            subscriber.update(this._transformedDeals);
    }
    setSortStrategy(sortStrategy) {
        this._sortStrategy = sortStrategy;
    }
    setSearchStrategy(searchStrategy) {
        this._searchStrategy = searchStrategy;
    }
    sort(){
        this._sortStrategy.sort(this._transformedDeals);
        this.notify(this._transformedDeals);
    }
    search(){
        this._transformedDeals = this._searchStrategy.search(this._originalDeals);
        this._sortStrategy.sort(this._transformedDeals);
        this.notify();
    }
}

module.exports = Model;