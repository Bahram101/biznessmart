var sum = document.getElementById('sumCredit');
var time = document.getElementById('timeCredit');
var range1 = document.getElementById('range1');
var range2 = document.getElementById('range2');
var monthlyPayEl = document.getElementById('monthlyPay');
var ratePercent = 6.9; // вставка
var rate = ratePercent/100/12;

sum.addEventListener('input', function(){
    var percent = (this.value * 100) / 1000000;
});

range1.addEventListener('input', function(){
    sum.value = this.value;
    var percent = (this.value * 100) / 1000000;
    this.style.background = 'linear-gradient(90deg, rgb(237,77,75) ' +
        + percent + '%, rgb(214,214,214) ' + percent + '%)';
    calculateMonthlyPayment(this.value, time.value)
});
range2.addEventListener('input', function(){
    time.value = this.value;
    var percent = (this.value * 100) / 60;
    this.style.background  = 'linear-gradient(90deg, rgb(237,77,75) ' +
        + percent + '%, rgb(214,214,214) ' + percent + '%)';
    calculateMonthlyPayment(sum.value, this.value)
});

function calculateMonthlyPayment(sum, time){
    var monthlyPayment = Math.round(sum * (rate + (rate/(Math.pow(1+rate, time)-1))));
    monthlyPayEl.innerHTML = monthlyPayment + " <i class=\"fas fa-ruble-sign\"></i>";
}
