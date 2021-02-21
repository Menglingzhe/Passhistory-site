function register() {
    var username = document.getElementById("username").value;  //用户名
    var realname = document.getElementById("realname").value;  //姓名
    var psw = document.getElementById("psw").value;  //密码	
    var p = document.getElementById("psw-enter").value;
    var phone = document.getElementById("phone").value;  //联系电话
    var email = document.getElementById("email").value;  //email邮箱

    var numji = 0;

    //账号的判断
    if (username == "") {
        document.getElementById("usernames").innerHTML = "<font color='red'>账号不可以为空</font>";
        return false;
    }
    else if (username != "") {
        if (username.length < 9) {
            document.getElementById("usernames").innerHTML = "<font color='red'>账号至少9位</font>";
            username.slect();
            return false;
        }
        else if (isNaN(username)) {
            document.getElementById("usernames").innerHTML = "<font color='red'>账号必须为数字</font>";
            return false;
        }
        else {
            document.getElementById("usernames").innerHTML = "<font color='green'>该账号可以使用</font>";
        }
    }

    //真实姓名
    if (realname == "") {
        document.getElementById("rnames").innerHTML = "<font color='red'>姓名不可以为空</font>";
        return false;
    }
    else if (realname.length >= 10) { 
        document.getElementById("rnames").innerHTML = "<font color='red'>姓名超出长度</font>";
        return false;
    }
    else {
        document.getElementById("rnames").innerHTML = "<font color='green'>姓名合法</font>";
    }



    //密码
    var isletter = /^[a-zA-Z]+$/;
    if (psw == "") {
        document.getElementById("psws").innerHTML = "<font color='red'>密码不可以为空</font>";
        return false;
    }
    else if (psw != "") {
        if (psw.length < 6) {
            document.getElementById("psws").innerHTML = "<font color='red'>密码至少六位</font>";
            return false;
        }
        else if (psw == username) {
            document.getElementById("psws").innerHTML = "<font color='red'>密码不能与用户名相同</font>";
            return false;
        }
        else if (!(isNaN(psw))) { 
            document.getElementById("psws").innerHTML = "<font color='red'>密码不能与全为数字</font>";
            return false;
        }
        else if (isletter.test(psw)) {
                document.getElementById("psws").innerHTML = "<font color='red'>密码不能与全为字母</font>";
                return false;
            }
        else {
            document.getElementById("psws").innerHTML = "<font color='green'>密码设置成功！</font>";
        }
    }

    //确认密码
    if (p != psw) {
        document.getElementById("psws-enter").innerHTML = "<font color='red'>密码与确认密码不同</font>";
        return false;
    }
    else {
        document.getElementById("psws-enter").innerHTML = "<font color='green'>确认密码输入正确</font>";
    }
    //性别
    if (document.registerform.sex[0].checked == false && document.registerform.sex[1].checked == false) {
        document.getElementById("sex-check").innerHTML = "<font color='red'>请选择性别</font>";
        return false;
    }
    else {
        document.getElementById("sex-check").innerHTML = "<font color='green'>性别已选择</font>";
    }


    //籍贯
    if (document.registerform.jiguan-name.selectedIndex == 0) {
        document.getElementById("jiguan").innerHTML = "<font color='red'>请选择籍贯</font>";
        return false;
    }
    document.getElementById("jiguan").innerHTML = "<font color='green'>籍贯选择成功</font>";

    //朝代爱好
    c = 0;
    for (var i = 0; i < 10; i++) {
        if (document.registerform.clove[i].checked == true)
            c++;
    }
    if (c < 3) {
        document.getElementById("chaodailove").innerHTML = "<font color='red'>请选择至少3项爱好朝代</font>";
        return false;
    }
    document.getElementById("chaodailove").innerHTML = "<font color='green'>爱好朝代选择成功</font>";

    //选择院系
    if (document.registerform.dept.selectedIndex == 0) {
        document.getElementById("yuanxi").innerHTML = "<font color='red'>请选择院系</font>";
        return false;
    }
    document.getElementById("yuanxi").innerHTML = "<font color='green'>院系选择成功</font>";

    //联系电话
    //正则表达式使用方法
    var reg = /^\d{11}$/;   //
    if (phone == "") {
        document.getElementById("phones").innerHTML = "<font color='red'>联系电话格不能为空</font>";
        return false;
    }
    if (phone != "") {
        if (!(reg.test(phone))) {
            document.getElementById("phones").innerHTML = "<font color='red'>联系电话格式不正确</font>";
            return false;
        }
        else {
            document.getElementById("phones").innerHTML = "<font color='green'>联系电话输入正确</font>";

        }
    }

    //邮箱验证
    var e = /^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/;
    if (email == "") {
        document.getElementById("emails").innerHTML = "<font color='red'>邮箱不能为空</font>";
        return false;
    }
    if (email != "") {
        if (!(e.test(email))) {
            document.getElementById("emails").innerHTML = "<font color='red'>邮箱格式不正确</font>";
            return false;
        }
        else {
            document.getElementById("emails").innerHTML = "<font color='green'>邮箱正确</font>";
            return true;
        }
    }

}



function signin() {
    var username = document.getElementById("username").value;  //用户名
    var psw = document.getElementById("psw").value;  //密码	
    
    /*用户名*/
    if (username == "") {
        document.getElementById("usernames").innerHTML = "<font color='red'>账号不可以为空</font>";
        return false;
    }
    else if (username != "") {
        if (username.length < 9) {
            document.getElementById("usernames").innerHTML = "<font color='red'>账号至少9位</font>";
            username.slect();
            return false;
        }
        else if (isNaN(username)) {
            document.getElementById("usernames").innerHTML = "<font color='red'>账号必须为数字</font>";
            return false;
        }
        else {
            document.getElementById("usernames").innerHTML = "<font color='green'>该账号格式正确</font>";
        }
    }
    /*密码*/
    var isletter = /^[a-zA-Z]+$/;
    if (psw == "") {
        document.getElementById("psws").innerHTML = "<font color='red'>密码不可以为空</font>";
        return false;
    }
    else if (psw != "") {
        if (psw.length < 6) {
            document.getElementById("psws").innerHTML = "<font color='red'>密码至少六位</font>";
            return false;
        }
        else if (psw == username) {
            document.getElementById("psws").innerHTML = "<font color='red'>密码不能与用户名相同</font>";
            return false;
        }
        else if (!(isNaN(psw))) {
            document.getElementById("psws").innerHTML = "<font color='red'>密码不能与全为数字</font>";
            return false;
        }
        else if (isletter.test(psw)) {
            document.getElementById("psws").innerHTML = "<font color='red'>密码不能与全为字母</font>";
            return false;
        }
        else {
            document.getElementById("psws").innerHTML = "<font color='green'>密码格式正确！</font>";
            return true;
        }
    }
}
function check2() {
    if (signin()) {
        document.getElementById('signform').submit();
        alert('登录成功');
        window.location.href = "../html/main.html";
        return true;
    }
    else {
        alert('登录信息缺失或有误')
        return false;
    }
}


function check() {
    if (register()) {
        document.getElementById('registerform').submit();
        alert('注册成功');
        window.location.href = "../html/main.html";
        return true;
    }
    else {
        alert('注册信息缺失或有误')
        return false;
    }
}



