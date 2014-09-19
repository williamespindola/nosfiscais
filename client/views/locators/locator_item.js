Template.locatorItem.rendered = function() {  

  $('.map-zone').each(function(a,b,c){
    var zip = $(b).data('zip');
    var canvaz = 'map-canvas-' + zip;
    var mapZone = 'map-' + zip;
    var nameZone = $(b).data('zip'); 
    var geocoder = new google.maps.Geocoder();
    var mapOptions = {
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById(canvaz), mapOptions);

    geocoder.geocode( { 'address': zip}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
              title:nameZone,
              icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          });
          marker.setMap(map);   
         Session.set(mapZone, true);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });

  });

};
