/**
 * Periodically checks if Ads appeared on Hulu.
 * If an ad is present and not muted, it mutes the ad. If no ad is present and it was muted, 
 * it unmutes the ad.
 */
function checkIfAd() {
  let adPresent = undefined;
  let muted = undefined;
  let muteButton = undefined;

  setInterval(function(){
    if (document.querySelector('[aria-label="MUTE"]')) {
      muteButton = document.querySelector('[aria-label="MUTE"]')
      muted = false;
    } else {
      muted = true;
      muteButton = document.querySelector('[aria-label="UNMUTE"]')
    }

    adPresent = document.getElementsByClassName("AdUnitView");

    if (adPresent.length > 0){
      if (!muted){
        muteButton.click();
        muted = true;
      }
    } else {
      if (muted){
        muteButton.click();
      } 
    }
  } , 1000); // Checks for an Ad every second

}
checkIfAd();
