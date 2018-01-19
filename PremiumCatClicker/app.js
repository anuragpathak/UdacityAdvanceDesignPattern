// Code goes here
// Input cat data
/* globals document fetch */
let catsData;

function fetchCatData() {
  return fetch('./cat.json').then(response => response.json());
}

// Function called on load, parses data and adds cat to dom
/* exported onLoad */
function onLoad() {
  const container = document.getElementById('catlist');
  fetchCatData().then((cats) => {
    catsData = cats;
    cats.forEach((cat) => {
      const catDiv = `<ul class="cat-entry">
                        <li class="cat-name" onClick="showCatImage(${cat.id})">${cat.name}</li>
                      </ul>`;
      container.insertAdjacentHTML('beforeend', catDiv);
    });
  });
}

function showCorrectCatCounter(catid) {
  const countContainer = document.getElementById('countcontainer');
  countContainer.innerHTML = catsData[Number(catid)].clickCount;
}

function showCatImage(catid) {
  const imagecontainer = document.getElementById('imagecontainer');
  const catImageDiv = `<img src="${catsData[Number(catid)].imageURL}" onClick="increment(event, ${catid})"/>`;
  imagecontainer.innerHTML = catImageDiv;
  showCorrectCatCounter(catid);
}

/** on click function for cats  which increments cat counter
   * @param{Event} event click event for cat
   * @param{Number} catid Cat unique identifier
   * */
function increment(event, catid) {
  const cat = catsData[Number(catid)];
  cat.clickCount += 1;
  showCorrectCatCounter(catid);
}

