exports.render = function(req, res) {

  res.render('index', {
    title: 'Hello World',
    userFullName: req.user ? req.user.fullName : ''
  });



// if (req.session.lastVisit){
//   console.log(req.session.lastVisit);
// }
//
// req.session.lastVisit = new Date();


};
