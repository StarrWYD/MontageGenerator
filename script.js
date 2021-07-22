var objectkeys = Object.keys(object)
var numlist = Array.apply(null, Array(objectkeys.length)).map(function (_, i) {return i;})
function getRandomInt() {
	var x = numlist[Math.floor(Math.random()*numlist.length)]
	return x
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function video() {
	document.getElementById('btn2wrap').style.visibility = 'hidden';
	document.getElementById('pgbani').style.animation = 'none';	
	document.getElementById('title').innerHTML = "";
	document.getElementById('info').innerHTML = "";
	var vidnum = getRandomInt()
	var vid = objectkeys[vidnum]
	var vid = object[vid]
	var vid = vid[0]
	var vidurl = vid['url']
	var vidname = vid['title']
	document.getElementById('btnwrap').style.visibility = 'hidden';
	document.getElementsByClassName('meter')[0].style.visibility = 'visible';
	document.getElementById('pgbani').style.animation = 'example 12s 1 running'
	sleep(1500)
	.then(() => { document.getElementById('info').innerHTML = 'Generating Montage...'; })
	.then(() => {
		sleep(1500)
		.then(() => { document.getElementById('info').innerHTML = 'Loading...'; })
		.then(() => {
			sleep(1500)
			.then(() => { document.getElementById('info').innerHTML = 'Setting Data...'; })
			.then(() => {
				sleep(1500)
				.then(() => { document.getElementById('info').innerHTML = 'Montage Selected'; })
				.then(() => {
					sleep(1500)
					.then(() => { document.getElementById('title').innerHTML = "Montage: " + vidname; })
					.then(() => {
						sleep(4500)
						.then(() => { window.open(vidurl) })
						.then(() => { document.getElementById('btn2wrap').style.visibility = 'visible'; })
						.then(() => { document.getElementById('pgbani').style.animation = 'none'; })
					})
				})
			})
		})
	});
}