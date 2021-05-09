Vue.component('book-widget', {
    props: ['book'],
    template: `
      <div class="book-widget">
        <div>
            <h3 :title="book.title">{{ book.title }}</h3>
            <p>{{ book.author.firstname}} {{ book.author.lastname}}</p>
        </div>
        <div class="float-left">
            <p class="object-left=top" :title="book.title"><img src="/public/imgs/book-cover-default.jpg" /></p>
        </div>
        <div class="float-right m-2">
            £{{ book.price }}<br/>
            <button class='buy-button' v-on:click="$emit('buy-book', book)">Buy</button><br/>
        </div>
        <div class="clear-both bg-blue-200">
            <span v-for="genre in book.genres" v-bind:genre="genre" class="genre-tag">{{ genre }} </span>
        </div>
      </div>
    `
  });

  Vue.component('shopping-basket-widget', {
    props: ['shoppingbasket'],
    template: `
        <div >
            <p>
            Items: {{ shoppingbasket.items.length }}
            Total: £{{ shoppingbasket.total }}
            <button v-on:click="$emit('clear-basket')">Clear</button>
            </p>
        </div>
    `
  });

  Vue.component('authors-widget', {
    props: ['authors'],
    template: `
        <div>
            <p v-for="item in authors" >{{ item.author.firstname }} {{ item.author.lastname }}</p>
        </div>
    `
  });


let vm = new Vue({
    el: '#app',
    data: {
        books: [],
        authors: [],
        genres: [],
        testMessage: 'This is a test',
        shoppingbasket: {
            items: [],
            total: 0
        }
    },
    methods: {
        getData: function() {
            let self = this;

            axios.get('public/data.json')
            .then(function (response) {
                console.log(response.data.books);
                self.books = response.data.books;
                self.authors = response.data.authors;
                self.genres = response.data.genres;
            }).catch(function (error) {
                console.log("Exception caught");
                console.log(error);
            })
            .then(function () {
                
            });
        },
        onBuyBook: function(obj) {
            let item = {};
            item.book = obj;
            item.quantity = 1;

            this.shoppingbasket.total = this.shoppingbasket.total + obj.price;

            this.shoppingbasket.items.push(obj);
            console.log("added to shopping basket");
        },
        onClearBasket: function() {
            this.shoppingbasket.items = [];
            this.shoppingbasket.total = 0;
            console.log("Clear Shopping basket");
        }
    },
    mounted: function() {
        this.getData();
    },
    computed: {
        sortedAuthors: function() {
            return this.authors.sort((a,b) => {
                if(a.lastname < b.lastname) return -1;
                if(a.lastname > b.lastname) return 1;
                return 0;
            });
        },
        sortedGenres: function() {
            return this.genres.sort((a,b) => {
                if(a < b) return -1;
                if(a > b) return 1;
                return 0;
            });
        },
        sortedBooks: function() {
            return this.books.sort((a,b) => {
                if(a.title < b.title) return -1;
                if(a.title > b.title) return 1;
                return 0;
            });
        }
    }
})