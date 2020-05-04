function faceChangerReducer(state = "ㅇㅅㅇ", action){
  switch(action.type){
    case "HAPPY":
      return  action.payload
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
  const $angryButton =  $('#angry');
  const $happyButton = $('#happy');
  const $sadButton = $('#sad');
  const  $confusedButton = $('#confused');
  const $stateDiv = $('.state');


  $angryButton.on('click', function(){
    store.dispatch({type:"ANGRY", payload:"ಠ▃ಠ"});
    let  currentState = store.getState();
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

}



