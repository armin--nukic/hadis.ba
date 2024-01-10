# Islamic-quote.com - [https://islamic-quote.com/](https://islamic-quote.com/)

Showcasing a new Islamic quote every day
-----------------------------------------------

This repository contains JavaScript (Vanilla) code that powers a web page displaying and sharing Islamic quotes. The functionality includes generating a random quote, sharing it on social media platforms, listening to the quote using text-to-speech, and copying the quote to the clipboard.

## Features

- Display random Islamic quotes
- Share quotes on social media
- Listen to quotes using text-to-speech
- Copy quotes to the clipboard

## Code Overview

The code utilizes the `fetch()` method to retrieve data from an external API that provides a collection of Islamic quotes. It then selects a random quote from the API response and displays it on the web page.

Event listeners are implemented to trigger functions when users interact with buttons, such as the "share," "sound," and "copy to clipboard" buttons.

## Social Media Sharing

The code includes functions for sharing quotes on various social media platforms, including Instagram, Facebook, Twitter, Messenger, and email. The `navigator.share()` method is used to enable users to share the quote text and a link to the page.

## API Usage

### GET Method

The MongoDB API service fetches a random quote from a MongoDB database hosted on AWS. The database contains quotes with "name" and "author" fields. The API endpoint for fetching data is [https://us-east-1.aws.data.mongodb-api.com/app/islamic-quote-api-kuwdp/endpoint/islamicquotes](https://us-east-1.aws.data.mongodb-api.com/app/islamic-quote-api-kuwdp/endpoint/islamicquotes).

### POST Method

To add a new quote to the database, use the POST method and send a raw JSON object in the request body to [https://us-east-1.aws.data.mongodb-api.com/app/islamic-quote-api-kuwdp/endpoint/islamicquote](https://us-east-1.aws.data.mongodb-api.com/app/islamic-quote-api-kuwdp/endpoint/islamicquote). The JSON object should include "name" and "author" fields to create a new quote document in the database.

Example POST request using Postman, Jmeter, or any API testing tool:

```http
POST https://us-east-1.aws.data.mongodb-api.com/app/islamic-quote-api-kuwdp/endpoint/islamicquote
{
    "name": "He, who wishes to enter paradise at the best gate, must please his father and mother.",
    "author": "Prophet Muhammad"
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
