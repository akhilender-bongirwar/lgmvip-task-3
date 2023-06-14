var addBtn = document.getElementById('add-btn')
var dplay = document.getElementById('display')

var row = 1;
addBtn.onclick = function (){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const img = document.createElement('img');
    const gndr = document.querySelector('input[type="radio"]:checked').value;
    console.log(name,email,gndr);
    if(name!='' && email!=''){
        var data = [];
        
        console.log(data);
        const description = `<p><strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Gender:</strong> ${document.querySelector('input[type="radio"]:checked').value}
        <br><strong>Skills:</strong> ${data.join(', ')}</p>`
        var newRow = dplay.insertRow(row);
        var cell0 = newRow.insertCell(0)
        var cell1 = newRow.insertCell(1)
        if(gndr == "Male"){
            img.setAttribute('src', 'https://static.vecteezy.com/system/resources/previews/002/002/427/original/man-avatar-character-isolated-icon-free-vector.jpg')
            img.setAttribute('alt', 'Male')
        }else{
            img.setAttribute('src', 'https://img.freepik.com/premium-vector/girl-s-face-with-beautiful-smile-female-avatar-website-social-network_499739-527.jpg')
            img.setAttribute('alt', 'Female') 
        }
        cell0.innerHTML = description;
        cell1.appendChild(img);
        row++;
        document.getElementById('input-form').reset();
        name=email='';
    }
    else{
        alert("Please fill all the fields");
    }
}
