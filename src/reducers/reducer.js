var matchedResults = []
const INITIAL_STATE = {
  fruits:  [
    {
      "label": "Apple",
      "value": "Apple",
      "origin": "North America",
      "taste": "Sweet"
    },
    {
      "label": "Banana",
      "value": "Banana",
      "origin": "Southeast Asia",
      "taste": "Sweet"
    },
    {
      "label": "Orange",
      "value": "Orange",
      "origin": "Southeast Asia",
      "taste": "Citrus"
    },
    {
      "label": "Grapes",
      "value": "Grapes",
      "origin": "Europe",
      "taste": "Sweet"
    },
    {
      "label": "Strawberry",
      "value": "Strawberry",
      "origin": "North America",
      "taste": "Sweet"
    }
  ]
};

function autocomplete(searchTerm, array) {
  // Create an empty array to store the matched results.
  matchedResults = [];
  // Iterate through the array and find any entries that match the search term.
  for (let i = 0; i < array.length; i++) {
    if (array[i].label.toLowerCase().startsWith(searchTerm.toLowerCase())) {
      matchedResults.push(array[i]);
    }
  }
  // Return the matched results.
  console.log(matchedResults)
  return matchedResults;
}

function fruitReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SEARCH_SET" : 
    let results = autocomplete(action.payload,state.fruits)
    return {
      results,
      ...state
    }
    default: return state;
  }
}

export default fruitReducer;