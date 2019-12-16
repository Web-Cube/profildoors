<?php
if (isset($_POST['buy'])) { // проверяем была ли нажата кнопка ОТПРАВИТЬ
 // получаем данные из формы и заносим их в массивы
 // здесь же нужно обработать все данные на предмет длины строки, запрещенных символов и так далее
 $subj=$_POST['subj'];
 $color=$_POST['color'];
 $phone=$_POST['phone'];
 // формируем заголовок и тело письма
 $picture=""; 
 $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
 $headers .= "From: profidoors.ru <noreply@sitename.com>\r\n"; 
 $thm = "$subj";
 $msg="	Цвет: <strong>$color</strong><br>
		Телефон: <strong>$phone</strong>";
 $mail_to="misha1oboronov@gmail.ru"; // почта куда отправлять письмо
 // Отправляем почтовое сообщение
 if(empty($picture)) mail($mail_to, $thm, $msg, $headers);
} else;
?>
<?php
if (isset($_POST['quiz'])) { // проверяем была ли нажата кнопка ОТПРАВИТЬ
 // получаем данные из формы и заносим их в массивы
 // здесь же нужно обработать все данные на предмет длины строки, запрещенных символов и так далее
 $subj=$_POST['subj'];
 $style=$_POST['style'];
 $color=$_POST['color'];
 $counter=$_POST['counter'];
 $service=$_POST['service'];
 $name=$_POST['name'];
 $phone=$_POST['phone'];
 // формируем заголовок и тело письма
 $picture=""; 
 $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
 $headers .= "From: profidoors.ru <noreply@sitename.com>\r\n"; 
 $thm = "$subj";
 $msg="	Стиль дверей: <strong>$style</strong><br>
		Оттенки: <strong>$color</strong><br>
		Количество: <strong>$counter</strong><br>
		Услуги: <strong>$service</strong><br>
		Имя: <strong>$name</strong><br>
		Телефон: <strong>$phone</strong>";
 $mail_to="misha1oboronov@gmail.ru"; // почта куда отправлять письмо
 // Отправляем почтовое сообщение
 if(empty($picture)) mail($mail_to, $thm, $msg, $headers);
} else;
?>
<?php
if (isset($_POST['send'])) { // проверяем была ли нажата кнопка ОТПРАВИТЬ
 // получаем данные из формы и заносим их в массивы
 // здесь же нужно обработать все данные на предмет длины строки, запрещенных символов и так далее
 $subj=$_POST['subj'];
 $name=$_POST['name'];
 $phone=$_POST['phone'];
 // формируем заголовок и тело письма
 $picture=""; 
 $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
 $headers .= "From: profidoors.ru <noreply@sitename.com>\r\n"; 
 $thm = "$subj";
 $msg="	Имя: <strong>$name</strong><br>
		Телефон: <strong>$phone</strong>";
 $mail_to="misha1oboronov@gmail.ru"; // почта куда отправлять письмо
 // Отправляем почтовое сообщение
 if(empty($picture)) mail($mail_to, $thm, $msg, $headers);
} else;
?>
<?php
if (isset($_POST['catalog'])) { // проверяем была ли нажата кнопка ОТПРАВИТЬ
 // получаем данные из формы и заносим их в массивы
 // здесь же нужно обработать все данные на предмет длины строки, запрещенных символов и так далее
 $subj=$_POST['subj'];
 $email=$_POST['email'];
 $phone=$_POST['phone'];
 // формируем заголовок и тело письма
 $picture=""; 
 $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
 $headers .= "From: profidoors.ru <noreply@sitename.com>\r\n"; 
 $thm = "$subj";
 $msg="	E-mail: <strong>$email</strong><br>
		Телефон: <strong>$phone</strong>";
 $mail_to="misha1oboronov@gmail.ru"; // почта куда отправлять письмо
 // Отправляем почтовое сообщение
 if(empty($picture)) mail($mail_to, $thm, $msg, $headers);
} else;
?>