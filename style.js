const coin = document.querySelector(".coin")
const flipBtn = document.querySelector(".flip-btn");
const reset = document.querySelector(".reset-btn");
let yazi=0;
let tura=0;
//Döndür buttona tıkladığmda
flipBtn.addEventListener("click",()=>{
    //Rastgele 0 ve 1 sayıları üretmek. math floor aldım kesirli sayılar uretmesin diye
    let s =Math.floor(Math.random()*2);
    //Her şeyden önce eğer bir animasyon varsa kapatalım. kendimiz animasyonu yazacaz
    //0:Tura 1:Yazı olsun
    if(s){//eğer i 1 ise yani yazı ise
        setTimeout(() => {
            coin.style.animation="spin-tura 3s forwards";
        }, 100);
        tura++;
        }
        else{
            setTimeout(() => {
                coin.style.animation="spin-yazi 3s forwards";
            }, 100);
            yazi++
        }
        //istatistikler güncelle ve butonu devre dışı bırak
        setTimeout(updateStats, 3000);
        disableButton();
    
})
//yazı ve tura değerler güncelle
function updateStats(){
    document.querySelector(".yazi-count").textContent=`Yazı:${yazi}`;
    document.querySelector(".tura-count").textContent=`Tura:${tura}`;
}
function disableButton(){
    flipBtn.disabled=true;
    setTimeout(() => {
        flipBtn.disabled=false;
    }, 3000);
}
//sıfırla butonu tıkladığımızda coin animasyonu sıfırlasın ve yazı tur değerleri sıfırlasın ve istatikler değerleri güncellesin
reset.addEventListener("click",()=>{
    coin.style.animation="none";
    tura=0;
    yazi=0;
    updateStats();

})