

var rickLinks = ["https://www.youtube.com/watch?v=oHg5SJYRHA0", 
				   "https://www.youtube.com/watch?v=dQw4w9WgXcQ"];

var links = document.links;

for (var i = 0; i < links.length; ++i)
{
	if (rickLinks.indexOf(links[i].href) > -1)
	{
		console.log(links[i].href + " found -- known rick roll link.");
		links[i].innerHTML = "**** Rick Roll Link ****";
	}
}