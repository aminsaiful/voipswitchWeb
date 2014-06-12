/**
 * <p>Title: check.js</p>
 * <p>Description: ��Ч�Լ��鹫��js</p>
 * <p>Copyright: Copyright (c) 2003.7</p>
 * <p>Company: newsease</p>
 * @author zz
 * @version 1.0
 */
var	istype_retstr="";
var iMaxLen = 32;
function trim(sVal){
	var s = sVal;
	if(s.substring(0,1)==" ")
		s = s.substring(1,s.length);
	if(s.substring(s.length-1,s.length)==" ")
		s = s.substring(0,s.length-1);
	return s;
}

// Detect input argument is number? input = String
function isNumberInt(In_Str)
{
	StrLen=In_Str.length;
	var	Ret_Value = true;
	for (i=0; i<StrLen; i++)
	{
		FirstCha = escape(In_Str.charAt(i));
		if ((FirstCha < "0") || (FirstCha > "9"))
		{
			istype_retstr='���ݴ���,�������ֵ��ֵ�ķ�Χ��0-999999';

			return false;
		}
	  		
	}
	if(parseInt(In_Str) < 0)
	{
		istype_retstr='��������������ֵ';
		return false;
	}
	if(parseInt(In_Str) > 999999)
	{
		istype_retstr='���ݴ���,�������ֵ��Χ��0-999999';
		return false;
	}
	return true;
}

function isDecimal(In_Str)
{
	StrLen=In_Str.length;
	var	Ret_Value = true;
	var	Float_Value;
	var	Str_Float_Value;

	if (isNaN(In_Str) == true)
	{
		return false;
	}
	if(parseFloat(In_Str) < 0)
	{
		istype_retstr="��������������ֵ";
 		return false;
	}
	if(parseFloat(In_Str) > 9999999)
	{
		istype_retstr='���ݴ���,�������ֵ��ֵ�ķ�Χ��0-9999999';

		return false;
	}
	return true;
}
function isDouble(In_Str)
{
	StrLen=In_Str.length;
	var	Ret_Value = true;
	var	Float_Value;
	var	Str_Float_Value;

	if (isNaN(In_Str) == true)
	{
		return false;
	}
	if(parseFloat(In_Str) > 9999999)
	{
		istype_retstr='���ݴ���,�������ֵ��ֵ�ķ�Χ��0-9999999';

		return false;
	}
	return true;
}

function isValidString(s)
{
 	var errorChar;
	var badChar = "\'\"^&|=+!^~`"; 
	
 	if (isEmpty(s))
 	{
 		return true;
 	}
	//is s contain invalid characters
	//Validate the user name
	errorChar = isCharsInBagEx( s, badChar)
    if (errorChar == false )
	{
		istype_retstr='��������' + badChar ;
		return false;
	} 	
	return true;
}

function isCharsInBagEx (s, bag)
{  
  var i,c;
  // Search through string's characters one by one.
  // If character is in bag, append to returnString.
  for (i = 0; i < s.length; i++)
  {   
	    c = s.charAt(i);
		if (bag.indexOf(c) > -1)
		{
	        return false;
	    }
  }
  return true;
}
function isValidMail(s)
{
 	var errorChar;
	var badChar = "\'\"^&|][{}=+()!^<>~`"; 
	
 	if (isEmpty(s))
 	{
 		return true;
 	}
	//is s contain invalid characters
	//Validate the user name
	errorChar = isCharsInBagEx( s, badChar)
    if (errorChar == false )
	{
		istype_retstr='��������' + badChar ;
		return false;
	}
	if(s.indexOf("@") == -1)
	{
		istype_retstr='�ʼ���ַ�����@';
		return false;
	}
	if(s.indexOf(".") == -1)
	{
		istype_retstr='�ʼ���ַ�����.';
		return false;
	}
	return true;
}
function isNumber(In_Str)
{
	StrLen=In_Str.length;
	var	Ret_Value = true;
	for (i=0; i<StrLen; i++)
	{
		FirstCha = escape(In_Str.charAt(i));
		if ((FirstCha < "0") || (FirstCha > "9"))
		{
			istype_retstr='���ݴ���,ֻ������0-9������';

			return false;
		}
	  		
	}

	return true;
}
//����������Ƿ�Ϸ�
function ck_Length(Maxlength, value){

	len = 0;
	str = "";

	valLen = value.length;
	
	if(valLen==0){
		return true;
	}
	
	// change "\'" to "\��"(Chinese)
	for(i=0;i<valLen;i++)
	{
		char=escape(value.charAt(i));
		if(char=="%27")
		{
			str+=unescape("%u2018");
		}
		else
			str+=value.charAt(i);
		if(char=="%22")
		{
			str+=unescape("%u201c");
		}
		else
			str+=value.charAt(i);
		//
		if(char.length==6 || char=="%27" || char=="%22")
		{
			len+=2;
		}
		else
			len++;
	}
	//
	if(len<=Maxlength)
	{
		return str;

	}
	else
		return false;
}
function split(In_Str,sStr){
	var arr;
	arr = new Array();
	while(In_Str.indexOf(sStr)!=-1){
		arr[arr.length]=In_Str.substring(0,In_Str.indexOf(sStr));
		In_Str = In_Str.substring(In_Str.indexOf(sStr)+sStr.length);
	}
	if(In_Str != "" && In_Str != null)
		arr[arr.length]=In_Str;
	return arr;
}
function CheckIpNumber(In_Str)
{
	StrLen=In_Str.length;
	var	Ret_Value = true;
	for (i=0; i<StrLen; i++)
	{
		FirstCha = escape(In_Str.charAt(i));
		if ((FirstCha < "0") || (FirstCha > "9"))
		{
			return false;
		}
	}
	if(parseInt(In_Str)>255){
		return false;
	}
	return true;
}
function isIp(In_Str){
	var ipArr = split(In_Str,".");
	if(ipArr.length !=4){
		istype_retstr = "ip��ַ���벻�Ϸ�"
		return false;
	}
	for(var i=0;i<ipArr.length;i++){
		if(!CheckIpNumber(ipArr[i])){
			istype_retstr = "ip��ַ���벻�Ϸ�"
			return false;
		}
	}

	return true;
}
function ck_Type(Type, value)
{
	istype_retstr="";
	switch(Type.toUpperCase())
	{
		case "DECIMAL":
			result = isDecimal(value);
			break;
		case "INTEGER":
			result = isNumberInt(value);
			break;
		case "DOUBLE":
			result = isDouble(value);
			break;
		case "STRING":
			result = isValidString(value);
			break;
		case "MAIL":
			result = isValidMail(value);
			break;
		case "NUMBER":
			result = isNumber(value);
			break;
		case "IP":
			result = isIp(value);
			break;
		case "TEXTAREA":
			result = true;
			break;
	}
	return result;
}

function Check_Field(Field_name,Field_Type,Field_value,can_null,Field_length,Filed_FalseOutStr)
{
Field_value = trim(Field_value);
try{
	var	ck_type_ret="";
	var Field_Type_str="";
	switch(Field_Type.toUpperCase())
	{
		case "DECIMAL":
			Field_Type_str = "���";
			break;
		case "INTEGER":
			Field_Type_str = "����";
			break;
		case "STRING":
			Field_Type_str = "�ַ�";
			break;
		case "MAIL":
			Field_Type_str = "�ʼ�";
			break;
		case "NUMBER":
			Field_Type_str = "����";
			break;
		case "TEXTAREA":
			Field_Type_str = "������";
			break;
		case "IP":
			Field_Type_str = "IP";
			break;
	}

/*
	if( escape(Field_value.charAt(0))=="%20" )
	{
		alert("�����ڵ�һ���ַ�����ո�!"); 
	 	Field_name.focus(); 
	 	return false; 
	}
	if( escape(Field_value.charAt(Field_value.length-1))=="%20" )
	{
		alert("���������һ���ַ�����ո�!"); 
	 	Field_name.focus(); 
	 	return false; 
	}
*/
	if(can_null.toString().toUpperCase() =="FALSE" && isEmpty(Field_value) )
	{
		alert(Filed_FalseOutStr);
		
	 	Field_name.focus();
	 	return false;

	}
	if(!ck_Length(Field_length, Field_value))
	{ 
		alert('��������ݳ��ȹ���,���ݳ���Ӧ��Ϊ' + Field_length + '���ַ�,' +  Filed_FalseOutStr); 
	 	Field_name.focus(); 
	 	return false; 
	}
	ck_type_ret = ck_Type(Field_Type, Field_value);
	if( ck_type_ret == false)
	{ 
		alert(  Filed_FalseOutStr + ",����ӦΪ" + Field_Type_str + "��," + istype_retstr); 
	 	Field_name.focus(); 
	 	return false; 
	}
	//trimSpace(Field_name, Field_value); 
	//DelReturn(Field_name, Field_value);
	Field_name.value = Field_value;
	return true;
  }
 catch(e)
 {
	;
 }
}

/////////////no focus
function Check_Fieldnofocus(Field_name,Field_Type,Field_value,can_null,Field_length,Filed_FalseOutStr)
{
try{
	var	ck_type_ret="";
	var Field_Type_str="";
	switch(Field_Type.toUpperCase())
	{
		case "DECIMAL":
			Field_Type_str = "���";
			break;
		case "INTEGER":
			Field_Type_str = "����";
			break;
		case "STRING":
			Field_Type_str = "�ַ�";
			break;
		case "MAIL":
			Field_Type_str = "�ʼ�";
			break;
		case "NUMBER":
			Field_Type_str = "����";
			break;
		case "TEXTAREA":
			Field_Type_str = "������";
			break;
		case "IP":
			Field_Type_str = "IP";
			break;
	}


	if( escape(Field_value.charAt(0))=="%20" )
	{
		alert("�����ڵ�һ���ַ�����ո�!"); 
	 	return false; 
	}
	if( escape(Field_value.charAt(Field_value.length-1))=="%20" )
	{
		alert("���������һ���ַ�����ո�!"); 
	 	return false; 
	}

	if(can_null.toString().toUpperCase() =="FALSE" && isEmpty(Field_value) )
	{
		alert(Filed_FalseOutStr);
	 	return false;

	}
	if(!ck_Length(Field_length, Field_value))
	{ 
		alert('��������ݳ��ȹ���,���ݳ���Ӧ��Ϊ' + Field_length + '���ַ�,' +  Filed_FalseOutStr); 
	 	return false; 
	}
	ck_type_ret = ck_Type(Field_Type, Field_value);
	if( ck_type_ret == false)
	{ 
		alert(  Filed_FalseOutStr + ",����ӦΪ" + Field_Type_str + "��," + istype_retstr); 
	 	return false; 
	}
	//trimSpace(Field_name, Field_value); 
	//DelReturn(Field_name, Field_value);
	return true;
  }
 catch(e)
 {
	;
 }
}
////////////////
function isEmpty(s)
{  
	return ((s == null) || (s.length == 0))
}

function DelReturn(Field, Str_Value)
{

	var 	Temp_Str = escape(Str_Value);
	var	new_repexp = /%0D%0A/g;
	Str_Value = Temp_Str.replace(new_repexp,escape(''));
	Str_Value = unescape(Str_Value);
	Field.value = Str_Value;
	
}

function trimSpace(Field, Str_Value){
	strLen = Str_Value.length;
	spaceLen = 0;
	strResult = "";
	// Left Trim
	for(loopxxx=0; loopxxx<strLen; loopxxx++){
		if( escape(Str_Value.charAt(loopxxx))=="%20" ){
			spaceLen++;
		}else{
			break;
		}
	}
	strResult = Str_Value.substring(spaceLen, strLen);
	// Right Trim
	spaceLen = 0;
	strLen = strResult.length;
	for( loopxxx=strLen; loopxxx>=0; loopxxx-- ){
		if( escape(Str_Value.charAt(loopxxx))=="%20" ){
			spaceLen++;
		}else{
			break;
		}
	}
	rightLen = strLen - spaceLen;
	strResult = strResult.substring(0, rightLen);
	//
	Field.value = strResult;
}
