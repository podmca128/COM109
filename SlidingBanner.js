$(document).ready(function () { /*jquery for the sliding banner seen in the classes page*/
    $(".slidingBanner").each(function () {
        let banner = $(this); /*Gets the element with the class "slidingBanner"*/
        let track = banner.children().first(); /*Gets the first child element of the banner*/
        let index = 0; /*Sets the initial index for the slide*/
        const total = track.find("img").length; /*Gets the total number of images in the track*/

        setInterval(function () {
            index = (index + 1) % total; /*increments the index and loops back to 0 if it exceeds the total number of slides*/
            let slideWidth = banner.width(); 
            track.css("transform", "translateX(" + (-index * slideWidth) + "px)"); 
        }, 3000);
    });
});
