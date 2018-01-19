// Code goes here

//Input cat data
const catsData = [
    {
      id: 0, //Unique identifier for cat
      name: 'Billi 1', //name of cat
      imageURL: 'http://www.catster.com/wp-content/uploads/2017/06/small-kitten-meowing.jpg', // Image URL
      clickCount: 0 //number of times it has been clicked
    },
    {
      id: 1,
      name: 'Billi 2',
      imageURL: 'http://globalmedicalco.com/photos/globalmedicalco/6/28221.jpg',
      clickCount: 0
    }
  ];
  
  //Function called on load, parses data and adds cat to dom
  function onLoad(){
    const container = document.getElementById('container');
    catsData.forEach(cat => {
      let catDiv = `<div>
                      <h3>${cat.name}</h3>
                      <img src="${cat.imageURL}" onClick="increment(event, ${cat.id})"/>
                      <span></span>
                    </div>`;
      container.insertAdjacentHTML('beforeend', catDiv);
    });
  }
  
  /**on click function for cats  which increments cat counter
   * @param{Event} event click event for cat
   * @param{Number} catid Cat unique identifier
   * */
  function increment(event, catid) {
    const target = event.target.parentElement;
     const cat = catsData[Number(catid)];
    cat.clickCount = cat.clickCount + 1;
    target.children[2].innerHTML = cat.clickCount;
  }
   