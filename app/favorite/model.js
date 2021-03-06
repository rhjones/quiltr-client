import DS from 'ember-data';

export default DS.Model.extend({
 user: DS.belongsTo('user'),
 pattern: DS.belongsTo('pattern'),
 belongsToCurrentUser: DS.attr('boolean'),
});
