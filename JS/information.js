/*是否带有小数*/
// 检验数字+点+数字
function    isDecimal(strValue )  {  
    var  objRegExp= /^\d+\.\d+$/;
    return  objRegExp.test(strValue);  
 }  
 
 /*校验是否中文名称组成 */
 function ischina(str) {
     var reg=/^[\u4E00-\u9FA5]{2,5}$/;   /*定义验证表达式*/
     return reg.test(str);     /*进行验证*/
 }
 
 /*校验是否全由8位数字组成 */
//  检验有八位数字并且都在0-9之间
 function isStudentNo(str) {
     var reg=/^[0-9]{8}$/;   /*定义验证表达式*/
     return reg.test(str);     /*进行验证*/
 }
 
 /*校验电话码格式 */
//  检查开头+2~3位数字+'-'+7~8位数字
//  或者是1开头第二位数字在3584中再加上9位数字
 function isTelCode(str) {
     var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
     return reg.test(str);
 }
 
 /*校验邮件地址是否合法 */
//  /w匹配包括下划线的任何单词字符+@+大小写和2到10个数字
// +（.任意2到4个小写字母）1到3段
 function IsEmail(str) {
     var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
     return reg.test(str);
 }
 
 
 function  fun1(){
     if(!isStudentNo(document.getElementById("sno").value)){
         alert("学生编号是8位数字");
         document.getElementById("sno").focus();
         return false;
     }
 
     if(!ischina(document.getElementById("username").value)){
         alert("学生姓名必须填写中文");
         document.getElementById("username").focus();
         return false;  
     }
 
     if(!IsEmail(document.getElementById("email").value)){
         alert("邮箱地址错误");
         document.getElementById("email").focus();
         return false;  
     }
 
     if(!isTelCode(document.getElementById("tel").value)){
         alert("电话号码不对");
         document.getElementById("tel").focus();
         return false;  
     }
 
     /*运行到这里说明验证通过返回true    submit提交按钮起作用提交表单*/
     alert("提交成功")
     return true;   // 这边设置禁止提交，实际项目需要改为 true
 }
/* ^从字符串开头进行匹配 
   $从字符串末尾进行匹配
   ()匹配的字符串
   []匹配的范围
   {}表示匹配的长度*/  