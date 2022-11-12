
self.addEventListener('fetch', event => {

    
   /*  if ( event.request.url.includes( 'style.css' )) {
         event.respondWith( null );
    } else {
         event.respondWith( fetch( event.request ) );
    }  */

    if ( event.request.url.includes('.jpeg') ) {
        console.log( event.request.url );
    }


   /*  if ( event.request.url.includes( 'style.css' ) ) {

        let respuesta = new Response(`
            body { 
                background-color: rgb(215, 212, 231) !important; 
            }
            h1, h2, h3, h4, h5{
                
            }`
        , {
            headers: {
                'Content-Type': 'text/css'
            }
        });

        event.respondWith( respuesta );

    } */

   /*  event.respondWith( fetch('img/main-patas-arriba.jpg' ) ); */

/*
    const resp = fetch( event.request )
    .then( resp => {

        return resp.ok ? resp : fetch('img/main.jpg');
        if (resp.ok) {
            return resp;
        } else {
            return fetch('img/main.jpg');
        }
    });

    event.respondWith( resp );
*/
});
