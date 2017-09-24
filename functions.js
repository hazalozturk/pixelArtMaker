$( ".submit" ).click(function(e) {
  e.preventDefault();
  let row = $(".canvasRow").val();
  let column = $(".canvasColumn").val();
  makeGrid(row, column);
});

$(document).on("click", "#canvas .cell", function(e) {
  let color = $(".colorPicker").val();
  $(e.target).css('background-color', color);
});

function makeGrid(rows, cols){
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
