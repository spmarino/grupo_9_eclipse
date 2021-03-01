module.exports = (req, res, next) => {
    if (req.cookies.userConect) {
        req.session.user = req.cookies.userConect
    }
    next()
}