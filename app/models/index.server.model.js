var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type:String,
    match: /.+\@.+\..+/
  },
  username: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    validate: [
      function(password){
        return password.length >= 6;
      },
      'password should be greater than 6'
    ]
  },
  role: {
    type: String,
    enum: ['Admin', 'Owner', 'User']
  },
  website: {
    type: String,
    get: function(url){
      if(!url){
        return url;
      }else {
        if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
          url = 'http://' + url;
        }
        return url;
      }
    }
  },
  created: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.authenticate = function(password){
  return this.password === password;
};

UserSchema.virtual('fullName').get(function() {
return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
var splitName = fullName.split(' ');
this.firstName = splitName[0] || '';
this.lastName = splitName[1] || '';
});

UserSchema.set('toJSON', { getters: true, virtuals: true });

mongoose.model('User', UserSchema);
