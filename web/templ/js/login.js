var frmName;
var frm;
frmName = "LoginForm";
function checkdate(){
	var frm;
	frm = LoginForm;
	if(!Check_Field(frm.txtUser,"string",frm.txtUser.value,false,iMaxLen,"��������ȷ���û���"))
		return;
	if(!Check_Field(frm.p2,"string",frm.p2.value,false,iMaxLen,"��������ȷ������"))
		return;

	frm.txtPswd.value = frm.p2.value;
	frm.submit()
}
function bodyload(){
	on_load();
	frm.p2.value = "";
	frm.txtPswd.value="";
}
function key_press(){
	if(event.keyCode==13)
		checkdate();
}