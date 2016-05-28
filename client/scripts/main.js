'use strict';

const request = require('axios');

new Vue({ // eslint-disable-line
  el: '#app',

  data: {
    todos: [],
  },

  created() {
    this.fetch();
  },

  methods: {
    fetch() {
      request
        .get('/api/todo')
        .then((res) => {
          this.todos = res.data;
        });
    },
    add() {
      request
        .post('/api/todo', {
          data: this.text,
        })
        .then(() => {
          this.fetch();
        });
    },
  },
});
