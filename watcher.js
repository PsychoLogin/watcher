(function() {

    let input = document.getElementsByTagName('input')[0];
      input.addEventListener('keypress', function(e) {
            console.log(e.timeStamp + ': '+e.key);
              });
})();
