<?php

function debug($variable)
{
    echo '<pre style="background:black;color:springgreen" >';
    var_export($variable);
    echo '</pre>';
}
