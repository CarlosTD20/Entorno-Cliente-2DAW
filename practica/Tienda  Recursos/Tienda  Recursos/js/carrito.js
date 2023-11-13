class Carrito{
	constructor(id){
		this.id = 28
		this.articulos =[]
	}

	anyadeArticulo(articulo) {
		let articulorepetido = this.articulos.find(a => a.codigo == articulo.codigo)

		if (articulorepetido){
			articulorepetido.cantidad +=1
		} else {
			articulo.cantidad = 1
			this.articulos.push(articulo) 
		}

		this.verCarrito()
	}
				
	borraArticulo(codigo){
		let index = this.articulos.findIndex(a => a.codigo === codigo);
		if (index !== -1){
			this.articulos.splice(index,1)
		}
		this.verCarrito()
	}

	modificaUnidades(codigo, n) {
		console.log(n)
		let articulo = this.articulos.find(articulo => articulo.codigo === codigo)
		if (articulo.cantidad <=1){
			this.borraArticulo(codigo)
		} else if (n == 1){
			articulo.cantidad += 1
		} else if (n == -1){
			articulo.cantidad += -1
		}
		this.verCarrito()
	}

	verCarrito() {

		let tabla = document.getElementById("tablaCarrito")
		let spanTOTAL = document.getElementById("total")
		let sumaTotal = 0

		tabla.querySelector("tbody").innerHTML = ""  // Limpiar la tabla

		document.getElementById("btnEfectuaPedido").addEventListener("click",function (){
			tabla.innerHTML=""
			sumaTotal = 0;
			spanTOTAL.textContent = sumaTotal;
		})

		if (this.articulos.length === 0) {
			spanTOTAL.textContent = 0;
		} else {
			this.articulos.forEach((articulo) => {
				let fila = document.createElement("tr")

				let columIMG = document.createElement("td")
				let IMG = document.createElement("img")
				IMG.className = "imgCarrito"
				IMG.src = `./assets/${articulo.codigo}.jpg`
				columIMG.appendChild(IMG)

				let columNAME = document.createElement("td")
				let NAME = document.createTextNode(articulo.nombre)
				columNAME.appendChild(NAME)

				let columDESCRIPCION = document.createElement("td")
				let DESCRIPCION = document.createTextNode(articulo.descripcion)
				columDESCRIPCION.appendChild(DESCRIPCION)

				let colunPRECIO = document.createElement("td")
				let PRECIO = document.createTextNode(articulo.precio)
				colunPRECIO.appendChild(PRECIO)

				let columCANTIDAD = document.createElement("td")
				let CANTIDAD = document.createTextNode(articulo.cantidad)
				columCANTIDAD.appendChild(CANTIDAD)

				let columnaTOTAL = document.createElement("td")
				let TOTAL = document.createTextNode(articulo.precio * articulo.cantidad)
				columnaTOTAL.appendChild(TOTAL)

				let columnaBOTONES = document.createElement("td")

				let masCantidadBOTON = document.createElement("button")
				masCantidadBOTON.textContent = "+"
				masCantidadBOTON.className = "btn-primary"
				masCantidadBOTON.value = +1
				columnaBOTONES.appendChild(masCantidadBOTON)
				masCantidadBOTON.addEventListener("click", function () {
					carrito.modificaUnidades(articulo.codigo, masCantidadBOTON.value)
				})

				let menosCantidadBOTON = document.createElement("button")
				menosCantidadBOTON.textContent = "-"
				menosCantidadBOTON.className = "btn-warning"
				menosCantidadBOTON.value = -1
				columnaBOTONES.appendChild(menosCantidadBOTON)
				menosCantidadBOTON.addEventListener("click", function () {
					carrito.modificaUnidades(articulo.codigo, menosCantidadBOTON.value)
				})

				let borrarBOTON = document.createElement("button")
				borrarBOTON.textContent = "BORRAR"
				borrarBOTON.className = "btn-danger"
				columnaBOTONES.appendChild(borrarBOTON)
				borrarBOTON.addEventListener("click", function () {
					carrito.borraArticulo(articulo.codigo)
				})

				fila.appendChild(columIMG)
				fila.appendChild(columNAME)
				fila.appendChild(columDESCRIPCION)
				fila.appendChild(colunPRECIO)
				fila.appendChild(columCANTIDAD)
				fila.appendChild(columnaTOTAL)
				fila.appendChild(columnaBOTONES)

				tabla.querySelector("tbody").appendChild(fila)

				sumaTotal += articulo.precio * articulo.cantidad



			})
			spanTOTAL.textContent = sumaTotal
		}
	}
}
