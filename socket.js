
var socket = io('http://localhost:4000');


socket.on('connected', function(msg) {
    //alert("connected in the server")

})

socket.on('move' , function(msg){

    flag = msg['flag']

    if(msg['box'] == 'b1') {
        flag = msg ['flag']
        myfunc_3()
        myfunc()
    }

    else if(msg['box'] == 'b2') {
        flag = msg ['flag']
        myfunc_4()
        myfunc()
    }

    else if(msg['box'] == 'b3') {
        flag = msg ['flag']
        myfunc_5()
        myfunc()
    }

    else if(msg['box'] == 'b4') {
        flag = msg ['flag']
        myfunc_6()
        myfunc()
    }

    else if(msg['box'] == 'b5') {
        flag = msg ['flag']
        myfunc_7()
        myfunc()
    }

    else if(msg['box'] == 'b6') {
        flag = msg ['flag']
        myfunc_8()
        myfunc()
    }

    else if(msg['box'] == 'b7') {
        flag = msg ['flag']
        myfunc_9()
        myfunc()
    }

    else if(msg['box'] == 'b8') {
        flag = msg ['flag']
        myfunc_10()
        myfunc()
    }

    else if(msg['box'] == 'b9') {
        flag = msg ['flag']
        myfunc_11()
        myfunc()
    }

}) 


document.getElementById('b1').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b1'})
    myfunc_3()
    myfunc()
})

document.getElementById('b2').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b2'})
    myfunc_4();
    myfunc();

})

document.getElementById('b3').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b3'})
    myfunc_5(); 
    myfunc();

})

document.getElementById('b4').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b4'})
    myfunc_6();
    myfunc();

})

document.getElementById('b5').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b5'})
    myfunc_7();
    myfunc();

})

document.getElementById('b6').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b6'})
    myfunc_8();
    myfunc();

})

document.getElementById('b7').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b7'})
    myfunc_9();
    myfunc();

})

document.getElementById('b8').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b8'})
    myfunc_10();
    myfunc();

})

document.getElementById('b9').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b9'})
    myfunc_11();
    myfunc();

})


