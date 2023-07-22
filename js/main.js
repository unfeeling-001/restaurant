document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})


    //var - создание переменной (желательно не юзать)
    // const b - 1; - простая неизменная константа - переменная - значение переменной
    //let создание переменной (желательно юзать онли его)
    let a = 'hello мир'
    let b = 3 // правильная переменная
    let c = 4 // правильная переменная
    let e = b + c // логическое сложение двух переменных
    // let a = 3 - неправильная переменная (так как переменная с таким названием уже существует)
    // let addons = hello wolrd неправильная переменная (слова в значении переменной должны быть в ковычках '' "")

 console.log(a,e);