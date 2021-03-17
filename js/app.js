window.addEventListener('DOMContentLoaded', function (){
    //変数まとめ
    var free = document.querySelector('.js-click-free');
    var paid = document.querySelector('.js-click-paid');
    var go = document.querySelector('.js-go');
    var notGo = document.querySelector('.js-notGO');
    var mileImportant = document.querySelector('.js-miles-important');
    var statusImportant = document.querySelector('.js-status-important');

    //Q1.年会費は無料がいい？
    //無料がいい！を選択
    free.addEventListener('click', function (event){
        var fee = document.querySelector('.js-annualFee');
        var travel = document.querySelector('.js-travel');
        fee.classList.add('invisible');
        travel.animate([{opacity: '0'}, {opacity: '1'}], 3000);
        travel.classList.remove('invisible')
    })
    //有料がいい！を選択
    paid.addEventListener('click', function (event){
        var fee = document.querySelector('.js-annualFee');
        var miles = document.querySelector('.js-miles');
        fee.classList.add('invisible');
        miles.animate([{opacity: '0'}, {opacity: '1'}], 3000);
        miles.classList.remove('invisible')
    })

    //Q2.よく旅行に行く？
    //旅行に行く！を選択
    go.addEventListener('click', function (event){
        var travel = document.querySelector('.js-travel');
        var presentation = document.querySelector('.js-presentation');
        var cedyna = document.querySelector('.js-cedyna');
        travel.classList.add('invisible');
        presentation.classList.add('invisible');
        cedyna.animate([{opacity: '0'}, {opacity: '1'}], 3000);
        cedyna.classList.remove('invisible')
    })
    //旅行に行かない！を選択
    notGo.addEventListener('click', function (event){
        var travel = document.querySelector('.js-travel');
        var presentation = document.querySelector('.js-presentation');
        var smbc = document.querySelector('.js-smbc');
        travel.classList.add('invisible');
        presentation.classList.add('invisible');
        smbc.animate([{opacity: '0'}, {opacity: '1'}], 3000);
        smbc.classList.remove('invisible')
    })

    //Q2.マイル重視？それともステータス重視？
    //マイル重視！を選択
    mileImportant.addEventListener('click', function (event){
        var miles = document.querySelector('.js-miles');
        var presentation = document.querySelector('.js-presentation');
        var ana = document.querySelector('.js-ana');
        miles.classList.add('invisible');
        presentation.classList.add('invisible');
        ana.animate([{opacity: '0'}, {opacity: '1'}], 3000);
        ana.classList.remove('invisible')
    })
    //ステータス重視！を選択
    statusImportant.addEventListener('click', function (event){
        var miles = document.querySelector('.js-miles');
        var presentation = document.querySelector('.js-presentation');
        var amex = document.querySelector('.js-amex');
        miles.classList.add('invisible');
        presentation.classList.add('invisible');
        amex.animate([{opacity: '0'}, {opacity: '1'}], 3000);
        amex.classList.remove('invisible')
    })
})
