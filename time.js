<script>
// scripts here:
window.onload = function submitQuiz(){
//Code for Timer	
		var seconds_left = 30;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = "00:"+ (--seconds_left);

    if (seconds_left <= 0)
    {
        clearInterval(interval);
        document.getElementById('timer_div').innerHTML = 'Yours TimeOut...';
    }
}, 1000);


		setTimeout(function(){document.getElementById('submitButton').click(); }, 3000);
 
};
</script>
