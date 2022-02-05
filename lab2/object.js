const newContainer = function () {
    function ContentView() {
        this.fullName = document.getElementById("fullname").value;
        this.phone = document.getElementById("phone").value;
        this.age = document.getElementById("age").value;
    }

    var content = new ContentView();

    var scene = function () {
        parent = document.getElementById('parent'); 
        const container = document.createElement('div');
        container.classList.add('concatenate');
        container.innerHTML = `<h1>Full Name: ${content.fullName}</h1><h1>Age: ${content.age}</h1><h1>PhoneNo.: ${content.phone}</h1>`;
        parent.appendChild(container)
    }

    scene();
}

document.getElementById('submit').addEventListener('click',newContainer ); 

