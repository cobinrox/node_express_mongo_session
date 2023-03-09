/**
 * Check session object and if user is logged in, render the welcome page,
 * otherwise render the login/home page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
utils = require('../utils');
exports.getLogin = (req, res, next) => {
    utils.log('');
    const session = req.session;

    if (session.isLoggedIn) {
        res.render('welcome', {
            pageTitle: 'Welcome'
        })
    } else {
        res.render('home', {
            pageTitle: 'Login',
        });
    }
};

/**
 * Gets triggered when user submits the login form.  Check the user's
 * credentials (email/pword) and, if corret, set session object with the
 * statement req.session.isLoggedIn = true.  When the req.session object
 * is set, the express app automatically makes sure to set the appropriate
 * cookie in the browser.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postLogin = (req, res, next) => {
    utils.log('');

    if (req.body.email === "abc@gmail.com" && req.body.password === "pass123") {
        utils.log('w00t. User provided correct credentials, setting isLoggedIn session to true and redirecting to welcom page');
        req.session.isLoggedIn = true;
        res.redirect('/welcome');
    }
    else{
        utils.log('User provided invalid credentials, redirecting to main login page again');
        res.redirect('/')
    }
}
/**
 * Renders the welcome page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getWelcome = (req, res, next) => {
    utils.log('');

    res.render('welcome', {
        pageTitle: 'Welcome'
    })
}
/**
 * Calls the req.session.destroy which destroys the session on the
 * server side, including session data from the mongo session store.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.logout = (req, res, next) => {
    utils.log('');

    req.session.destroy(() => {
        res.redirect('/')
    });
}