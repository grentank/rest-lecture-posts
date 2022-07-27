export default function authCheck(req, res, next) {
  console.log('AUTH CHECK');
  if (req.session?.username) {
    next();
  } else {
    res.redirect('/');
  }
}
