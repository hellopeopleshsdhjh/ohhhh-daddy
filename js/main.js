// handles main functions of STWV3
function ab() {
	var viewFrame; try { viewFrame = window !== top } catch (f) { viewFrame = !0 } if (!viewFrame && !navigator.userAgent.includes("Firefox")) { let c = open("about:blank", "_blank"); if (!c || c.closed) alert("Allow popups and redirects to hide this from showing up in your history.\nThanks!\STW"); else { let b = c.document, d = b.createElement("iframe"), a = d.style, e = b.createElement("link"); b.title = "Google Drive", e.rel = "icon", e.href = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png", d.src = location.href + "/main.html", a.position = "fixed", a.top = a.bottom = a.left = a.right = 0, a.border = a.outline = "none", a.width = a.height = "100%", b.body.appendChild(d), location.replace("https://classroom.google.com") } } document.addEventListener("keypress", function(d) { if ("Enter" === d.key) { let e = document.getElementById("exploit").value, f = window.open("about:blank", "_blank"), b = f.document, c = b.createElement("iframe"), a = c.style; b.createElement("link"), b.title = "_blank", c.src = e, a.position = "fixed", a.border = a.outline = "none", a.top = a.bottom = a.left = a.right = 0, a.width = a.height = "100%", b.body.appendChild(c) } })
function setTime() {
  var today = new Date();
  var hour = today.getHours() % 12  || 12;
  var minute = today.getMinutes();
  var period = today.toLocaleString([], { hour12: true});
  period = period.split(" ")[2];
  if (hour < 10) {hour = "0" + hour}
  if (minute < 10) {minute = "0" + minute}
  document.getElementById("navtime").innerText = hour + ":" + minute + " " + period
  setTimeout(setTime, 1000);
}
	