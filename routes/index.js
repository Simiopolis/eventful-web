
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('layout', { title: 'Express' });
};

exports.partial = function(req, res) {
  res.render('partials/'+req.params.partial, {});
};
