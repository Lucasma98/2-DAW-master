<?php
   $year = 2004;
   
   if($year % 4 == 0)
    {
        if($year % 100 != 0)
        echo "Año bisiesto"
   
        elseif($year % 400 == 0){
       echo "Año bisiesto";
        }
        else{
       echo "Año no bisiesto";
        }
        else{
        echo "Año no bisiesto"  
        }
    }

    // Otra manera de hacerlo
    // if($year % 4 == 0 && $year % 100 != 0) || ($year %400 == 0)
    // {
    // echo "Año bisiesto"
    // }
    // else
    // {
    // echo "Año no bisiesto"
    // }
    
?>