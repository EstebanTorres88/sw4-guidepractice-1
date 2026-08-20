¿Qué función tiene preventDefault()?
    Prevenir el comportamiento por defecto que el navegador tiene asignado a un evento donde la pagina suele recargarse, en este caso, se previene el envio ya que la información no se estaría enviando a un servidor, en su lugar procesamos esa información con JavaScript

¿Cómo obtenemos un elemento del DOM por su id?

 Accediendo al DOM mediante const element =  document.getElementById("elementId")

¿Cómo obtenemos el valor de un  <input>?

 Primero tenemos que acceder al elemento siguiendo el paso anterior, const element = getElementById("elementid") y luego guardando el valor en una variable se obtiene el valor del elemento de esta         forma: const elementValue = element.value;



¿Qué diferencia existe entre un objeto y un array?

 La diferencia fundamental es que un array guarda un conjunto o lista de elementos, inclusive puede ser una lista de objetos, el array guarda los        elementos en un orden fijo usando indices
 El objeto guarda los datos mediante pares clave-valor, los datos suelen tener algo en común ya que en conjunto representan un "algo" de la vida real.



¿Para qué sirve push()?

 Para añadir un nuevo elemento a un array


¿Por qué utilizamos JSON.stringify()?

Cuando usamos localStorage, necesitamos usar JSON.stringify() para poder transformar el objeto a una cadena de texto (string) para poder ser almacenado, debido a que localStorage únicamente almacena información de tipo string.


¿Por qué utilizamos JSON.parse()?

 Cuando queremos obtener información almacenada en localStorage para almacenarla en un objeto, necesitamos parsearla de string a objeto usando JSON.parse().

¿Qué diferencia existe entre localStorage.getItem() y localStorage.setItem()?

- localStorage.getItem(), es para obtener información del localStorage pasando como argumente una clave que pertenece a la información almacenada sin ella no podemos obtener la información

- localStorage.setItem(), es para almacenar información en el localStorage, este metodo solicita una clave para identificar esa información y la información a guardar, la clave es la que se utiliza despúes         para poder obtener la información almacenada

¿Cómo se crea un elemento HTML desde JavaScript?

 Primero se accede al DOM y mediante el metodo createElement() que recibe el tipo de elemento a crear entre comillas el elemento HTML a crear, por       ejemplo, const tableHeader = document.createElement("th")

.¿Qué función tiene appendChild()?

 Por ejemplo, al crear un elemento <header></header> y un <h1></h1> mediante document.createElement(), y queremos introducir el h1 dentro del header utilizamos appendChild(), de esta forma el elemento h1 sería hijo del header.

¿Qué hace forEach()?

        El método forEach() nos ayuda a tomar un arreglo y por cada elemento realizar ejecturar una función, por ejemplo, si se necesita que por cada elemento de un array se cree un elemento html  usamos el forEach() de esta forma:



        payments.forEach(function (payment) {

                const row = document.createElement("tr");

                const nameCell = document.createElement("td");

                nameCell.textContent = payment.name;

                const emailCell = document.createElement("td");

                emailCell.textContent = payment.email;

                const cardTypeCell = document.createElement("td");

                cardTypeCell.textContent = payment.cardType;

        })

       De esta manera, se estaría creando un elemento "tr" para cada objeto con varos elementos "td" para cada atributo de cada objeto de tipo payment dentro del array





¿Por qué los datos permanecen después de recargar la página?

Porque el localStorage es un mecanismo de almacenamiento que está hecho para que la información que se guarde en él persista a recargas de página o cierres del navegador, la única de manera de vaciar ese almacenamiento es mediante código o accediendo mediante las herramientas de desarollador del navegador.






