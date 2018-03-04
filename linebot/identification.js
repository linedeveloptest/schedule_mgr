module.exports = {
    identify : function(userId, displayName, callback) {
        console.log("Alan in=>" + displayName);
        if (displayName === 'Alon') {
            callback('Login OK');
        } else {
            callback('Login Failed');
        }
    },
};
