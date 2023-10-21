/* let usuario=document.getElementById("usuario")
let contrasena=document.getElementById("contrasena")  */
let registro=document.getElementById("registro")
let nuevoUsuario=document.getElementById("nuevoUsuario")
let nuevaContrasena=document.getElementById("nuevaContrasena")
let confirmarContrasena=document.getElementById("confirmarContrasena")
let monto=document.getElementById("monto")
let numeroIntentos=3;
let usuarios=[{usuario:"felipe",nuevaContrasena:"123",confirmarContrasena:"123",correo:"hf@gmail.com",monto:100000},{usuarioR:"natalia",nuevacontrasena:"1234",confirmarContrasena:"1234",correo:"nata@.co.com",monto:150000}];
let transacciones=[];
let usuarioActual=null;


registro.addEventListener("click",()=>{ 
   let containerRegistro=document.querySelector(".containerRegistro")
   let containerForm=document.querySelector(".containerForm")
   let mostrarForm=document.getElementById("mostrarForm")
   let registroCopy = registro.cloneNode(true);
  containerForm.append(containerRegistro,registroCopy)
   containerForm.style.display="none"
   containerRegistro.style.display="block"    
   mostrarForm.appendChild(containerRegistro)
})

const registrar = () =>{
   let usuario = document.getElementById('nuevouUsario').value
   let correo = document.getElementById('Correo').value
   let contrasena = document.getElementById('nuevaContrasena').value
   let confirmacion = document.getElementById('confirmarContrasena').value
   let montoApertura = document.getElementById('monto').value
   user = {
       usuario,correo,nuevaContrasena,confirmarContrasena,monto
   }
   
   if (montoApertura >= 100000 && contrasena == confirmacion) {
       usuarios.push(user)
       alert('registro exitoso')
       console.log(user)
   }

   if (montoApertura<=100000){
       alert('el monto requerido es a partir de 100.000 para poder abrir tu cuenta')
   }
   if (contrasena != confirmacion){
       alert('las contrasenas no coinciden')
   }
}


/* function registrar(){
let nuevoUsuario=document.getElementById("nuevoUsuario")
let nuevaContrasena=document.getElementById("nuevaContrasena")
let confirmarContrasena=document.getElementById("confirmarContrasena")
let correo=document.getElementById("Correo")
let monto=document.getElementById("monto")

usuarioRegistrado={nuevoUsuario,nuevaContrasena,confirmarContrasena,correo,monto}
   if(nuevaContrasena==confirmarContrasena && monto>=100000){
      usuarios.push(usuarioRegistrado)
      alert("Registro con exito")    
}
if(nuevaContrasena!=confirmarContrasena){
      alert("contraseña incorrecta")
}if(monto<100000){
  alert("monto no valido")
}
} */









