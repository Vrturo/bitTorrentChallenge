function reqListener () {
  postsArr = JSON.parse( this.responseText );
  postsArr = postsArr.filter( function(bundleObject){
    if( CACHED_IDS[bundleObject.id] ) return false; // dont return if saved
    CACHED_IDS[bundleObject.id] = true;
    return true // keeps element
  });
  load();// hide loader
  template();
}

var oReq = new XMLHttpRequest();
oReq.addEventListener( "load", reqListener );
oReq.open( "GET", "https://bundles.bittorrent.com/api/v1/bundles/" );
oReq.send();


//hardcoded torrent ids that are used for initial load
CACHED_IDS = {
  "5798e7de514f2403008d78b3": true,
   "57a24cfcd296d10300e4eaa9": true,
   "576c47ddc3c8b803006fa380": true,
   "576724446b79dd0300b929ff": true,
   "57a0ef6db449a9030002fc5c": true,
   "579ba7f52b655b0300ba8c51": true,
   "579a16c400f00503000aa56b": true,
   "579a124a27aef90300a53695": true
};


// Loader
function load(){
  $('.loading').delay(2000).fadeIn("fast").fadeOut("slow");
};
