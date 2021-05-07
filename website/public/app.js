let vm = new Vue({
    el: '#app',
    data: {
        books: [],
        authors: [],
        genres: [],
        testMessage: 'This is a test'
    },
    methods: {
        getData: function() {
            axios.get('public/data.json')
            .then(function (response) {
                console.log("got data");
                this.testMessage = "loaded";
                console.log(response.data.books);
                this.books = response.data.books;
                this.authors = response.data.authors;
                this.genres = response.data.genres;
                
                console.log("assigned data");

            }).catch(function (error) {
                console.log("Exception caught");
                console.log(error);
            })
            .then(function () {
                this.testMessage = "Completed!";
            });
        }
    },
    mounted: function() {
        console.log("Mounted Event Started");
        this.getData();
        console.log("Mounted Event Ended");
   }
})