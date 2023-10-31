self.addEventListener("install", (event) => {
    
    const recursos = caches.open("Boveda").then(cache=>{
      cache.add("/"),
      cache.add("assets/img/adTi.jpg"),
      cache.add("assets/img/back.jpg"),
      cache.add("assets/img/HA.jpg"),
      cache.add("assets/img/p1.jpg"),
      cache.add("assets/img/p2.jpg"),
      cache.add("assets/img/p3.jpg"),
      cache.add("assets/img/p4.jpg"),
      cache.add("assets/img/p5.jpg"),
      cache.add("assets/img/p6.jpg"),
      cache.add("assets/img/p7.jpg"),
      cache.add("assets/img/p8.jpg"),
      cache.add("assets/img/p9.jpg"),
      cache.add("assets/img/p10.jpg"),
      cache.add("assets/icons/564x341.png"),
      cache.add("index.html"),
      cache.add("interfaz2.html"),
      cache.add("js/app.js"),
      cache.add("js/bootstrap.min.js"),
      cache.add("js/sweetalert2.all.min.js"),
      cache.add("css/style.css"),
      cache.add("css/bootstrap.min.css"),
      cache.add("manifest.json")
    
    })
    event.waitUntil(recursos);
  });
  
 
  
  self.addEventListener('fetch',event =>{
      
  
      //estrategia 3 first network then cache
      const respuesta = fetch(event.request).then (newResp=>{
        //si no existe el archivo, vamos a internet hay 
        //que almacenar los recursos borrados de nuevo en el cache
        caches.open('Boveda1').then(cache=>{
            cache.put(event.request,newResp);
  
        });
    
    
            return newResp.clone();
        }).catch(err=>{
            return caches.match(event.request);
        })
    
    event.respondWith(respuesta);
  });