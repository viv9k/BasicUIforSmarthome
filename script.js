
  function openNav(id) {
    var menu = id+"Menu";
    var image = id+"Image";

    closeActive();
    
    document.getElementById(menu).style.width = "180px";
    document.getElementById(id).className = "active";
    document.getElementById(image).src = "web-all-icons/"+id+".svg";
    }
    
    function closeActive() {
      var id = ["dashboard","settings","help"];
      var image = ["dashboardImage","settingsImage","helpImage"];
      
      var i;
      for(i in id){
        var menu = id[i]+"Menu";
        var address = "web-all-icons/"+id[i]+"-inactive.svg";

        document.getElementById(menu).style.width = "0px";
        document.getElementById(id[i]).className = "inactive";
        document.getElementById(image[i]).src = address;
      }
    }
  
  function openSearch() {
    var check = document.getElementById("fad").src;
    var menu = "searchOptionsMenu";

    if(check == "file:/// (location) /web-all-icons/filter-arrow-up.svg"){

      document.getElementById(menu).style.height = "0px";
      document.getElementById(menu).style.paddingTop = "0px";
      document.getElementById(menu).style.paddingBottom = "0px";
      document.getElementById("fad").src = "web-all-icons/filter-arrow-down.svg";
    }
    else{

      document.getElementById(menu).style.paddingTop = "20px";
      document.getElementById(menu).style.paddingBottom = "20px";
      document.getElementById(menu).style.height = "100%";
      document.getElementById("fad").src = "web-all-icons/filter-arrow-up.svg";
    }
  }
