import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PeliculasService {
	public mockApi: string = 'https://api.mocki.io/v1/40013b0a';

	constructor(private firestore: AngularFirestore, private http: HttpClient) {
	}

	public traerTodosTiempoReal() {
		//return this.http.get(this.mockApi);
		return this.firestore.collection('peliculas').snapshotChanges();
	}

	public traerTodos() {
		//return this.http.get(this.mockApi).toPromise();
		return this.firestore.collection('peliculas').get().toPromise();
	}

	public borrarPelicula(id: string) {
		this.firestore.collection('peliculas').doc(id).delete();
	}

	public agregarPelicula(pelicula) {
		return this.firestore.collection('peliculas').add({
			nombre: pelicula.nombre,
			tipo: pelicula.tipo,
			fechaDeEstreno: pelicula.fechaDeEstreno,
			cantidadDePublico: pelicula.cantidadDePublico,
			fotoDeLaPelicula: pelicula.fotoDeLaPelicula,
			actores: pelicula.actores
		});
	}
}
