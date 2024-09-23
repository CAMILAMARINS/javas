let num, num2, v

v= 1
num= 1

do{
    num = 1
    while(num<10){
        num2= v* num

        console.log(v + ' * ' + num + ' = ' + num2)
        num++
    }
    v++
}while(v<=9)