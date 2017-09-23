$( ".submit" ).click(function(e) {
  e.preventDefault();
  let row = $(".canvasRow").val();
  let column = $(".canvasColumn").val();
  makeGrid(row, column);
});

$(document).on("click", "#canvas", function(e) {
  e.preventDefault();
  let color = $(".colorPicker").val();
  $(e.target).css('background-color', color);
});

function makeGrid(rows, cols){
  $("#box").empty();
	mytable = $('<table></table>').attr({ id: "canvas" });
	let tr = [];
	for (var i = 0; i < rows; i++) {
		let row = $('<tr></tr>').attr({ class: "cell" }).appendTo(mytable);
		for (let j = 0; j < cols; j++) {
			$('<td></td>').attr({ class: "cell" }).appendTo(row);
		}
	}
	mytable.appendTo("#box");
}
