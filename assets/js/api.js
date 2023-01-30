
let URL_API     = 'https://fakestoreapi.com/products';
let URL_API_JPH = 'https://jsonplaceholder.typicode.com/posts';
const ul        = document.querySelector('.list-group');


document.querySelector('.btn-info').addEventListener('click', obtenerProductos);
/**
 * Creo una función asíncrona obtenerMiData que hace una solicitud GET a la URL URL_API_JPH
*/

async function obtenerMiData(){
//La función await espera a que la respuesta esté disponible antes de continuar.
let peticion =  await  axios.get(URL_API_JPH)
    .then(function(response) {
        console.log(response.data);
    })
  .catch(function(error) {
    //La función catch maneja los errores y muestra el error en la consola
    console.log(error);
  });
}


async function obtenerProductos() {
  try {
    const response = await  axios.get(URL_API);
    console.log(response.data);
    let dataResp = response.data;
    console.log(dataResp);

    dataResp.forEach((elemento, i) => {
        console.log(elemento);
        
        let listItem    = document.createElement('li');
        listItem.className += 'list-group-item';
        //El método JSON.stringify() convierte un objeto en una cadena de texto JSON
        listItem.textContent = JSON.stringify(elemento.title);
        ul.appendChild(listItem);        
    });
  } catch (error) {
    console.log('Error en la Solictud');
  }
 

}