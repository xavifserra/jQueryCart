window.onload = function () {

 $('#todos').on('click', 'li .delete' ,function (e){
  $(this).parent().remove();
 });

 $('.btn').click(function(e){
  var line =(`<li><span>${prompt("New Task:")}</span><div class='delete'>delete</div></li>`);
  $('ul').append(line);
 });
}
