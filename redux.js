
let defaultState = {face:"ㅇㅅㅇ" };


// function faceChangerReducer(state = {face: "ㅇㅅㅇ"}, action){
function faceChangerReducer(state = defaultState, action){

  switch(action.type){
    case "HAPPY":
      return  {...state, face: action.payload}
    case "SAD":
      return {...state, face: action.payload}
    case "ANGRY":
      return {...state, face: action.payload}
    case "CONFUSED":
      return {...state, face: action.payload}
    default:
      return  state;
  }

}

const store = Redux.createStore(faceChangerReducer)



window.onload = function(){
  const $angryButton =  $('#angry');
  const $happyButton = $('#happy');
  const $sadButton = $('#sad');
  const  $confusedButton = $('#confused');
  const $stateDiv = $('.state');

//redux dispatches that change 'face' state and appends new face to DOM

  $angryButton.on('click', function(){
    store.dispatch({type:"ANGRY", payload:"ಠ▃ಠ"});
    let  currentState = store.getState().face;
    console.log("this is current state", currentState);
    $stateDiv.html(currentState.face);   //<-----coming back as [object object] even though it console logs 
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



