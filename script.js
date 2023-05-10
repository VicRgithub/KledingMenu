const shirtsLink = document.getElementById('shirts');
const broekenLink = document.getElementById('broeken');
const schoenenLink = document.getElementById('schoenen');
const shirtsContent = document.getElementById('shirts-content');
const broekenContent = document.getElementById('broeken-content');
const schoenenContent = document.getElementById('schoenen-content');

function showContent(content) {
  // Verberg alle inhoud
  shirtsContent.classList.add('hidden');
  broekenContent.classList.add('hidden');
  schoenenContent.classList.add('hidden');

  // Toon de inhoud van de geselecteerde sectie
  if (content === 'shirts-content') {
    shirtsContent.classList.remove('hidden');
  } else if (content === 'broeken-content') {
    broekenContent.classList.remove('hidden');
  } else if (content === 'schoenen-content') {
    schoenenContent.classList.remove('hidden');
  }
}

function bekijkitem(item) {
  // Doe hier de logica voor het kopen van het item
  console.log(`Item ${item} gekocht!`);
}


