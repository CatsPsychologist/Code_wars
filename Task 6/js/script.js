function createPhoneNumber(arg){
    let updArg = arg.split('');
    // console.log(updArg,updArg.length);
    if(updArg.length === 9){
        updArg.splice(0,0, '(' )
        updArg.splice(4,0,') ')
        updArg.splice(8,0,'-')
        console.log(updArg.join(''))
    }else {
        console.log('Please,make sure you put exactly 9 numbers')
    }
}

createPhoneNumber('111111111');
createPhoneNumber('1111111111')
