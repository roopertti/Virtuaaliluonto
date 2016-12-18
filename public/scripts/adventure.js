//Tähän tallennetaan sen hetkinen dialogi
var currentDialog;
//Seikkailupelin sijainnit
var places = [

//Parkkipaikka id=0
{
    heading: "Parking lot",
    dialogtext: "You are now at the parking lot of Koli National Park. Here you can take the elevator to the hotel.",
    position: {lat: 63.095992, lng: 29.8028251},
    cameraHeading: 108.36,
    cameraPitch: 2,
    dialogBtn1: '<button class="btn btn-success" onclick="loadDialog(1)" id="dialogBtnSuccess">Enter the elevator</button>',
    dialogBtn2: '<button class="btn" onclick="showInfo()" id="dialogBtn">Wait, what?</button>'
},
//Hotellin edusta id=1
{
    heading: "Hotel",
    dialogtext: "Behind you is the entrance to the hotel. Time to discover some sights!",
    position: {lat: 63.0965451, lng: 29.8050054},
    cameraHeading: 210.38,
    cameraPitch: 3,
    dialogBtn1: '<button class="btn" onclick="loadDialog(2)" id="dialogBtn">Koli Nature Centre Ukko</button>',
    dialogBtn2: '<button class="btn" onclick="loadDialog(3)" id="dialogBtn">Chairlift of the ski slope</button>',
    dialogBtn3: '<button class="btn btn" onclick="loadDialog(0)" id="dialogBtn">Back to the parking lot</button>'
},
//Luontokeskus Ukon edusta Ukko id=2, Tästä voisi alkaa luontopolku
{
    heading: "Koli Nature Centre Ukko",
    dialogtext: "Here lies Koli Nature Centre Ukko. There you can discover geology, nature and culture of Koli National Park.",
    position: {lat: 63.0961745, lng: 29.8059309},
    cameraHeading: 204.88,
    cameraPitch: 2,
    dialogBtn1: '<button class="btn btn-success" onclick="loadDialog(8)" id="dialogBtnSuccess">Take a trip to the beautiful nature of Koli!</button>',
    dialogBtn2: '<button class="btn" onclick="loadDialog(3)" id="dialogBtn">Chairlift of the ski slope</button>',
    dialogBtn3: '<button class="btn" onclick="loadDialog(1)" id="dialogBtn">Go back to the hotel</button>'
},
//Tuolihissin edusta id=3, Tästä voisi alkaa laskettelu
{
    heading: "Chairlift",
    dialogtext: "This chairlift brings skiers to the top of the Ukko-Koli's ski slope. It also works at summer! Ukko-Koli is well known for it's long and steep ski slopes.",
    position: {lat: 63.0963605, lng: 29.8062948},
    cameraHeading: 62.53,
    cameraPitch: 1,
    dialogBtn1: '<button class="btn btn-success" onclick="loadDialog(4)" id="dialogBtnSuccess">Take a skiing trip</button>',
    dialogBtn2: '<button class="btn" onclick="loadDialog(2)" id="dialogBtn">Koli Nature Centre Ukko</button>',
    dialogBtn3: '<button class="btn" onclick="loadDialog(1)" id="dialogBtn">Go back to the hotel</button>'
},
// Laskettelun alku Ukko-kolin huipulla id=4
{
    heading: "Ukko-koli",
    dialogtext: "You are now at top off the Ukko-Koli's ski slope. The highest spot of Koli is 347 meters high and the longest ski slope is 1500 meters long.",
    position: {lat: 63.1009405, lng: 29.8038024},
    cameraHeading: 120,
    cameraPitch: 1,
    dialogBtn1: '<button class="btn" onclick="loadDialog(5)" id="dialogBtn">Continue to ski downhill</button>',
    dialogBtn2: '<button class="btn" onclick="loadDialog(1)" id="dialogBtn">Go back to the hotel</button>'
},
// Laskettelun puoliväli id=5
{
    heading: "Ukko-koli halfway",
    dialogtext: "You are reaching halfway of this ski slope. Downhill skiing is one the most popular ways to spend your holidays at Koli.",
    position: {lat: 63.1000113, lng: 29.8107354},
    cameraHeading: 85,
    cameraPitch: 1,
    dialogBtn1: '<button class="btn" onclick="loadDialog(6)" id="dialogBtn">Continue to equipment rental</button>'
},
// Välinevuokraamo id=6
{
    heading: "Equipment rental",
    dialogtext: "This is the place to buy lift tickets and rent all the skiing equipment you need. Maybe at this point you want to take a lift back to the top?",
    position: {lat: 63.099135, lng: 29.8186206},
    cameraHeading: 127,
    cameraPitch: 1,
    dialogBtn1: '<button class="btn" onclick="loadDialog(7)" id="dialogBtn">Continue to shore of lake Pielinen</button>',
    dialogBtn2: '<button class="btn" onclick="loadDialog(4)" id="dialogBtn">Go back to the top</button>'
},
// Pielinen id=7
{
    heading: "Shore of lake Pielinen",
    dialogtext: "You have come all the way down to lake Pielinen. During the winter you can try ice fishing or driving snowmobile. During summer you can try paddling for instance. Did you know that paddling in Finnish means 'melonta'?",
    position: {lat: 63.0995303, lng: 29.8208522},
    cameraHeading: 90,
    cameraPitch: 1,
    dialogBtn1: '<button class="btn" onclick="loadDialog(1)" id="dialogBtn">Go back to the hotel</button>'
},
// Nature trip id=8
{
    heading: "Nature trip start",
    dialogtext: "Here begins your trip to Kolis nature. Enjoy the vast and beatiful forest and breathe the clean air into your lungs.",
    position: {lat: 63.0967525, lng: 29.8041865},
    cameraHeading: 315,
    cameraPitch: 3,
    dialogBtn1: '<button class="btn" onclick="loadDialog(9)" id="dialogBtn">Continue trip</button>',
    dialogBtn2: '<button class="btn" onclick="loadDialog(2)" id="dialogBtn">Koli Nature Centre Ukko</button>'
},
// Nature trip crossroad id=9
{
    heading: "Crossroad",
    dialogtext: "You are now at a crossroad. Where do you want to go?",
    position: {lat: 63.0974148, lng: 29.8038636},
    cameraHeading: 1.64,
    cameraPitch: 3,
    dialogBtn1: '<button class="btn" onclick="loadDialog(11)" id="dialogBtn">Continue trip</button>',
    dialogBtn2: '<button class="btn" onclick="loadDialog(10)" id="dialogBtn">Go to a campfire place</button>',
    dialogBtn3: '<button class="btn" onclick="loadDialog(2)" id="dialogBtn">Koli Nature Centre Ukko</button>'
},
// Nature trip campfire place id=10
{
    heading: "Campfire",
    dialogtext: "Here you can rest and build a campfire.",
    position: {lat: 63.0977236, lng: 29.80446},
    cameraHeading: 13.04,
    cameraPitch: 3,
    dialogBtn1: '<button class="btn" onclick="loadDialog(11)" id="dialogBtn">Continue trip</button>',
    dialogBtn2: '<button class="btn" onclick="loadDialog(2)" id="dialogBtn">Koli Nature Centre Ukko</button>'
},
// Nature trip birch trees id=11
{
    heading: "Birch trees",
    dialogtext: "Here you can see lots of birch trees.",
    position: {lat: 63.1045336, lng: 29.7982045},
    cameraHeading: 34.85,
    cameraPitch: 3,
    dialogBtn1: '<button class="btn" onclick="loadDialog(12)" id="dialogBtn">Continue trip</button>',
    dialogBtn2: '<button class="btn" onclick="loadDialog(2)" id="dialogBtn">Koli Nature Centre Ukko</button>'
},
// Nature trip pine trees id=12
{
    heading: "Pine trees",
    dialogtext: "Here you can see a dense pine tree forest.",
    position: {lat: 63.1072384, lng: 29.8009466},
    cameraHeading: 31.5,
    cameraPitch: 3,
    dialogBtn1: '<button class="btn" onclick="loadDialog(2)" id="dialogBtn">Go back to Koli Nature Centre Ukko</button>'
}
];

//Näyttää info-ikkunan seikkailupeliin liittyen
function showInfo(){
    $('#adventure-start-modal').modal('show');
}

//Tämä suoritetaan, kun pääsivulta siirrytään peliin
function loadAdventure() {
    user.adventurePlayed = true;
    $('#btnQuiz').removeClass('hidden');
    $('#adventure-start-modal').modal('show');
    $('#ukkokoli-container').addClass('hidden');
    $('#adventure-container').removeClass('hidden');
    loadDialog(0);
}

//Tämä suoritetaan joka kerta, kun uudet dialogit ja panoraamakuva päivittyy
function loadDialog(id){
    currentDialog = id;
    //Dialogin otsikko ja teksti
    $('#dialogHead').text(places[id].heading);
    $('#dialogTxt').text(places[id].dialogtext);

    //Sijainti ja kameran kuvakulma
    initialize(places[id].position, places[id].cameraHeading, places[id].cameraPitch);
    //Tässä lisätään käyttäjälle vastausvaihtoehdot (alustavasti nappaa 4 vaihtoehtoa)
    $('#dialog-options').html('');
    $('#dialog-options').append($.parseHTML(places[id].dialogBtn1));
    $('#dialog-options').append($.parseHTML(places[id].dialogBtn2));
    $('#dialog-options').append($.parseHTML(places[id].dialogBtn3));
    $('#dialog-options').append($.parseHTML('<button class="btn btn-danger" id="dialogBtnDanger" onclick="backToCurrent()">Return last location</button>'));
    $('#dialog-options').append($.parseHTML('<button class="btn btn-info" id="dialogBtnInfo" onclick="backToMainMenu()">Back to menu</button>'));

}

//Palautetaan näkymä
function backToCurrent(){
    initialize(places[currentDialog].position, places[currentDialog].cameraHeading, places[currentDialog].cameraPitch);
}

//Pääsivulle siirtyminen
function backToMainMenu(){
    $('#adventure-ending-modal').modal('show');
}

//Tässä päivitetään sijainti, sekä kameran kuvakulma leveys-(h) ja pituussuunnassa(p)
function initialize(position, h, p){
    var map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 14
    });
    var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
        position: position,
        pov: {
            heading: h,
            pitch: p
        },
        panControl: false,
        zoomControl: false,
        addressControl: false,
        fullscreenControl: false,
        motionTrackingControl: false,
        linksControl: false,
        enableCloseButton: false

    });
    map.setStreetView(panorama);
}