console.log("**** STRİNG METHOD****");
//Bir string nasıl oluşturulur?
// Klasik yöntem ile bir string tanımlanırsa bu string primite değişkendir.
const str1 ="Furkan";//string trüne örnektir.
const str2 ="Hello";
const str3 ="World";
console.log(typeof str1);//str1 in string olduğunu typeof komutu bize söylemektedir.
const str4 = str1+str2; // String concat
console.log (str4);
str4.concat(str3);
console.log (str4);
/* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.
*/
//non primite string tanımlama
const str5 = new String ('Non primite string');// Bir classın fonksiyonuna method denir.
console.log (str5);
// Ek Açıklama için: https://javascript.info/primitives-methods
//concat()-immutable
const s1 = "hello";
const s2 = "world";
const s3 = s1.concat(s2);
console.log(s3);

console.log (s3.concat ("Clarusvay",str2,"Merhaba"));
console.log (s2,s3);
// charAt()//
console.log (s3. charAt());
//charAt komutu stringde yazılan her bir karakterin çıktısını verir.

// Eğer stringin uzunluğunu biliyorsak (lenght-1) type ı last member ı getirir.
console. log (s3.charAt(s3.length-1));
//includes()//-case sensitive
const word="To be or not to be that is the question"; 
console.log (word.includes("to be"));//true
console.log (word.includes("That"));//False
console.log (word.includes('to be',12));// char karakter sayısından sonra search ediyouruz.
//indexOf()LastIndexOf()//
const tobeIndex= word.indexOf('be');
console.log(tobeIndex);//ilk gördüğü char sayısının indexini yazdırır.
console.log(word.lastIndexOf('be'));//Son gördüğü char sayısının indexini yazdırır.
//startsWith(), endsWith()//
const word2 = 'Salına salına sinsice';
console.log(word2.startsWith('Sa'));//True
console.log(word2.startsWith('sa'));//False
//Replace(seachfor ,replacewith)
const oku = ' Oku Baban gibi, saf olma';
console.log(oku.replace('saf olma','akıllı ol !')); // 1. String olan ifadeyi seach edip daha yerine 2. yazdığımız string i yerine yazdırıyor!
