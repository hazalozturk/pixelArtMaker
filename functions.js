$( ".submit" ).click(function(e) {
  // event handler for the submit event

  // without this, the grid blinks and dissappears
  e.preventDefault();
  let row = $(".canvasRow").val();
  let column = $(".canvasColumn").val();
  makeGrid(row, column);
});

$(document).on("click", "#canvas .cell", function(e) {
  // event handler for the cell click event
  let color = $(".colorPicker").val();

  // will retreive the HTML DOM object from the click event
  $(e.target).css('background-color', color);
});

function makeGrid(rows, cols){
  /* will produce N by M grid
    based on the given height and width values
  */
  $("#box").empty();
	mytable = $('<table></table>').attr({ id: "canvas" });
	for (let i = 0; i < rows; i++) {
		let row = $('<tr></tr>').appendTo(mytable);
		for (let j = 0; j < cols; j++) {
			$('<td></td>').attr({ class: "cell" }).appendTo(row);
		}
	}
	mytable.appendTo("#box");
}
