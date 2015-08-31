url = document.URL

board1 = "https://url_to_board1";
board2 = "https://url_to_board2";
//add as many as you need

switch(url) {
    case board1:
        bg_img= 'http://www.planwallpaper.com/static/images/Seamless-Polygon-Backgrounds-Vol2-full_Kfb2t3Q.jpg'; 
        break;
    case board2:
        bg_img= 'http://some_other_image.jpg'; 
        break;
    //add accordingly
}

if(bg_img) {
    b = document.getElementsByTagName("body")[0]
    b.setAttribute("style", "background-image: url('" + bg_img + "')");
}
