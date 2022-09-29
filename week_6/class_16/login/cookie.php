<?php

if (isset($_COOKIE['showCookieBanner'])) {
    // do something here
}

setcookie('showCookieBanner', 'false', time() + (86400 * 30), true, false);
