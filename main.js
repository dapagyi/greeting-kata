function greeting(msg,name='my friend'){
    return (msg +', ' + name + '!');
}

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function logFrame(msg, framecharacter){
    var margin = (80-msg.length)/2;
    var line = '';
    var marginline = '';
    var borderline = '';

    for (var i=0; i<msg.length+2*margin; i++) line+=framecharacter;
    for (var i=0; i<margin; i++) marginline+=' ';
    for (var i=0; i<80; i++) borderline+=' ';
    borderline=replaceAt(borderline,0,framecharacter);
    borderline=replaceAt(borderline,79,framecharacter);

    var msgline=replaceAt(marginline+msg+marginline,0,framecharacter).substring(0,79);
    msgline=replaceAt(msgline,79,framecharacter);

    console.log(line);
    console.log(borderline);
    console.log(msgline);
    console.log(borderline);
    console.log(line);
    console.log(line.length,msgline.length);
}

logFrame(greeting('Happy Eastern'),'#');