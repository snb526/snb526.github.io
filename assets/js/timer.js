<script>
Function changeValue() {
  document.getElementById("timer").innerHTML = ++value;
}
 
var timerInterval = null;
function start () {
  stop();
  value = 0;
  timerInterval = setInterval(changeValue, 1000);  
}
var stop = function() {
  clearInterval(timerInterval );
}
</script>