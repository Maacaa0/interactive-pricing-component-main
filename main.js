const rangeInput = document.getElementById("main-range");
const toggleBox = document.querySelector(`input[type="checkbox"]`);
const views = document.getElementById("page-views");
const value = document.getElementById("value");

let prices = {
  1:"8",
  2:"12",
  3:"16",
  4:"24",
  5:"36"
}

let pageViews = {
  1:"10K",
  2:"50K",
  3:"100K",
  4:"500K",
  5:"1M"  
}

//25% DISCOUNT TOGGLE FUNCTION
toggleBox.addEventListener("click", function() {
  if (toggleBox.checked) {
    value.textContent = prices[rangeInput.value] - (prices[rangeInput.value]/100 * 25) + ".00"
  } else {
    value.textContent = prices[rangeInput.value] + ".00"
  }

//animations
  views.parentElement.animate([
    { opacity: 0},
    { transform: 'translateX(-5px)' },
    { opacity: 1},
    { transform: 'translateX(0)' }
  ], {duration: 100});

  value.parentElement.animate([
    { opacity: 0},
    { transform: 'translateX(5px)' },{opacity: 1},
    { transform: 'translateX(0)' }
  ], {duration: 100});
})

// TEXT CONTENTS OF VIEWS AND PRICE
function priceForViews() {  
  if (toggleBox.checked) {
    value.textContent = prices[rangeInput.value] - (prices[rangeInput.value]/100 * 25) + ".00"
  } else {
    value.textContent = prices[rangeInput.value] + ".00"
  }
  views.textContent = pageViews[rangeInput.value]
  

  //animations
  views.parentElement.animate([
    { opacity: 0},
    { transform: 'translateX(-5px)' },
    { opacity: 1},
    { transform: 'translateX(0)' }
  ], {duration: 100});

  value.parentElement.animate([
    // keyframes
    { opacity: 0},
    { transform: 'translateX(5px)' },
    { opacity: 1},
    { transform: 'translateX(0)' }
  ], {duration: 100});
}


// RANGE INPUT BAR COLOR CHANGE + ALL DATA CHANGE
function changeColor(e) {
    const min = e.target.min
    const max = e.target.max
    const val = e.target.value
  
  e.target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
  priceForViews()
}



rangeInput.addEventListener("input", changeColor);
