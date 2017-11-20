<?php

// registreer alle classes in de classes folder
function autoLoad($className) {

  require_once(__DIR__ . '/classes/' . $className . '.php');
}

spl_autoload_register('autoLoad');
