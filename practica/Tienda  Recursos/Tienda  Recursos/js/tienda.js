	criterios=["Sin ordenar","Ascendente por precio", "Descendente por precio"]
	let carrito
	window.onload=()=>{
		carrito = new Carrito();
		creaListaCriterios()
		pintaArticulos(listaArticulos)
		verCarro()
	}

	function creaListaCriterios(){
		let selectOrder = document.getElementById("criteriosOrdenacion")
		criterios.forEach(p=>{
			let criteriosName = document.createElement("option")
			let text = document.createTextNode(p)
			criteriosName.appendChild(text).valueOf(text)
			selectOrder.appendChild(criteriosName)
		})

		selectOrder.addEventListener("change", function (){
			let listaArticulosOrdenada = listaArticulos.slice() // Clona la lista de artículos para no modificar la original

			if (selectOrder.value== "Sin ordenar") {
				pintaArticulos(listaArticulos)
			} else if (selectOrder.value == "Ascendente por precio") {
				listaArticulosOrdenada.sort((a, b) => b.precio - a.precio)
				pintaArticulos(listaArticulosOrdenada)
			} else if (selectOrder.value == "Descendente por precio") {
				listaArticulosOrdenada.sort((a, b) => a.precio - b.precio)
				pintaArticulos(listaArticulosOrdenada)
			}
		})
	}

	function pintaArticulos(articulosList){
		let divPrincipal = document.getElementById("contenedor");
		divPrincipal.innerHTML = "";
		articulosList.forEach(a=>{
			let texto = `
				<div class="col">
					<div class="card">
						<img src="assets/${a.codigo}.jpg" class="card-img-top"/>
						<div class="card-body">
							<h5 class="card-title">${a.nombre}</h5>
							<p class="card-text">${a.descripcion}</p>
							<b>
								<p class="card-text text-center">${a.precio}</p>
							</b>
						</div>
						<button id="${a.codigo}" onclick="ponArticuloEnCarrito(id)" class="btn-success">Comprar</button>
					</div>
				</div>`;
			divPrincipal.innerHTML += texto;
		})
	}



	function ponArticuloEnCarrito(id){
		let articulo = listaArticulos.find(p=>p.codigo == id)
		carrito.anyadeArticulo(articulo)
	}


	function verCarro() {
		let carritoButton = document.getElementsByTagName("img")[0]; // Obtener la primera imagen

		carritoButton.addEventListener("click", function () {
			let carritoDialog= document.getElementById("miDialogo")
			if (carrito.articulos.length === 0) {
				alert("El carrito está vacío, añada algún producto");
			} else {
				carritoDialog.showModal()
			}
			document.getElementById("btnCierraDialog").addEventListener("click",function (){
				carritoDialog.close()
			})

			efectuaPedido(carritoDialog)
		})

	}

	function efectuaPedido(carritoDiallog){
		document.getElementById("btnEfectuaPedido").addEventListener("click",function (){
			carritoDiallog.close()
			console.log(JSON.stringify(carrito))
		})
	}