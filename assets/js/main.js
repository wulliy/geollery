let container = document.getElementsByClassName("box")[0]

let intro = document.createElement("pre")
intro.innerText = `welcome to the geotale art gallery

this is where you can freely look at all of the geotales that you want
have fun

pro tip:    if you want to know an emoji's name, hover over it and a tooltip will come up with it's name
pro tip #2: if you click on an emoji, you can copy it's name
`

let grid = document.createElement("div")
grid.setAttribute("class", "image-grid")

let container2 = document.createElement("div")
container2.setAttribute("class", "box")
container2.append(grid)

let emojis = [
	"gaytale",
	"geoban",
	"geoclown",
	"geoconfused",
	"geocool",
	"geocroc",
	"geocry",
	"geoflushed",
	"geofurry",
	"geogif",
	"geohappy",
	"geoidk",
	"geojs",
	"geolaughing",
	"geomod",
	"geomonocle",
	"geooh",
	"geopeace",
	"geopizza",
	"geosad",
	"geoscared",
	"geoscream",
	"geosick",
	"geosleep",
	"geosmirk",
	"geostar",
	"geostare",
	"geosurprised",
	"geotale",
	"geothinking",
	"geothumbsup",
	"geothumbsdown",
	"geotired",
	"geotriumph",
	"geovomit",
	"geowink",
	"geowise",
	"geoworry"
]
let loaded = 0
let imgs = []
emojis.forEach((emoji) => {
	let img = document.createElement("img")
	imgs.push(img)
	img.style.display = "none"
	img.src = `./assets/img/${emoji}.png`
	img.onclick = () => {
		navigator.clipboard.writeText(":"+emoji+":")
		alert("copied to clipboard")
	}
	img.onload = () => {
		loaded++
	}
	grid.append(img)
})

function finish() {
	container.innerText = ""
	container.append(intro)
	document.body.append(document.createElement("br"))
	document.body.append(container2)
	imgs.forEach((img) => {
		img.style.display = ""
	})
}

let inteval
function didItLoadYet() {
	if (interval && loaded == emojis.length) {
		clearInterval(interval)
		finish()
	}
}

interval = setInterval(didItLoadYet, 30)