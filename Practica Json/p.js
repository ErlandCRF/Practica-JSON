var data;
 
$(document).ready(function() {
	$.ajax({
		url: "p.json",
		data: "nocache=" + Math.random(),
		type: "GET",
		dataType: "json",
		success: function(source){
			data = source;
			showInfo();
		},
		error: function(dato){
			alert("ERROR");
		}
	});							
});
 
function showInfo(){
 $("#data").append(data['glossary']['GlossDiv']['GlossList']['GlossEntry']);
 
 $.each(data['glossary']['GlossDiv']['GlossList']['GlossEntry'], function(index, value) {
  $("#data").append('<p>index: ' + index + ' value1: ' + data['glossary']['GlossDiv']['GlossList']['GlossEntry'][index]['ID']  + '</p>');
 });
}