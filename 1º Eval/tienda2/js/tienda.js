	criterios=["Sin ordenar","Ascendente por precio", "Descendente por precio"]
	let carrito
	window.onload=()=>{
		carrito = new Carrito()
		creaListaCriterios()
		pintaArticulos(listaArticulos)
		verCarro()
	}

	function creaListaCriterios(){
		let criteriosContent = document.getElementById("criteriosOrdenacion")
		criterios.forEach( c =>{
			let optionName = document.createElement("option")
			let optionText = document.createTextNode(c)
			optionName.appendChild(optionText).valueOf(c)
			criteriosContent.appendChild(optionName)
		})

		criteriosContent.addEventListener("change", function (){
			let listaArticulosCopia = listaArticulos.slice()
			if (criteriosContent.value == "Sin ordenar"){
				pintaArticulos(listaArticulos)
			} else if(criteriosContent.value == "Ascendente por precio"){
				listaArticulosCopia.sort((a,b) => b.precio - a.precio)
				pintaArticulos(listaArticulosCopia)
			} else if(criteriosContent.value == "Descendente por precio"){
				listaArticulosCopia.sort((a,b) => a.precio - b.precio)
				pintaArticulos(listaArticulosCopia)
			}
		})
	}

	function pintaArticulos(lista){
		let contenedor = document.getElementById("contenedor")
		contenedor.innerHTML = ""
		lista.forEach(p =>{
			contenedor.innerHTML += `
				<div class="col">
					<div class="card">
						<img src="assets/${p.codigo}.jpg" class="card-img-top"/>
						<div class="card-body">
							<h5 class="card-title">${p.nombre}</h5>
							<p class="card-text">${p.descripcion}</p>
							<b>
								<p class="card-text text-center">${p.precio} €		</p>
							</b>
						</div>
						<button id=${p.codigo}   class="btn-success">Comprar</button>
					</div>
				</div>`
		})

		let buttons = document.getElementsByClassName("btn-success")
		Array.from(buttons).forEach( b => {
			b.addEventListener("click", function (){
				console.log(b.id)
				ponArticuloEnCarrito(b.id)
			})
		})
	}
	
	
	function ponArticuloEnCarrito(id){
		let articulo = listaArticulos.find( a => a.codigo == id)
		carrito.anyadeArticulo(articulo)
	}


	function verCarro(){
		document.getElementsByTagName("img")[0].addEventListener("click", function (){
			let dialog = document.getElementById("miDialogo")

			if (carrito.articulos.length === 0){
				alert("El carrito se encuentra vacio")
			} else {
				dialog.showModal()
			}

			document.getElementById("btnCierraDialog").addEventListener("click",function (){
				dialog.close()
			})
			document.getElementById("btnEfectuaPedido").addEventListener("click",function (){
				efectuaPedido()
				dialog.close()
			})
		})
	}

	function efectuaPedido(){
		console.log(JSON.stringify(carrito))
		carrito = new Carrito()
	}