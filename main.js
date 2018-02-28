function greeting(msg,name){
    return (msg +', ' + name + '!');
}

function logFrame(msg){
    var margin = (80-msg.length)/2;
    var line = '';
    var marginline = '';
    
    for (var i=0; i<msg.length+2*margin; i++) line+='-';
    for (var i=0; i<margin; i++) marginline+=' ';
    
    console.log();
    console.log(line);
    console.log(marginline+msg+marginline);
    console.log(line);
    console.log();
}

logFrame(greeting('Happy Eastern','Sasha'));