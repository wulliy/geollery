let tooltip = document.createElement("pre")
tooltip.setAttribute("class", "tooltip")
tooltip.style.display = "none"
document.body.append(tooltip)

document.onmousemove = (e) => {
	if (e.target && e.target.nodeName.toLowerCase() == "img") {
		tooltip.style.display = ""
		tooltip.style.left = (e.clientX + 5) + "px"
		tooltip.style.top = (e.clientY - 18) + "px"
		tooltip.innerText = ":"+e.target.src.split("/")[6].slice(0, -4)+":"
	} else {
		tooltip.style.display = "none"
	}
}
