# novihadis.com -- https://novihadis.com/

Svaki dan nauči novi hadis
-----------------------------------------------

This code appears to be a JavaScript (Vanilla) code that controls a web page that displays and shares Islamic hadiths. It contains functions that allow the user to generate a random hadith, share it on social media platforms, listen to the hadith using text-to-speech, and copy the hadith to the clipboard.

The code uses the fetch() method to retrieve data from an external API that provides a collection of hadiths. The code then selects a random hadith from the data returned by the API and displays it on the web page.

The code also includes event listeners that trigger functions when the user clicks on various buttons, such as the "share" button for sharing the hadith on social media platforms, the "zvuk" button for listening to the hadith using text-to-speech, and the "kopiraj" button for copying the hadith to the clipboard.

The code also includes functions for sharing the hadith on various social media platforms, including Instagram, Facebook, Twitter, Messenger, and email. These functions use the navigator.share() method to allow the user to share the hadith text and a link to the page.


# API
-------------------------------------------------

The MongoDB API service is used to fetch a random hadith from a MongoDB database hosted on AWS (Amazon Web Services). The database contains a collection of hadiths, each with its own "name" and "author" fields. The API endpoint "https://us-east-1.aws.data.mongodb-api.com/app/application-0-djjur/endpoint/hadisi" is used to retrieve the data from the MongoDB database in JSON format.

To add new hadiths to the database, you would need to use the POST method and send a raw JSON object in the body of the request to the same URL "https://us-east-1.aws.data.mongodb-api.com/app/application-0-djjur/endpoint/hadisi". The JSON object should contain the "name" and "author" fields, which will be used to create a new hadith document in the database.

You can add new hadiths and author of it using Postman, Jmeter or any other Api testing tool using POST method and raw json format like this

POST https://us-east-1.aws.data.mongodb-api.com/app/application-0-djjur/endpoint/hadis

{
"name": "Allah kaže: Covjece, dijeli pa cu i Ja tebi udijeliti!",
"author": "Buharija i Muslim"
}


# Na našem jeziku

---------------------------------------------------

Ovaj kod je napisan na JavaScript-u (Vanilla) i sastoji se od funkcija koje omogućuju prikazivanje i dijeljenje različitih hadisa, kao i reprodukciju zvuka govora tih hadisa.

Prva funkcija, "randomNoviHadis", služi za generiranje novog hadisa putem API-ja, a taj se hadis zatim prikazuje u odgovarajućem HTML elementu. Funkcija također mijenja tekst na gumbu "dugmeDodaj" iz "Loading..." u "Novi Hadis" nakon što je hadis uspješno dohvaćen.

Druga funkcija, "dugmePodijeli", omogućuje dijeljenje hadisa putem native share API-ja preglednika. Ako preglednik podržava ovaj API, tada će se dijeljenje obaviti automatski. Ako API nije dostupan, korisnik će biti obaviješten da dijeli poveznicu ručno.

Treća funkcija, "dugmeZvuk", koristi Web Speech API za reprodukciju govora koji sadrži tekst hadisa. Jezik koji se koristi za reprodukciju zvuka postavljen je na bosanski jezik (bs-BA), a funkcija također postavlja pitch, stopu i glasnoću zvuka.


Nadalje, postoji nekoliko funkcija koje omogućuju dijeljenje hadisa putem različitih društvenih mreža. Te funkcije koriste native share API za dijeljenje sadržaja putem Instagrama, Facebooka, Twittera, Messengera i e-pošte. Svaka funkcija koristi tekst hadisa i autora, kao i poveznicu na web stranicu s hadisima.

Ovaj kod koristi moderne JavaScript tehnologije poput fetch API-a, Web Speech API-a i native share API-ja kako bi korisnicima omogućio jednostavno i intuitivno korištenje web stranice s hadisima.

Četvrta funkcija, "dugmeKopiraj", omogućuje kopiranje teksta hadisa i autora u međuspremnik računala.



# API

---------------------------------------------------------------------------------------------


API koji se koristi je MongoDB API i on pruža mogućnost pristupa MongoDB bazi podataka putem HTTP zahtjeva. U ovom slučaju, endpoint na koji se šalju zahtjevi je https://us-east-1.aws.data.mongodb-api.com/app/application-0-djjur/endpoint/hadisi. Ovaj endpoint omogućava pristup kolekciji hadisa koja je već postavljena u bazi 
podataka.

Ovaj servis se koristi za pristup i manipulaciju podacima u MongoDB bazi podataka. Konkretno, ovaj servis omogućava pristup podacima vezanim za hadise.

Ukoliko želite dodati novi hadis u ovu bazu, potrebno je koristiti HTTP POST metodu na sljedećem URL-u: https://us-east-1.aws.data.mongodb-api.com/app/application-0-djjur/endpoint/hadisi.

U body dijelu zahtjeva, trebate poslati JSON objekat sa informacijama o novom hadisu. Primjer JSON objekta bi mogao izgledati ovako:

POST https://us-east-1.aws.data.mongodb-api.com/app/application-0-djjur/endpoint/hadis

{
"name": "Allah kaže: Covjece, dijeli pa cu i Ja tebi udijeliti!",
"author": "Buharija i Muslim"
}

U ovom primjeru, atribut "name" sadrži tekst hadisa, dok atribut "author" sadrži ime autora koji je hadis prenio. Ovi atributi se mogu prilagoditi vašim potrebama i formatu podataka u bazi.

Nakon što pošaljete POST zahtjev, server će dodati novi hadis u bazu podataka, i odgovoriti sa odgovarajućim HTTP status kodom.
