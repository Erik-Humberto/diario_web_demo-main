// // Función para manejar la respuesta del servidor y almacenar datos en IndexedDB
// function guardarDatosEnIndexedDB(datos) {
//     var solicitud = indexedDB.open("Datos-De-Contacto");
//     solicitud.addEventListener("error", MostrarError);
//     solicitud.addEventListener("success", function(evento) {
//         var bd = evento.target.result;
//         var transaccion = bd.transaction(["Contactos"], "readwrite");
//         var almacen = transaccion.objectStore("Contactos");
//         almacen.add(datos); // Aquí almacenamos los datos en IndexedDB
//     });
// }

// // Función para realizar la solicitud al servidor y manejar la respuesta
// function obtenerDatosDelServidorYAlmacenarEnIndexedDB() {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "agregar_noticia.php", true);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             var response = JSON.parse(xhr.responseText);
//             if (response) {
//                 guardarDatosEnIndexedDB(response);
//                 console.log("Datos almacenados en IndexedDB:", response);
//             } else {
//                 console.error("Error al recibir los datos del servidor.");
//             }
//         }
//     };
//     xhr.send();
// }

// // Llama a la función para obtener datos del servidor y almacenar en IndexedDB
// obtenerDatosDelServidorYAlmacenarEnIndexedDB();