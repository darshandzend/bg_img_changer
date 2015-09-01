url = document.URL


var urlToImg = {
    "https://trello.com/b/BjezGZey/next-actions": "http://www.planwallpaper.com/static/images/Seamless-Polygon-Backgrounds-Vol2-full_Kfb2t3Q.jpg"

    //add your mapping here
}

bg_img = (url in urlToImg) ? urlToImg[url] : "";

setTimeout(changebg, 5000) //wait till _ALL_ the initial XHRs are complete

function changebg(){
    if(bg_img != "") {
        console.log("bg_img " + bg_img)
        b = document.getElementsByTagName("body")[0]
        console.log(b)
    //    b.setAttribute("position", "foobar");
        b.setAttribute("style", "background-image: url('" + bg_img + "')");
        console.log(b)
    }
}
