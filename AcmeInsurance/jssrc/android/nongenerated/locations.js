var locData;

function addResponsesToMap(geoCodeResponse, locationName, locationDesc) {
    if (geoCodeResponse == null || geoCodeResponse["opstatus"] == null || geoCodeResponse["opstatus"] != 0) {
        kony.print("**** WARN: response is null or opstatus is not zero");
        return;
    }
    var locations = [];
    locData = {
        lat: geoCodeResponse.lat,
        lon: geoCodeResponse.lng,
        name: locationName,
        desc: locationDesc,
        meta: {
            color: "green",
            label: "C"
        }
    };
    locations.push(locData);
    frmLocations.mapLocations.locationData = locations;
}