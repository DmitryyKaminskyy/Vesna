<?php
header("Content-Type: text/html; charset=utf-8");
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$time_msk = htmlspecialchars($_POST["time_msk"]);
$city = htmlspecialchars($_POST["city"]);
$company = htmlspecialchars($_POST["company"]);
//$section = htmlspecialchars($_POST["section"]); //Здесь можно передать в поле hidden  с какой формы на странице была отправлена заявка

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "drakon2000@ukr.net";

$koren = $_SERVER['HTTP_HOST'];
$xls = $koren.'/leads.xls';
$txt = $koren.'/leads.txt';

$tema = "Заявка с сайта на обратный звонок";
$message_to_myemail = "Поступила новая заявка с сайта:
<table style='width: 100%;'>
	<tr style='background-color: #f8f8f8;'>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Имя</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$name</td>
	</tr>
	<tr>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Телефон</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$tel</td>
	</tr>
	<tr style='background-color: #f8f8f8;'>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Удобное время для звонка (по мск)</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$time_msk</td>
	</tr>
	<tr>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Город</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$city</td>
	</tr>
	<tr>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Компания</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$company</td>
	</tr>
	<tr style='background-color: #f8f8f8;'>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Источник</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$refferer</td>
	</tr>
</table><br>
<a download href='$koren/leads.xls'>Скачать полный список заявок в xls-формате</a><br><br>
<a download href='$koren/leads.txt'>Скачать полный список заявок в txt-формате</a><br>
";
mail($myemail, $tema, $message_to_myemail, "From: Vesna.ru <drakon2000@ukr.net> \r\n"."Content-type: text/html; charset=utf-8\r\n" );


// $tema = "Ваша заявка принята";
// $message_to_myemail = "
// Спасибо за оказанное нам доверие, наш администратор перезвонит вам в ближайшее время.

// ";
// $myemail = $email;
// mail($myemail, $tema, $message_to_myemail, "From: Sitename <drakon2000@ukr.net> \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


// $f = fopen("leads.xls", "a+");
// fwrite($f," <tr>");    
// fwrite($f," <td>$name</td> <td>$tel</td> <td>$time_msk</td> <td>$city</td> <td>$company</td> <td>$date / $time</td>");   
// fwrite($f," <td>$refferer</td>");    
// fwrite($f," </tr>");  
// fwrite($f," \n\n");    
// fclose($f);

$file = 'leads.xls';
$tofile = "'$name';'$tel';'$time_msk';'$city';'$company';'$date';'$time'\n";
$bom = "\xEF\xBB\xBF";
file_put_contents($file, $bom . $tofile . file_get_contents($file));

$f = fopen("leads.txt", "a+");
fwrite($f,"===================================================================\n
	Имя клиента: $name\n
	Телефон: $tel\n
	Удобное время для звонка (по мск): $time_msk\n
	Город: $city\n
	Компания: $company\n
	Время заявки: $date / $time\n
	Источник: $refferer\n\n");  
// fwrite($f," Имя клиента: $name\n\n");    
// fwrite($f," Телефон: $tel\n\n");
// fwrite($f," Удобное время для звонка (по мск): $time_msk\n\n");
// fwrite($f," Город: $city\n\n");
// fwrite($f," Компания: $company\n\n");
// fwrite($f," \n\n");    
fclose($f);

?>