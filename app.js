const dtitle = document.querySelector(".dtitle");
const dimg = document.getElementsByTagName("img")[0];
const desc = document.querySelector(".desc")
function getPost(){
	/*dtitle.innerText = localStorage.getItem('title')
	dimg.src=localStorage.getItem('image');
	desc.innerText = localStorage.getItem('desc');*/
	let get = localStorage.getItem("post")
	console.log(JSON.parse(get))
	let post='';
	let jsonPost = JSON.parse(get);
	jsonPost.map(
		data=> {
			console.log(data.titlee);
			post += `
			<p class="dtitle">${data.titlee}</p>
            <img src="${data.img}" width="200px">
            <p class="desc">${data.desc}</p>
			`
		}
	);
	document.querySelector('.display').innerHTML = post;
}
getPost();
