function greeting(msg,name='my friend'){
    return (msg +', ' + name + '!');
}

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function setEdge(string, width, framecharacter){
    for(var i=0; i<width; i++){
        string=replaceAt(string,i,framecharacter[i%framecharacter.length]);
        string=replaceAt(string,string.length-(i+1),framecharacter[i%framecharacter.length]);
    }
    return string;
}


function logFrame(msg, width, framecharacter){
    var margin = Math.round(Math.max((80-msg.length)/2,3+width));
    var line = '';
    var marginline = '';
    var borderline = '';

    
    for (var i=0; i<msg.length+2*margin; i++) line+=framecharacter[i%framecharacter.length];
    for (var i=0; i<margin; i++) marginline+=' ';

    
    var msgline = setEdge((marginline+msg+marginline),width,framecharacter);
    var fullwidth=Math.max(80,msgline.length);

    
    for (var i=0; i<fullwidth; i++) borderline+=' ';
    borderline=setEdge(borderline, width, framecharacter);


    for (var i=0; i<width; i++) console.log(line);
    console.log(borderline);
    console.log(msgline);
    console.log(borderline);
    for (var i=0; i<width; i++) console.log(line);
    console.log(line.length,msgline.length);
}

logFrame(greeting('Nagyon nagyon boldog szuletesnapot kivanok sok sok szeretettel', 'Sasha'), 5, ['*','~']);