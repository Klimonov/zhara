<?
    $to = 'mail@mail.ru';
    $subject = 'Заявка с сайта';
    $message = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
            <body>
                <p>Имя: '.$_POST['name'].'</p>
                <p>Телефон: '.$_POST['phone'].'</p>
                <p>Заголовок отзыва: '.$_POST['testimonial-title'].'</p>
                <p>Отзыв: '.$_POST['testimonial-message'].'</p>
                <p>Сообщение: '.$_POST['text'].'</p>
                <p>Email: '.$_POST['email'].'</p>
                <p>Время'.$_POST['end'].'</p>
                <p>Дата'.$_POST['start'].'</p>
                <p>Мастер'.$_POST['room-type'].'</p>
                <p>Комната'.$_POST['guest'].'</p>
                
            </body>
        </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Сайт Жара <mail@mail.ru>\r\n";
    mail($to, $subject, $message, $headers);