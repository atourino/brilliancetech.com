<?php

require __DIR__ . '/../lib/Slim/Slim.php';
require __DIR__ . '/../lib/TwigView.php';

TwigView::$twigDirectory = __DIR__ . '/../lib/Twig';
TwigView::$twigOptions = array('debug' => true);

Slim::init(
    array(
        'view'           => 'TwigView',
        'templates.path' => __DIR__ . '/templates'
    )
);

require __DIR__ . '/../config/config.php';

//GET route
Slim::get('/', function () {
    Slim::render('index.html');
});

Slim::post('/contact', function () {
    if (!is_null(Slim::request()->post('email_2')) && Slim::request()->post('email_2') != '') {
        // form submission is spam and is ignored.
        Slim::redirect('/');
    }

    if (!is_null(Slim::request()->post('cf_name'))
        && !is_null(Slim::request()->post('cf_email'))
        && !is_null(Slim::request()->post('cf_message'))
        && (preg_match("/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/", Slim::request()->post('cf_email')))
    ) {
        require(__DIR__ . '/../lib/Postmark/Postmark.php');
        $body  = "From: " . $_POST["cf_name"] . " (".$_POST['cf_email'].")\n";
        $body .= "Email: " . $_POST["cf_email"] . "\n";
        $body .= "\nMessage:\n" . stripslashes($_POST["cf_message"]) . "\n\n";
        Mail_Postmark::compose()
            ->addTo('hello@brilliancetech.com', 'BT Admin')
            ->subject('BrillianceTech.com - Formulario de Contacto Web')
            ->messagePlain($body)
            ->send();

        Slim::flash('notification', 'Gracias por su mensaje. Le contestaremos tan pronto como podamos');
    } else {
        Slim::flash('notification', 'El formulario no pudo ser enviado por algún error en el servidor. Le rogamos que nos contacte directamente por email a hello@brilliancetech.com. Mil dsculpas.');
    }

    Slim::redirect('/');
});

						
Slim::run();
