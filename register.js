$(function(){
  var $name = $('#name'),
      $phone = $('#phone'),
      $pwd = $('#pwd'),
      $num = $('#num'),
      $msgname = $('#msgname'),
      $msgphone = $('#msgphone'),
      $msgpwd = $('#msgpwd'),
      $msgnum = $('#msgnum'),
      $code = $('#code'),
      $register = $('#register');
  function myname (){
      if($name.val() === ''){
        $msgname.html('用户名不能为空！');
        $name.select();
        return false;
      }
      if($name.val() !== ''){
        $msgname.html('');
      }
      if(!/^(?!(\d+)$)[\u4e00-\u9fffa-zA-Z\d\_]+$/.test($name.val())){
        $msgname.html('用户名仅支持中英文、数字和下划线 且不能为纯数字');
        $name.select();
        return false;
      } 
      return true;
  }
  
  function myphone (){
      if($phone.val() === ''){
        $msgphone.html('手机号不能为空！');
        $phone.select();
        return false;
      }
      if($phone.val() !== ''){
        $msgphone.html('');
      }
      if(!/^1[34578]\d{9}$/.test($phone.val())){
        $msgphone.html('手机号格式不正确');
        $phone.select();
        return false;
      }
      return true;
  }
  function mypwd(){
      if($pwd.val() !== ''){
        $msgpwd.html('');
      }
      if($pwd.val() === ''){
        $msgpwd.html('密码不能为空！');
        $pwd.select();
        return false;
      }
      if(!/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{8,14}$/.test($pwd.val())){
        $msgpwd.html('密码包含数字、英文和字符中的两种以上，长度为8-14');
        $pwd.select();
        return false;
      }
    return true;
  }
  function mynum(){
      if($num.val() !== ''){
        $msgnum.html('');
      }
      if($num.val() === ''){
        $msgnum.html('验证码不能为空！');
        $num.select();
        return false;
      }
      return true;
  }
  function check(){
    $name.focusout(myname);
    $phone.focusout(myphone);
    $pwd.focusout(mypwd);
    $num.focusout(mynum);
  }
  check();
  $register.click(function(){
    myname();
    myphone();
    mypwd();
    mynum();
  })
  $code.click(function(){
    var timer,
        i = 60;
    timer = setInterval(function(){
      i--;
      if(i === -1){
        clearInterval(timer);
        $code.val('发送验证码');
        $code.removeAttr('disabled'); 
        $msgnum.html('');
      }else{
        $code.attr('disabled',true);
        $msgnum.html('若未收到短信请确认手机号，并60s后再次尝试');
        $code.val('发送验证码('+i+'s后再次尝试)');
      }     
    },1000);

  })
})
