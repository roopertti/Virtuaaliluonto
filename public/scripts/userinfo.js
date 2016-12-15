//Käyttäjän parametrit, joita pelin suorituksen aikana päivitetään
var user = {
	name: '',
	paddlingCompleted: false,
	adventurePlayed: false,
	quizAlerted: false,
	quizSeen: false
};

//Käyttäjänimen asettaminen
function setUsername(username){
	user.name = username;
}