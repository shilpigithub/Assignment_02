// The Word Translator
// Usage: Use simple conditional statements
// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). 
// If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example):



let langCode = prompt("Enter one of the language code : es  / de  / en  / fr");

if (langCode === 'es') {
    console.log("Hola mundo!"); //spanish
} else if (langCode === 'de'){
    console.log("Hallo Welt!"); //german
} else if (langCode === 'fr'){
    console.log("Bonjour le monde!"); //french
} else {
    console.log('Hello world!') // default English
}