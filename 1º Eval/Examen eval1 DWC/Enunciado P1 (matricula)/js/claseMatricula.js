// Definicion clase Matricula		
class Matricula{
		constructor(){
			this.dni = null
			this.nombre = null
			this.maodulos = []
		}
		
		anyadeModulo(modulo){
			let moduloExistente = this.maodulos.find( m => m.codigo === modulo.codigo)
			if (moduloExistente){
				alert('Este modulo ya se encuntra en la matricula')
			} else {
				this.maodulos.push(modulo)
			}
			this.verMatricula()
		}
		
		borraModulo(codigo){
			let indexModulo = this.maodulos.findIndex( i => i.codigo == codigo)
			this.maodulos.splice(indexModulo,1)
			this.verMatricula()
		}
		
		verMatricula(){
			let tablamatriucla = document.getElementById("capamatricula")
			tablamatriucla.innerHTML=""
			this.maodulos.forEach( m => {
				tablamatriucla.innerHTML += `
						<table class='table table-bordered table-striped'>
							<tr>
								<td>${m.nombre}<td>${m.creditos}<td><button id=${m.codigo} class='btn btn-danger'>Borrar</button>
							</tr>
						</table>
						`

			})

			if (this.maodulos.length != 0){

				tablamatriucla.innerHTML += `
        		<button id="finalizarMatricula" class="btn-info">Realizar Matricula</button>
				`
				let buttonFinMatriucla = document.getElementById("finalizarMatricula");
				buttonFinMatriucla.addEventListener("click", () => {
					alert(JSON.stringify(matricula))
					this.finalizarMatricula()

				})
			}

			let buttoBorrar = document.getElementsByClassName("btn")
			Array.from(buttoBorrar).forEach(b => {
				b.addEventListener("click",  () => {
					this.borraModulo(b.id)
				})
			})
		}

		finalizarMatricula(){
			if (this.nombre.trim() === "" || this.dni.trim() === "") {
				alert("Error: El nombre no puede estar vacío.");
			} else if (this.nombre.includes(" ") || this.dni.includes(" ")) {
				alert("Error: El nombre no puede contener espacios en blanco.");
			} else{
				alert(JSON.stringify(matricula))
			}
		}
}