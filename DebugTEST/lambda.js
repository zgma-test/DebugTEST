exports.handler = function(event, context, callback) {
    debugger;

    console.log(event);
    let name = 'Udith';

    callback(null, {"message": name});
}

require('aws-lamda-debugger');