let $coin = document.querySelectorAll('buy')
let $login = document.querySelectorAll('#login')
let $modal_login = document.querySelector('.modal_login')
let $icon_close = document.querySelector('.icon-close')
let $cookies = document.querySelector('.cookies')
let $btncookies = document.querySelector('#btncookies')
                            /*КНОПКА ПОДРОБНЕЕ */
let $btnDiscover = document.querySelector('#btnDiscover')
let $dots = document.querySelector("#dots")
let $more = document.querySelector('#more')
let $btnDiscover2 = document.querySelector('#btnDiscover2')
let $dots2 = document.querySelector("#dots2")
let $more2 = document.querySelector('#more2')
let $btnDiscover3 = document.querySelector('#btnDiscover3')
let $dots3 = document.querySelector("#dots3")
let $more3 = document.querySelector('#more3')
let $btnDiscover4 = document.querySelector('#btnDiscover4')
let $dots4 = document.querySelector("#dots4")
let $more4 = document.querySelector('#more4')
let $btnDiscover5 = document.querySelector('#btnDiscover5')
let $dots5 = document.querySelector("#dots5")
let $more5 = document.querySelector('#more5')
                            /*КОНЕЦ КНОПКИ ПОДРОБНЕЕ */
let $burger = document.querySelectorAll('.burger')
let $burger_menu = document.querySelector('.burger_menu')

/*ksdflsjdf */






let $counterbtn = document.querySelector('#counterbtn')
let $buybtn = document.querySelectorAll('#buy')
let $count = document.querySelector('#count')
let $cardModal = document.querySelector('.cardModal')


$counterbtn.addEventListener('mouseover', visiblecard)
function visiblecard(){
    $cardModal.style.display = 'block'
}
$counterbtn.addEventListener('mouseout', () => {
        $cardModal.style.display = 'none'
})
$counterbtn.addEventListener('mouseover', (e) =>{
    $cardModal.style.display = 'block'
})

$counterbtn.addEventListener('mouseout', (e) =>{
    $cardModal.style.display = 'none'
})


let counter = 0
$buybtn.forEach(elem => {
    elem.addEventListener("click", () => {
        counter++
        $count.innerHTML = `(${counter})`
    })
})


$buybtn.forEach((item) => item.addEventListener('click', cardCounter))
function cardCounter(){
    // counter++
    $cardModal.insertAdjacentHTML('beforeend', `
    <div class="okoshka"> 
        <img id="oknoimg" src="./img/Rectangle (31).svg" alt="">
        <p>The Wild Hazelnut<br> Butter</p>
    </div>`)
}

let $whiteblock = document.querySelector('#whiteblock')
let $blackblock = document.querySelector('#blackblock')
let $popagandah1svoy = document.querySelector('#popagandah1svoy')
    let $popagandssvoy = document.querySelector('#popagandssvoy')
    let $Voiceh1 = document.querySelector('#Voiceh1')
    let $Voicetext = document.querySelector('#Voicetext')
    let $Athensh1svoy =document.querySelector('#Athensh1svoy')
    let $popaganda =document.querySelector('#popaganda')
    let $Athenstextsvoy =document.querySelector('#Athenstextsvoy')
    let $popagandatext =document.querySelector('#popagandatext')

$blackblock.addEventListener('click', changetext)
function changetext(){
    $blackblock.style.background = 'none'
    $whiteblock.style.background = 'black'

    $Athensh1svoy.style.display = 'none'
    $Athenstextsvoy.style.display = 'none'
    $popaganda.style.display = 'flex'
    $popagandatext.style.display = 'flex'


    $popagandah1svoy.style.display = 'none'
    $popagandssvoy.style.display = 'none'
    $Voiceh1.style.display = 'flex'
    $Voicetext.style.display = 'flex'
}

$whiteblock.addEventListener('click', changetext2)
function changetext2(){
    $blackblock.style.background = 'black'
    $whiteblock.style.background = 'none'
    $Athensh1svoy.style.display = 'flex'
    $Athenstextsvoy.style.display = 'flex'
    $popaganda.style.display = 'none'
    $popagandatext.style.display = 'none'


    $popagandah1svoy.style.display = 'flex'
    $popagandssvoy.style.display = 'flex'
    $Voiceh1.style.display = 'none'
    $Voicetext.style.display = 'none'
}

/*dsfsdfsdf */



$burger.forEach(elem=> {
    elem.addEventListener('click', function(){
        $burger_menu.classList.toggle('active');
        elem.classList.toggle('active')
        
    })
})

$login.forEach((item) => item.addEventListener('click', openlogin))
function openlogin(){
    $modal_login.style.display = 'flex'
}

$icon_close.addEventListener('click', closelogin)
function closelogin(){
    $modal_login.style.display = 'none'
}

$btncookies.addEventListener('click', closeCookies)
function closeCookies(){
    $cookies.style.display = 'none'
}



/*GOVNO COD. ISPRAVIT */
$btnDiscover.addEventListener('click', readmore)
function readmore(){
    if($dots.style.display === 'none'){
        $dots.style.display = 'inline';
        $btnDiscover.innerHTML = 'DISCOVER MORE'
        $more.style.display = 'none'
    }else{
        $dots.style.display = 'none';
        $btnDiscover.innerHTML = 'HIDE'
        $more.style.display = 'inline'
    }
}

$btnDiscover2.addEventListener('click', readmore2)
function readmore2(){
    if($dots2.style.display === 'none'){
        $dots2.style.display = 'inline';
        $btnDiscover2.innerHTML = 'DISCOVER MORE'
        $more2.style.display = 'none'
    }else{
        $dots2.style.display = 'none';
        $btnDiscover2.innerHTML = 'HIDE'
        $more2.style.display = 'inline'
    }
}

$btnDiscover3.addEventListener('click', readmore3)
function readmore3(){
    if($dots3.style.display === 'none'){
        $dots3.style.display = 'inline';
        $btnDiscover3.innerHTML = 'DISCOVER MORE'
        $more3.style.display = 'none'
    }else{
        $dots3.style.display = 'none';
        $btnDiscover3.innerHTML = 'HIDE'
        $more3.style.display = 'inline'
    }
}

$btnDiscover4.addEventListener('click', readmore4)
function readmore4(){
    if($dots4.style.display === 'none'){
        $dots4.style.display = 'inline';
        $btnDiscover4.innerHTML = 'DISCOVER MORE'
        $more4.style.display = 'none'
    }else{
        $dots4.style.display = 'none';
        $btnDiscover4.innerHTML = 'HIDE'
        $more4.style.display = 'inline'
    }
}

$btnDiscover5.addEventListener('click', readmore5)
function readmore5(){
    if($dots5.style.display === 'none'){
        $dots5.style.display = 'inline';
        $btnDiscover5.innerHTML = 'DISCOVER MORE'
        $more5.style.display = 'none'
    }else{
        $dots5.style.display = 'none';
        $btnDiscover5.innerHTML = 'HIDE'
        $more5.style.display = 'inline'
    }
}

/*GOVNO COD. ISPRAVIT */