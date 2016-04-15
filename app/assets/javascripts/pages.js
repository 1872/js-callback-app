// console.log('first');

// setTimeout(function() {
//   console.log('second');
// }, 1000);

// console.log('third');

// setInterval(function() {
//   console.log("Hello");
// }, 3000);

function changeColors() {
  setTimeout(function() {
    document.getElementById('first').style['color'] = "red";

    setTimeout(function() {
      document.getElementById('second').style['color'] = "blue";
      
      setTimeout(function() {
        document.getElementById('third').style['color'] = "green";

        setTimeout(function() {
          document.getElementById('fourth').style['color'] = "purple";
          console.log('done!');
        }, 3000);

      }, 3000);
      
    }, 3000);


  }, 3000);
  console.log('start!');
}