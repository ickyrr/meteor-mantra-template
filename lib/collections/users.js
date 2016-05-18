import {Meteor} from 'meteor/meteor';
import {Astro} from 'meteor/jagi:astronomy';
import {Accounts} from 'meteor/accounts-base';

export default User = Astro.Class.create({
  name: 'User',
  collection: Meteor.users,
  fields: {
    username: String,
    services: Object,
    emails: [ Object ]
  },
  events: {
    afterInsert(event) {
      event.preventDefault();

      const {_id, services} = event.currentTarget;

      if (Meteor.isServer) {
        Accounts.setPassword(_id,services.password.bcrypt);
      }
    }
  },
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt',
    }
  }
});
