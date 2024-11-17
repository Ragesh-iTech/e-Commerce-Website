let  password = document.getElementById("password");
    let check = document.getElementById('check');
    check.addEventListener('click',function(){
        if(password.type==='password'){
            password.type='text';
            
        }else{
            password.type='password';
            
        }
        });

        const popup = document.
        getElementById("popup");
        const btn = document.
        getElementById("login");
        
        function openPopup(){
            popup.style.top  = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.visibility = "visible";
            // popup.style =  "popup"
        };
        function closePopup(){
            popup.style.top  = "0";
            popup.style.transform = "translate(-50%, -50%) scale(0.1)";
            popup.style.visibility = "hidden";
            // popup.style =  "popup"
        };        