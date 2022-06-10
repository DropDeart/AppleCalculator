const sec = document.querySelector('.secs')
const min = document.querySelector('.mins')
const hours = document.querySelector('.hours')

function clockMove() {
  let second = new Date().getSeconds()
  let minute = new Date().getMinutes()
  let hour = new Date().getHours()

  sec.style.transform = `rotate(${180 + second * 6}deg)`
  min.style.transform = `rotate(${180 + minute * 6}deg)`
  hours.style.transform = `rotate(${180 + hour * 30}deg)`
  /*Neden 180 derece rotate? : Analog saatimiz saat 12 itibari ile başlıyor. Verdiğimiz
  CSS değerlerinde merkez noktasından -Y eksenine doğru bir hareket olduğundan 180 derecelik
  döndürme açısı saatimizi teknik olarak sıfırlayacaktır. Local olarak gelen bilgiyi de üzerine eklediğimizde
  tam saati hesaplanaın açıya göre her 1000 ms 'de rotate edecektir.*/

  /*Saat Hesabı : Dakika ve Saniye 60'lık zaman birimini kullanıyor. Öyleyse ;
  360/60 = 6 derecelik bir fark olması gerekiyor.*/
}

setInterval(clockMove, 1000)
