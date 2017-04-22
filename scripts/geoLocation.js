$(function () {
    var mapLink = $("#mapLink");
    var log = $("#log");
    $("#getLocationButton").click(function () {
        // Create geolocation options object
        var options = {
            enableHighAccuracy: true,   //  boolean (default: false)
            timeout: 10000,             //  in milliseconds (default: no limit)
            maximumAge: 1000            //  in milliseconds (default: 0)
        };
        navigator.geolocation.getCurrentPosition(showPosition, positionError, options);
    });
    function showPosition(position) {
        var coords = position.coords;
        $("#lat").val(coords.latitude);
        $("#long").val(coords.longitude);
        //*
        // Protect the author's privacy and map to Disneyland :)
        //$("#lat").val(33.8114);
        //$("#long").val(-117.9211);
        //*/
        $("#acc").val(coords.accuracy);
        $("#alt").val(coords.altitude);
        $("#altAcc").val(coords.altitudeAccuracy);
        $("#heading").val(coords.heading);
        $("#speed").val(coords.speed);
        $("#timestamp").val(coords.timestamp);
        // Map your current position by latitude/longitude coordinates
        mapLink.attr("href", "http://maps.google.com/maps?q=" +
            $("#lat").val() + ",+" +
            $("#long").val() + "+(You+are+here!)&iwloc=A&hl=en");
        mapLink.show();
    }
    function positionError(e) {
        switch (e.code) {
            case 0: // UNKNOWN_ERROR
                logMsg("The application has encountered an unknown error while trying to determine your current location. Details: " + e.message);
                break;
            case 1: // PERMISSION_DENIED
                logMsg("You chose not to allow this application access to your location.");
                break;
            case 2: // POSITION_UNAVAILABLE
                logMsg("The application was unable to determine your location.");
                break;
            case 3: // TIMEOUT
                logMsg("The request to determine your location has timed out.");
                break;
        }
    }
    function logMsg(msg) {
        log.append("<li>" + msg + "</li>");
    }
    mapLink.hide();
});

// $(function () {
//     var mapLink = $("#mapLink");
//     var log = $("#log");
//
//     $("#getLocationButton").click(function () {
//         navigator.geolocation.getCurrentPosition(showPosition, positionError);
//     });
//
//     function showPosition(position) {
//         // Different devices and browsers will return different
//         // levels of granularity on the position, but all
//         // will return latitude and longitude values.
//
//         var coords = position.coords;
//
//         // Latitude and longitude coordinates expressed in decimals
//         $("#lat").val(coords.latitude);
//         $("#long").val(coords.longitude);
//
//         //*
//         // Protect the author's privacy - coordinates to Disneyland :)
//       //  $("#lat").val(33.8114);
//       //  $("#long").val(-117.9211);
//         //*/
//
//         // Value in meters of actual location with 95% accuracy
//         $("#acc").val(coords.accuracy);
//
//         // Height of device in meters
//         $("#alt").val(coords.altitude);
//
//         // Accuracy, in meters, of altitude
//         $("#altAcc").val(coords.altitudeAccuracy);
//
//         // Direction 'headed' in degrees relative to true north
//         $("#heading").val(coords.heading);
//
//         // Ground speed in meters per second
//         $("#speed").val(coords.speed);
//
//         // Date and time values were calculated
//         $("#timestamp").val(coords.timestamp);
//
//         // Map your current position by latitude/longitude coordinates
//         mapLink.attr("href", "http://maps.google.com/maps?q=" +
//             $("#lat").val() + ",+" +
//             $("#long").val() + "+(You+are+here!)&iwloc=A&hl=en");
//
//         mapLink.show();
//     }
//
//     function positionError(e) {
//         switch (e.code) {
//             case 0: // UNKNOWN_ERROR
//                 logMsg("The application has encountered an unknown error while trying to determine your current location. Details: " + e.message);
//                 break;
//             case 1: // PERMISSION_DENIED
//                 logMsg("You chose not to allow this application access to your location.");
//                 break;
//             case 2: // POSITION_UNAVAILABLE
//                 logMsg("The application was unable to determine your location.");
//                 break;
//             case 3: // TIMEOUT
//                 logMsg("The request to determine your location has timed out.");
//                 break;
//         }
//     }
//
//     function logMsg(msg) {
//         log.append("<li>" + msg + "</li>");
//     }
//
//     mapLink.hide();
// });
