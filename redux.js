
let defaultState = "ㅇㅅㅇ";


// function faceChangerReducer(state = {face: "ㅇㅅㅇ"}, action){
function faceChangerReducer(state = defaultState, action){

  switch(action.type){
    case "HAPPY":
      return action.payload
    case "SAD":
      return action.payload
    case "ANGRY":
      return action.payload
    case "CONFUSED":
      return action.payload

    default:
      return  state;
  }

}

const store = Redux.createStore(faceChangerReducer)



window.onload = function(){
  // console.log("this is store getstate", store.getState())
  const $angryButton =  $('#angry');
  const $happyButton = $('#happy');
  const $sadButton = $('#sad');
  const  $confusedButton = $('#confused');
  const $stateDiv = $('.state');

//redux dispatches that change 'face' state and appends new face to DOM

  $angryButton.on('click', function(){
    store.dispatch({type:"ANGRY", payload:"ಠ▃ಠ"});
    let  currentState = store.getState()
    // console.log("this is current state", currentState.face);
    // console.log("this is typeof current state", typeof currentState.face);
    $stateDiv.text(currentState);
  });
  
  $happyButton.on('click', function(){
    store.dispatch({type:"HAPPY", payload:"ʕ·ᴥ·ʔ"});
    let  currentState = store.getState();
    $stateDiv.text(currentState);
  });
  
  $sadButton.on('click', function(){
    store.dispatch({type:"SAD", payload:"(T⌓T)"});
    let  currentState = store.getState();
    $stateDiv.text(currentState);
  });

  $confusedButton.on('click', function(){
    store.dispatch({type:"CONFUSED", payload:"(⊙_☉)"});
    let  currentState = store.getState();
    $stateDiv.text(currentState);
  });


  $angryButton.on('click', function(){
    store.dispatch({type:"ANGRY", payload:"ಠ▃ಠ"});
    let  currentState = store.getState();
    $stateDiv.text(currentState);
  });

  //subscribe functions on change = LOL WUT

  //select current state --> uses getstate
  //if current  state is different than initial state, do a thing (callback function?) in our case, change background color css 

  // $angryButton.on('change', function(){
  //   store.dispatch({type:"ANGRY", payload:"ಠ▃ಠ"});
  //   let  currentState = store.getState();
  //   $stateDiv.text(currentState);
  // });


//end onload
}



