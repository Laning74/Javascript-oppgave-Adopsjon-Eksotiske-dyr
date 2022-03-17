const database = [
  {
    animalName: "ELEFANTEN",
    animalInfo: "Den store kjempen elsker bananer, insekter og nakenbad.",
    animalImg: `<img src="/IMG/Elephant.jpg">`,
  },
  {
    animalName: "GORILLAEN",
    animalInfo: "Jungelens muskuløse kjekkas, elsker og sove og spise bananer.",
    animalImg: `<img src="/IMG/Gorilla.jpg">`,
  },
  {
    animalName: "TIGEREN",
    animalInfo:
      "Tøffer seg stadig vekk, men er verdens snilleste. Spiser mye bananer.",
    animalImg: `<img src="/IMG/Tiger.jpg">`,
  },
  {
    animalName: "NESEHORNET",
    animalInfo: "Litt sjenert, veldig leken og gjør triks når han får bananer.",
    animalImg: `<img src="/IMG/Rhino.jpg">`,
  },
  {
    animalName: "ORANGUTANGEN",
    animalInfo: "Den gamle helten, hjelpsom og klok hvis han får nok bananer.",
    animalImg: `<img src="/IMG/Orangutan.jpg">`,
  },
  {
    animalName: "LØVEN",
    animalInfo:
      "Jungelens konge, liker og bli klødd på magen og spiser bananer i smug.",
    animalImg: `<img src="/IMG/Lion.jpg">`,
  },
];
console.log(database);

//Selects elemet passed in
function SelectElement(selector) {
  return document.querySelector(selector);
}

//Clears the content inside of the search-results div
function clearResults() {
  SelectElement(".search-results").innerHTML = "";
}

function getResults() {
  const search = SelectElement(".searchbar").value;

  clearResults();

  if (search.length > 0) {
    for (let i = 0; i < database.length; i++) {
      if (
        database[i].animalName
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
      ) {
        SelectElement(".search-results").innerHTML += `
    
         <div class="search-results-item">
            <span class="search-item">${database[i].animalName}</span>
             <span class="search-item">${database[i].animalInfo}</span>
             <span class="search-item">${database[i].animalImg}</span>
        </div>
    `;
      }
    }
  }
}

SelectElement(".searchbar").addEventListener("keyup", getResults);

//trykk for og mate dyr med banan

const imgBanana = document.createElement("img");
imgBanana.src = "/IMG/Banana.png";
document.body.appendChild(imgBanana);

document.addEventListener(
  "click",
  function (ev) {
    imgBanana.style.transform = "translateY(" + (ev.clientY - 25) + "px)";
    imgBanana.style.transform += "translateX(" + (ev.clientX - 25) + "px)";
  },
  false
);
