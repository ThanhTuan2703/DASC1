function signup() {
    let username = document.getElementById('username').value;
    let sdt = document.getElementById('sdt').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (!username || !sdt || !email || !password) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }

    let User = {
        username: username,
        sdt: sdt,
        email: email,
        password: password
    };
    let json = JSON.stringify(User);
    localStorage.setItem(username, json);
    window.location = 'formSignin.html';
    alert('Đăng kí thành công');
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let User = localStorage.getItem(username);
    let data = JSON.parse(User);

    if (username == data.username && password == data.password) {
        window.location = 'index.html';
        alert('Đăng nhập thành công');

    }

}