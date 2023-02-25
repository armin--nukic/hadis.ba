# novihadis.com

This code appears to be a JavaScript code that controls a web page that displays and shares Islamic hadiths. It contains functions that allow the user to generate a random hadith, share it on social media platforms, listen to the hadith using text-to-speech, and copy the hadith to the clipboard.

The code uses the fetch() method to retrieve data from an external API that provides a collection of hadiths. The code then selects a random hadith from the data returned by the API and displays it on the web page.

The code also includes event listeners that trigger functions when the user clicks on various buttons, such as the "share" button for sharing the hadith on social media platforms, the "zvuk" button for listening to the hadith using text-to-speech, and the "kopiraj" button for copying the hadith to the clipboard.

The code also includes functions for sharing the hadith on various social media platforms, including Instagram, Facebook, Twitter, Messenger, and email. These functions use the navigator.share() method to allow the user to share the hadith text and a link to the page.


Na našem jeziku


Ovaj kod je napisan na JavaScript-u i sastoji se od funkcija koje omogućuju prikazivanje i dijeljenje različitih hadisa, kao i reprodukciju zvuka govora tih hadisa.

Prva funkcija, "randomNoviHadis", služi za generiranje novog hadisa putem API-ja, a taj se hadis zatim prikazuje u odgovarajućem HTML elementu. Funkcija također mijenja tekst na gumbu "dugmeDodaj" iz "Loading..." u "Novi Hadis" nakon što je hadis uspješno dohvaćen.

Druga funkcija, "dugmePodijeli", omogućuje dijeljenje hadisa putem native share API-ja preglednika. Ako preglednik podržava ovaj API, tada će se dijeljenje obaviti automatski. Ako API nije dostupan, korisnik će biti obaviješten da dijeli poveznicu ručno.

Treća funkcija, "dugmeZvuk", koristi Web Speech API za reprodukciju govora koji sadrži tekst hadisa. Jezik koji se koristi za reprodukciju zvuka postavljen je na bosanski jezik (bs-BA), a funkcija također postavlja pitch, stopu i glasnoću zvuka.

Četvrta funkcija, "dugmeKopiraj", omogućuje kopiranje teksta hadisa i autora u međuspremnik računala.

Nadalje, postoji nekoliko funkcija koje omogućuju dijeljenje hadisa putem različitih društvenih mreža. Te funkcije koriste native share API za dijeljenje sadržaja putem Instagrama, Facebooka, Twittera, Messengera i e-pošte. Svaka funkcija koristi tekst hadisa i autora, kao i poveznicu na web stranicu s hadisima.

Ovaj kod koristi moderne JavaScript tehnologije poput fetch API-a, Web Speech API-a i native share API-ja kako bi korisnicima omogućio jednostavno i intuitivno korištenje web stranice s hadisima.
