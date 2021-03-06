let obj = Vue.component('book-widget', {
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
            <button class='blue-button' v-on:click="$emit('add-to-basket', book)">Add To Basket</button><br/>
        </div>
        <div class="clear-both bg-blue-200">
            <span v-for="genre in book.genres" v-bind:genre="genre" class="genre-tag">{{ genre }} </span>
        </div>
      </div>
    `
  });

export default obj;
