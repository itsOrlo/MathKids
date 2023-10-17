// Variable Global (+5).
var g = 0;
$(function () {
  // Reiniciar variable global.
  g = 0;

  // Evento ejecutado al cambiar de opción.
  $("#cbxNum").change(function () {
    // Reinicio de variable global.
    g = 0;

    // Limpiar Tabla.
    $("#filas").empty();

    // Variable del valor seleccionado.
    num = $(this).val();

    // Llenar Tabla.
    for (var i = 1; i <= 5; i++) {
      var fila =
        "<tr><td>" +
        num +
        "</td><td>x</td><td>" +
        i +
        "</td><td>=</td><td>" +
        num * i +
        "</td></tr>";
      $("#filas").append(fila);
    }
  });

  // Función mostrar más. (+5)
  $("#more").click(function () {
    g = g + 5; // Por cada click el valor máximo aumenta en 5.

    for (var j = g + 1; j <= g + 5; j++) {
      var fila =
        "<tr><td>" +
        num +
        "</td><td>x</td><td>" +
        j +
        "</td><td>=</td><td>" +
        num * j +
        "</td></tr>";
      $("#filas").append(fila);
    }
  });

  $(document).ready(function () {
    // ... (código existente)

    // Botón de reinicio
    $("#resetButton").click(function () {
        g = 0; // Restablece el valor de g
        $("#filas").empty(); // Elimina todas las filas
    });
});

});

// Obtén el elemento select
var select = document.getElementById("cbxNum");

// Genera opciones de 1 a 10
for (var i = 1; i <= 10; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  select.appendChild(option);
}
