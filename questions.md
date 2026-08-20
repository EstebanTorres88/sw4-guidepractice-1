**1. ¿Qué función tiene preventDefault()?**
Prevenir el comportamiento por defecto que el navegador tiene asignado a un evento donde la pagina suele recargarse, en este caso, se previene el envio ya que la información no se estaría enviando a un servidor, en su lugar se procesa esa información con JavaScript.

**2. ¿Cómo obtenemos un elemento del DOM por su id?**
Accediendo al DOM mediante:
`const element = document.getElementById("elementId")`

**3. ¿Cómo obtenemos el valor de un <input>?**
Primero se accede al elemento siguiendo el paso anterior, `const element = document.getElementById("elementId")` y luego se usa una variable para guardar el valor del elemento de esta forma:
`const elementValue = element.value;`

**4. ¿Qué diferencia existe entre un objeto y un array?**
* **Array:** Guarda un conjunto o lista de elementos, cada elemento es guardado en un orden fijo usando indices.
* **Objeto:** Guarda los datos mediante pares clave-valor, los datos suelen tener algo en común ya que en conjunto representan una entidad u objeto de la vida real.

**5. ¿Para qué sirve push()?**
Para añadir un nuevo elemento a un array.

**6. ¿Por qué utilizamos JSON.stringify()?**
Cuando se utiliza localStorage como mecanismo de almacenamiento, se necesita usar `JSON.stringify()` para poder transformar el objeto a una cadena de texto para poder ser almacenado, debido a que localStorage únicamente almacena información de tipo string.

**7. ¿Por qué utilizamos JSON.parse()?**
Cuando se requiere obtener información almacenada en localStorage para almacenarla en un objeto, se necesita parsearla de string a objeto usando `JSON.parse()`.

**8. ¿Qué diferencia existe entre localStorage.getItem() y localStorage.setItem()?**
* `localStorage.getItem()`: su funcionalidad es obtener información del localStorage pasando como argumente una clave que pertenece a la información almacenada sin ella no podemos obtener la información.
* `localStorage.setItem()`: su funcionalidad es almacenar información en el localStorage, este metodo solicita una clave para identificar esa información y la información a guardar, la clave es la que se utiliza despúes para poder obtener la información almacenada.

**9. ¿Cómo se crea un elemento HTML desde JavaScript?**
Primero se accede al DOM y mediante el metodo `createElement()` que recibe entre comillas el elemento HTML a crear, por ejemplo:
`const tableHeader = document.createElement("th")`

**10. ¿Qué función tiene appendChild()?**
Por ejemplo, si al crear un elemento `<header></header>` y un `<h1></h1>` mediante `document.createElement()`, queremos introducir el h1 dentro del header utilizamos `appendChild()`, de esta forma el elemento h1 sería hijo del header.

**11. ¿Qué hace forEach()?**
El método `forEach()`  ayuda a tomar un arreglo y por cada elemento ejecutar una función, por ejemplo, si se necesita que por cada elemento de un array se cree un elemento html usamos el `forEach()` de esta forma:

```javascript
payments.forEach(function (payment) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = payment.name;
    const emailCell = document.createElement("td");
    emailCell.textContent = payment.email;
    const cardTypeCell = document.createElement("td");
    cardTypeCell.textContent = payment.cardType;
})

```

De esta forma, por cada objeto de tipo payment del array se crearía un elemento "tr" y para cada atributo de ese objeto se crearía un elemento "td"
