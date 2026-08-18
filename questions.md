¿Qué función tiene preventDefault()?

        Prevenir que la página se recargue cuando se ejecuta una función de java script, especialmente cuando se clickea un botón de tipo submit, que por atrás ejecuta una función de java script

¿Cómo obtenemos un elemento del DOM por su id?

        Accediendo al DOM mediante const element =  document.getElementById("elementId")

¿Cómo obtenemos el valor de un  <input>?

        Primero tenemos que acceder al elemento siguiendo el paso anterior, const element = getElementById("elementid") y luego guardando el valor en una variable se obtiene el valor del elemento de esta         forma: const elementValue = element.value;



¿Qué diferencia existe entre un objeto y un array?



¿Para qué sirve push()?

        Para añadir un nuevo elemento a un array

¿Por qué utilizamos JSON.stringify()?

        Cuando usamos local storage por ejemplo, necesitamos usar JSON.stringify(objeto) para poder transformar el objeto a JSON para poder ser almacenado debido a que localStorage unicamente         almacena información de tipo JSON

¿Por qué utilizamos JSON.parse()?

        Siguiendo el ejemplo del uso de localStorage, cuando queremos obtener informacion almacenada en localStorage para almacenarla en un objeto, necesitamos parsearla de JSON a objeto usando         JSON.parse()

¿Qué diferencia existe entre localStorage.getItem() y localStorage.setItem()?

        localStorage.getItem(), es para obtener información del localStorage pasando como argumente una clave que pertenece a la información almacenada sin ella no podemos obtener la información

        localStorage.setItem(), es para almacenar información en el localStorage, este metodo solicita una clave para identificar esa información y la información a guardar, la clave es la que se utiliza despúes         para poder obtener la información almacenada

¿Cómo se crea un elemento HTML desde JavaScript?

        Primero se accede al DOM y mediante el metodo createElement() que recibe el tipo de elemento a crear entre comillas ya sea un td, button etc..
        const tableHeader = document.createElement("th")

.¿Qué función tiene appendChild()?

        Por ejemplo, si se creamos un elemento <header></header> y un <h1></h1> mediante document.createElement(), y queremos introducir el h1 dentro del header utilizamos appendChild(), de esta forma         el elemento h1 sería hijo del header.

¿Qué hace forEach()?

        El método forEach() nos ayuda a tomar un arreglo y por cada elemento realizar una transformación, es decir, por ejemplo, si queremos que por cada elemento de un array creemos un elemento html         usamos el forEach() de esta forma:



        payments.forEach(function (payment) {

                const row = document.createElement("tr");

                const nameCell = document.createElement("td");

                nameCell.textContent = payment.name;

                const emailCell = document.createElement("td");

                emailCell.textContent = payment.email;

                const cardTypeCell = document.createElement("td");

                cardTypeCell.textContent = payment.cardType;

        }

       De esta forma se estaría creando un elemento "tr" para cada atributo de cada objeto de tipo payment dentro del array payments





¿Por qué los datos permanecen después de recargar la página?

