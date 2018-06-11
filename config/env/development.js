module.exports = {
  db: 'mongodb://localhost/mean-book',
  sessionSecret: "developmentSessionSecret",
  facebook: {
    clientID: '459024961203388',
    clientSecret: 'f4dd6fb95f4ab73dc45bd98b6f219e3d',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback',
     profileFields : ['id', 'displayName', 'emails','photos']
}
};
