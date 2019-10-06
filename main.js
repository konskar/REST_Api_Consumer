function clearUsers(){
    document.getElementById('user_data_placeholder').innerHTML='';
    disable_clearUsers_button();
}


async function fetchUsers(){
    clearUsers();

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await response.json();

    users.forEach((user)=> {
        var user_div = document.createElement("div");
        user_div.id = "user_data";
        user_div.innerHTML = `Name: ${user.name}, Email: ${user.email}`;
        document.getElementById("user_data_placeholder").appendChild(user_div);
    });

    enable_clearUsers_button();
}


function disable_clearUsers_button(){

    document.getElementById("clearUsers_btn").disabled = true;
    document.getElementById("clearUsers_btn").className="clearUsers_btn_disabled button";
}

function enable_clearUsers_button(){
    document.getElementById("clearUsers_btn").disabled = false;
    document.getElementById("clearUsers_btn").className="clearUsers_btn_enabled button";
}