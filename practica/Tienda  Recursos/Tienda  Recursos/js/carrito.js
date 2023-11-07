class Carrito{
	constructor(id){
		this.id = id
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

		this.verCarrito(articulo) 
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

		if (n == 1){
			articulo.cantidad += 1
		} else if (n == -1){
			articulo.cantidad += -1
		}
		this.verCarrito(articulo)
	}

	verCarrito(articulo) {
		let tabla = document.getElementById("tablaCarrito") 
		tabla.querySelector("tbody").innerHTML = ""  // Limpiar la tabla

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
			masCantidadBOTON.textContent="+"
			masCantidadBOTON.value=+1
			columnaBOTONES.appendChild(masCantidadBOTON)
			masCantidadBOTON.addEventListener("click", function (){
				carrito.modificaUnidades(articulo.codigo,masCantidadBOTON.value)
			})

			let menosCantidadBOTON= document.createElement("button")
			menosCantidadBOTON.textContent="-"
			menosCantidadBOTON.value=-1
			columnaBOTONES.appendChild(menosCantidadBOTON)
			menosCantidadBOTON.addEventListener("click", function (){
				carrito.modificaUnidades(articulo.codigo,menosCantidadBOTON.value)
			})

			let borrarBOTON = document.createElement("button")
			borrarBOTON.textContent="BORRAR"
			columnaBOTONES.appendChild(borrarBOTON)
			borrarBOTON.addEventListener("click", function (){
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
		}) 
	}

	/*
	this.articulos.forEach(a =>{
			let tabla = document.querySelector("tbody")

			let texto = `
				<tr>
					<th><img src="assets/${a.codigo}.jpg" class="imgCarrito"/></th>
					<th>${a.codigo}</th>
					<th>${a.descripcion}</th>
					<th>${a.precio}</th>
					<th></th>
					<th></th>
					<th>
						<button onclick="this.modificaUnidades()">-</button>
						<button onclick="this.modificaUnidades()">+</button>
						<button onclick="this.borraArticulo()">Borrar</button>
					</th>
				</tr>` 
			tabla.innerHTML += texto
		})
		console.log(this.articulos)
	*/
}
