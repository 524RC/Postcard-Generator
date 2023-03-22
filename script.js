let states = document.getElementById('states');
states.onchange = function(){
    /*this one gets the number value of the state that is selected*/
    console.log('states index: ' + states.selectedIndex);
    /*this one gets gets the value of the state that is selected and states that name of state in the console.*/
    console.log('states index:' + states.options[states.selectedIndex].text);
    //This one gets the image of the state that is selected by getting the value and placing the id in the image
    console.log('img/' + states.value + '@2x.jpg');
// it gets the id of the background image and then gets the style and changes the image based on the state that is selected
    document.getElementById('postcard').style.backgroundImage = 'url(img/' + states.value + '@2x.jpg)';
//get the id that is needed to change then change the html of it and get the value that is selected and change the text with teh value of states
    document.getElementById('state-heading').innerHTML = states.options[states.selectedIndex].text
// get the id that of the text and change the html to a string 
    document.getElementById('greeting').innerHTML = 'Yo Mom called from'
}