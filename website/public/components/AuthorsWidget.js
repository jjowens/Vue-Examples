let obj = Vue.component('authors-widget', {
    props: ['authors'],
    template: `
        <div>
            <p v-for="item in authors" >{{ item.author.firstname }} {{ item.author.lastname }}</p>
        </div>
    `
  }
  );

  export default obj;