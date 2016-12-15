//Estetään käyttäjää kirjoittelemasta merkkejä
$('#username').bind('keyup blur',function(){ 
    var node = $(this);
    node.val(node.val().replace(/[^a-zA-Z]/g,'') ); }
);

//Pelin päänäkymään siirtyminen
function ukkokolille(){
	if($('#username').val() === ''){
		$('#username-alert-modal').modal('show');
	} else {
		$('#startpage-container').addClass('hidden');
		$('#ukkokoli-container').removeClass('hidden');
		$('#modal-1').modal('show');
		setUsername($('#username').val());
		$('#question').append(', ' + user.name + '?');
	}	
}