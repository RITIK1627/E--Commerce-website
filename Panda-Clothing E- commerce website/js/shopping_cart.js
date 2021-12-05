var noti = document.querySelector('h1');
	var select = document.querySelector('.select');
    var cost = document.getElementsByClassName('price-text-style')
	var button = document.getElementsByClassName('btn penguin-btn');
	for(var but of button){
        but.addEventListener('click', (e)=>{
            // console log the event
            console.log(e);
            // give alert message button was clicked
            console.log(button);
            console.log(cost);
            try{
            // var button_name = e.target.innerText;
            // var button_cost = e.target.parentElement.parentElement.parentElement.children[1].innerText;
            var button_id = e.target.parentElement.parentElement.parentElement.children[2].innerText;
            // console.log(button_id);
            // console.log(button_name);
            // console.log(button_cost);
            alert('The cost is: ' + button_id);
            }
            catch(err){
                console.log(err);
                location.reload();
            }
        })
        
	}