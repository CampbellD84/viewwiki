$(function() {
    $("#wikisearch").click(function(){
      var searchTerm = $("#wikisubject").val();
      var wikiAPIAddress = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + "&format=json&callback=?";
      $.ajax({
        type: 'GET',
        url: wikiAPIAddress,
        async: false,
        dataType: "json",
        success: function(data) {
          $("#resultslist").html(" ");
          for(var i = 0; i < data[1].length; i++) {
          $("#resultslist").prepend("<li><a href " + data[3][i]+">"+data[1][i] +"</a><p>"+data[2][i]+"<p></li>");
            $("#resultspanel").removeClass("hidden");
          }
        },
        error: function(errMsg) {
          alert("Something happened...");
        }
      }); //ajax call to wiki
    }) //click function
  }); //document ready