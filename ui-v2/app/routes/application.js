import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    error: function(e, transition) {
      return true;
    },
  },
});