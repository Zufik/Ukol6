/*
Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, 
pro kolik lidí se catering objednává. Funkce pak vrátí řetězec obsahující zprávu o 
tom že catering byl dodán a za jakou cenu. Například

Catering od Flavour Haven pro 100 lidí za 300000 Kč
Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření
 nějaké události s cateringem. Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí 
 které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu

Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč
*/
// funkce cena * počet lidí
const justFood = (numberOfPeople) => {
    return ` do výplaty daleko, dnes vaří Just Food: ${numberOfPeople} lidí za ${(numberOfPeople * 100)} korun českých`
  }

  const yourMama = (numberOfPeople) => { 
    return ` dopřejeme si zlatou střední cestu, dobře se nadlábneme a peněženka tolik netrpí, dnes je to u 
    Your Mama pro ${numberOfPeople} lidí za ${(numberOfPeople * 200)} korun českých`
  }

  const flavourHaven = (numberOfPeople) => {
    return ` aneb láska prochází žaludkem, takže pro speciální příležitosti tu máme catering od Flavour Haven 
    pro ${numberOfPeople} lidí za ${(numberOfPeople * 500)} korun českých.No to je za hubičku.`
  }
  // událost s cateringem

  const createEvent = (eventName, numberOfPeople, catering) => {
    return `Událost <strong>${eventName}</strong>  ${catering(numberOfPeople)}`
  }
  
  document.body.innerHTML += createEvent(
    'Svatba-pravá jihočeská',
    100,
    flavourHaven
  )

  document.body.innerHTML += createEvent(
    '<p>Oslava 20.tých narozenin (bohužel už po druhé)</p>',
    60,
    yourMama
  )
