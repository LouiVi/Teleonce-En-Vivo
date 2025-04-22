address = "https://cdn.teleonce.com/en-vivo/";

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	web = app.CreateWebView(1, 1,  "IgnoreErrors,IgnoreSSLErrors" )
	web.LoadUrl( address );
	lay.AddChild( web )
	
	//Add layout to app.	
	app.AddLayout( lay )
}
