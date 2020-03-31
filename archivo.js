//cont seran todos los numeros (tanto primos como enteros "TODOS") que hay entre 0 y el numero 
    //escogido por el usuario.
    var cont = 1;

//cont2 seran los numeros entre los que vamos a dividir los cont para comprobar si su resto(%)
//es 0 , en caso de tener resto % 0 ese cont quedara fuera de la lista de primos.
    var cont2 = 0;
    
 //la bandera es un boolean que si me da un resto 0 me da un true
    var bandera = 0;


//la variable x es el numero hasta donde el usuario quiere conocer los primos eg:si el usuario escoge
//100 la aplicacion le mostrara todos los numeros primos hasta el 100.

    var x = prompt ("Entra un numero y te enseñaremos todos los primos hasta este numero");

//Condicion 1 : mientras el numero escogido por el usuario (x) 
 //sea mayor o igual a 1 (cont)

           while(cont <= x){ 

                      //y a su vez se cumpla la condicion 2: que  (cont2) sea menor que (cont) para que se pueda
                    //realizar la division y comprobar asi si (cont) es primo

               while(cont2 < cont){

                      //aqui le defino a la consola que "NO" es un primo ,osea lo que es un entero:
                     //1:que al dividirlo por un numero cont2 el resto sea 0 mientras que ese numero no sea 1 ni
                     //el propio cont 
                   if(cont % cont2 == 0 && cont2 != 1 && cont2 != cont){
                     //por lo tanto quiero un boolean false que es un "bandera=1"
                       bandera = 1;
                     }
                    // despues suma otro numero a cont2 "para comprobar si es no es primo" y cierro el bucle
                  cont2++;
                }

                    //si bandera me da 0 sera un true ,si esta condicion se da muestra el primo en consola
                    //y ralalizo un espacio "<br/>" para que  en la lista no aparezcan los primo juntos.
                   if (bandera == 0){
                       document.write(cont2+ "<br/>")
                    }
                 //de lo contrario bandera 0   
                else{
                     bandera = 0;
                }
                //por ultimo cierro el bucle diciendole que le sume 1 a cont para comprobar el siguiente numero
                //y le doy de nuevo el valor de cont2 
                cont++;
                cont2 = 0;
            }



