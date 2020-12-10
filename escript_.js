// Init aplication namespace 
var abb = {};
var php = {};

var mk_header_parallax, mk_banner_parallax, mk_page_parallax, mk_footer_parallax, mk_body_parallax;
var mk_captcha_placeholder = "Enter Captcha",
    mk_captcha_invalid_txt = "Invalid. Try again.",
    mk_captcha_correct_txt = "Captcha correct.",
    mk_responsive_nav_width = 1140,
    mk_grid_width = 1240,
    mk_ajax_search_option = "header",
    mk_preloader_txt_color = "#444444",
    mk_preloader_bg_color = "#ffffff",
    mk_accent_color = "#eae3d7",
    mk_preloader_bar_color = "#ffffff",
    mk_preloader_logo = "";
var mk_header_parallax = false,
    mk_banner_parallax = false,
    mk_page_parallax = false,
    mk_footer_parallax = false,
    mk_body_parallax = false,
    mk_no_more_posts = "No More Posts";

function is_touch_device() {
    return ('ontouchstart' in document.documentElement);
}
