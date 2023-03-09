


/**
 * Renders the test page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getTest = (req, res, next) => {
    console.log('toolsController.getTest');
    res.render('test', {
        pageTitle: 'TEST'
    })
};
