function main() {
  // scrollspy code
  $("body").scrollspy({target:"#main-nav", offset: 50});

  // button toggle-on-hover code
  $(".btn-primary").hover(function(){
    $(this).button("toggle");
  }, function(){
    $(this).button("toggle");
  });

  $(".nav-link").click(function(){
    $("#collapse-nav").collapse("hide");
  });

}

$(document).ready(main);
