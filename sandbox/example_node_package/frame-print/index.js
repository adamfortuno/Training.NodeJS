module.exports = function print(msg) {
    let message_border = '*';
    let message_border_length = 4 + msg.length;

    console.log(message_border.repeat(message_border_length));
    console.log('*', msg, '*');
    console.log(message_border.repeat(message_border_length));
    
    return;
}