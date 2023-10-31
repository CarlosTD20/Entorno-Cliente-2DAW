	criterios=["Sin ordenar","Ascendente por precio", "Descendente por precio"]

	function creaListaCriterios(){
		let selectOrder = document.getElementById("criteriosOrdenacion")
		criterios.forEach(p=>{
			let criteriosName = document.createElement("option")
			let text = document.createTextNode(p)
			criteriosName.appendChild(text).valueOf(text)
			//console.log(criteriosName.value)
			selectOrder.appendChild(criteriosName)

			selectOrder.addEventListener("change", function (){
				let selectedValue = selectOrder.value
				pintaArticulos(selectedValue)
			})
		})
	}


	function pintaArticulos(orden){
		console.log(orden);
		let divPrincipal = document.getElementById("contenedor");

		// Clona la lista de artículos para no modificar la original
		let listaArticulosOrdenada = listaArticulos.slice()

		// Limpia el contenedor antes de agregar los nuevos elementos
		divPrincipal.innerHTML = "";

		if (orden === "Sin ordenar") {
			// No se realiza ninguna ordenación
			listaArticulos.forEach(a => {
				agregarArticulo(divPrincipal, a);
			});
		} else if (orden === "Ascendente por precio") {
			// Ordena la lista de artículos por precio de forma ascendente
			listaArticulosOrdenada.sort((a, b) => b.precio - a.precio).forEach(a => {
				agregarArticulo(divPrincipal, a);
			});
		} else if (orden === "Descendente por precio") {
			// Ordena la lista de artículos por precio de forma descendente
			listaArticulosOrdenada.sort((a, b) => a.precio - b.precio).forEach(a => {
				agregarArticulo(divPrincipal, a);
			});
		}
	}

	// Función para agregar un artículo al contenedor
	function agregarArticulo(contenedor, articulo) {
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
                <button id="${articulo.codigo}" class="btn-success">Comprar</button>
            </div>
        </div>`;
		contenedor.innerHTML += texto;
	}
	
	
	function ponArticuloEnCarrito(){
		
	}


	function verCarro(){
	
	}

	function efectuaPedido(){
	
	}

	window.onload=()=>{
		creaListaCriterios()
		pintaArticulos()
	}

