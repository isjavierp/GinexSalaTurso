import{$ as n}from"./dom.DyxYIT6y.js";import"./hoisted.VqTYtgAw.js";window.localStorage.getItem("username")&&(window.location.href="/");const r=n("form");r?.addEventListener("submit",async t=>{t.preventDefault();const o=Object.fromEntries(new FormData(t.target)),e=await fetch("/api/users.json",{method:"PUT",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}),a=await e.json();if(!e.ok){const{message:s}=a;if(s.startsWith("4")){alert("Datos invalidos");return}alert("Este usuario no existe");return}localStorage.setItem("username",a.data.username),alert("Contraseña actualizada exitosamente"),window.location.href="/"});
