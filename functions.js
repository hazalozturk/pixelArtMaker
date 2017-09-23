$( ".submit" ).click(function() {
  const row = $(".canvasRow").val();
  const column = $(".canvasColumn").val();
  makeGrid(row, column);
});

function makeGrid(row, column) {
  alert( `Your row is ${row} and your column is ${column}` );
}
