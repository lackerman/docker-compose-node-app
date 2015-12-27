function encodeJSON(json) {
  return json ? Object.keys(json).map(function(key) {
    return encodeURIComponent(key) + '=' +
      encodeURIComponent(json[key]);
  }).join('&') : undefined;
};

function request(type, url, params, onSuccess) {
  var req = new XMLHttpRequest();
  var encodedParams = encodeJSON(params);
  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200 && onSuccess) {
      onSuccess(req);
    }
  }
  req.open(type, url, true);
  if (type === 'POST') {
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  }
  req.send(encodedParams);
};

var endPoint = '/api/todo';

new Vue({

  el: '#app',

  data: {
    todos: []
  },

  created: function() {
    this.fetch();
  },

  methods: {
    fetch: function() {
      var self = this;
      request('GET', endPoint, undefined, function(req) {
        if (req.status === 200) {
          self.todos = JSON.parse(req.responseText);
        }
      });
    },
    add: function() {
      var self = this;
      request('POST', endPoint, undefined, function(req) {
        self.fetch();
      });
    }
  }
});
