	criterios=["Sin ordenar","Ascendente por precio", "Descendente por precio"]

	window.onload=()=>{
		creaListaCriterios()
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
			let divPrincipal = document.getElementById("contenedor");

			let listaArticulosOrdenada = listaArticulos.slice() // Clona la lista de artículos para no modificar la original

			divPrincipal.innerHTML = "";

			if (selectOrder.value== "Sin ordenar") {
				listaArticulos.forEach(a => {
					pintaArticulos(divPrincipal, a);
				});
			} else if (selectOrder.value == "Ascendente por precio") {
				listaArticulosOrdenada.sort((a, b) => b.precio - a.precio).forEach(a => {
					pintaArticulos(divPrincipal, a);
				});
			} else if (selectOrder.value == "Descendente por precio") {
				listaArticulosOrdenada.sort((a, b) => a.precio - b.precio).forEach(a => {
					pintaArticulos(divPrincipal, a);
				});
			}
		})
	}

	function pintaArticulos(contenedor, articulo){
		let texto = `
        <div class="col">
            <div class="card">
                <img src="assets/${articulo.codigo}.jpg" class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">${articulo.nombre}</h5>
                    <p class="card-text">${articulo.descripcion}</p>
                    <b>
                        <p class="card-text text-center">${articulo.precio}</p>
                    </b>
                </div>
                <button id="${articulo.codigo}" onclick="ponArticuloEnCarrito(id)" class="btn-success">Comprar</button>
            </div>
        </div>`;
		contenedor.innerHTML += texto;
	}

	let carrito = new Carrito();

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
			console.log(this.carrito.constructor)
		})
	}