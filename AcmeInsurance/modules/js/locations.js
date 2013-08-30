var locData;
var officeList = [];
var addressTxt;
var locName;


function performJSONServiceCallToFetchOffices()
{	
	kony.print("Fetching Offices");
	try
	{
		var serviceInputParameters = {appID:"CEFCUbaafs", serviceID:"GetLocations"}
		appmiddlewareinvokerasync(serviceInputParameters, processResponseFromGetOffices);
		
	}
	catch (err)
	{
		alert("Error: "+err);
	}
}

function processResponseFromGetOffices (status, responseFromGetOffices)
{

	if(null != status && status == 400)
 	{
		if(null != responseFromGetOffices && null != responseFromGetOffices["opstatus"] && 0 == responseFromGetOffices["opstatus"])
	  	{
			var offices = responseFromGetOffices.Locations;
			if ("" != offices && offices != null) 
			{

				kony.print("Assigning Data in Offices");
				for (var office in offices)
	 			{
	 				
	 				var address =  offices[office]["Addr1"] + " " + offices[office]["Addr2"] + " " + offices[office]["City"] + ", " + offices[office]["State"] + " " + offices[office]["Zip"];
					var officeData = { lblLocation:address,lblLocationName:offices[office]["Name"]}
					
					officeList.push(officeData);
					
				}

				frmLocations.segLocations.setData(officeList);
				
				kony.print("showing form");
				frmLocations.show();
				kony.print("form shown - end");
				//categoryStack.push(categoriesList); 
			}
			else
			{

				return;
			}
	  	}
		else
		{
			return;
		}
	  	
  	}
}
function displayMapDetail ()
{
	var focusedItem1 = frmLocations.segLocations.selectedItems;
	kony.print("focused item is "+ focusedItem1[0].lblLocation.text);
	var address = ""+ focusedItem1[0].lblLocation;
	locName = focusedItem1[0].lblLocationName;
		getLatLong(address);
	//performXMLServiceCallToFetchReviews(sku);
	kony.print ("Exiting out of displayNewsDetails");
}
function getLatLong(address) {
kony.print ("Exiting out of displayNewsDetails");
	addressTxt = address;
	kony.print ("addressTxt is  " + addressTxt);
	try
	{
		var serviceInputParameters = {appID:"USFoods", serviceID:"GeoCode", addressText:address}
		appmiddlewareinvokerasync(serviceInputParameters, processResponseFromGetLatLong);

	}
	catch (err)
	{
		alert("Error: "+err);
	}
}
function processResponseFromGetLatLong(status, responseFromGetLatLong){
	kony.print ("In response");
	if(null != status && status == 400)
 	{
		if(null != responseFromGetLatLong && null != responseFromGetLatLong["opstatus"] && 0 == responseFromGetLatLong["opstatus"])
	  	{

			kony.print (responseFromGetLatLong.lat + " | " +responseFromGetLatLong.lng);
			var locations = [];
				locData = {
					lat:responseFromGetLatLong.lat,
					lon:responseFromGetLatLong.lng,
					name:locName,
					desc:addressTxt,
					image:"pointer.png",
					meta:{ color : "green", label : "C" }}
	
			locations.push(locData);
			frmLocations.mapLocations.locationData = locations;
			kony.print ("location list set");
	  	}
		else
		{
			return;
		}
	  	
  	}

}
function loadMap(){
	performJSONServiceCallToFetchOffices();
			if (locData == null) {
			var locations = [];
				locData = {
					lat:"41.9886515",
					lon:"-87.8578806",
					name:"US Foods Headquarters",
					desc:"9399 West Higgins Road Suite 500 Rosemount, IL 60018",
					image:"pointer.png",
					meta:{ color : "green", label : "C" }}
					locations.push(locData);
			frmLocations.mapLocations.locationData = locations;
					
			}

}