class Carrito{
	constructor(id){
		this.id = 28
		this.articulos = []
	}
						
	anyadeArticulo(articulo){
		let articuloCantidad = this.articulos.find( a => a.codigo == articulo.codigo)

		if (articuloCantidad){
			articulo.cantidad +=1
		} else {
			articulo.cantidad = 1
			this.articulos.push(articulo)
		}

		this.verCarrito()
	}
				
	borraArticulo(codigo){
		let articuloIndex = this.articulos.findIndex( a => a.codigo == codigo)
		// this.articulos.splice(articuloIndex,1)
		if (articuloIndex !== -1){
			this.articulos.splice(articuloIndex,1)
		}

		this.verCarrito()
	}
	
	modificaUnidades(codigo,n){
		let articuloFinded = this.articulos.find( a => a.codigo == codigo)
		if (n == +1){
			articuloFinded.cantidad += +1
		} else {
			if (articuloFinded.cantidad <= 1){
				this.borraArticulo(codigo)
			} else {
				articuloFinded.cantidad += -1
			}
		}

		this.verCarrito()
	}	
			
	verCarrito(){
		let carritoContainer = document.getElementById("tabla-carrito")
		carritoContainer.querySelector("tbody").innerHTML=""

		let total = document.getElementById("total")
		let preciofinal = 0

		this.articulos.forEach( a => {
			let articuloRow = document.createElement("tr")

			let imgColum = document.createElement("th")
			let artIMG = document.createElement("img")
			artIMG.className = "img-table"
			artIMG.src =  `./assets/${a.codigo}.jpg`
			imgColum.appendChild(artIMG)

			let nameColum = document.createElement("tr")
			let artName = document.createTextNode(a.nombre)
			nameColum.appendChild(artName)

			let descriptionColum = document.createElement("th")
			let artDescription = document.createTextNode(a.descripcion)
			descriptionColum.appendChild(artDescription)

			let precioColum = document.createElement("th")
			let artPrecio = document.createTextNode(a.precio + "€")
			precioColum.appendChild(artPrecio)

			let cantidadColum = document.createElement("th")
			let artCantidad = document.createTextNode(a.cantidad)
			cantidadColum.appendChild(artCantidad)

			let precioTotalColum = document.createElement("th")
			let precioTotal = document.createTextNode(a.precio * a.cantidad + "€")
			precioTotalColum.appendChild(precioTotal)

			let botonColum = document.createElement("th")

			let botonMAS = document.createElement("button")
			botonMAS.innerHTML = "+"
			botonMAS.className = "btn-info"
			botonMAS.value = +1
			botonMAS.addEventListener("click", () => {
				this.modificaUnidades(a.codigo,botonMAS.value)
			})

			let botonMENOS = document.createElement("button")
			botonMENOS.innerHTML = "-"
			botonMENOS.className = "btn-warning"
			botonMENOS.value = -1
			botonMENOS.addEventListener("click",  () => {
				this.modificaUnidades(a.codigo,botonMENOS.value)
			})

			let botonBorrar = document.createElement("button")
			botonBorrar.innerHTML = "Borrar"
			botonBorrar.className = "btn-danger"
			botonBorrar.addEventListener("click", () => {
				this.borraArticulo(a.codigo)
			})

			botonColum.appendChild(botonMAS)
			botonColum.appendChild(botonMENOS)
			botonColum.appendChild(botonBorrar)

			articuloRow.appendChild(imgColum)
			articuloRow.appendChild(nameColum)
			articuloRow.appendChild(descriptionColum)
			articuloRow.appendChild(precioColum)
			articuloRow.appendChild(cantidadColum)
			articuloRow.appendChild(precioTotalColum)
			articuloRow.appendChild(botonColum)

			carritoContainer.querySelector("tbody").appendChild(articuloRow)

			preciofinal += a.precio * a.cantidad
		})

		total.innerHTML = preciofinal
	}			
}
