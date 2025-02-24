const header = document.querySelector("header");
const footer = document.getElementById("customfooter");
header.innerHTML = `
<nav>
        <img src="../images/Logotipo TCU blanco.png" style="width: 11%; height: auto;">
        <div class="mobile-menu">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <ul class="nav-list">
          <li><a href="../principal.html">Inicio</a></li>
          <li>
           <a href="#">Proyecto</a>
           <ul class="sub-menu">
             <li><a href="../HTMLS/sigaru.html">Sigaru</a></li>
             <li><a href="../HTMLS/tutoriales.html">Tutoriales</a></li>
             <li><a href="../HTMLS/cartografia.html">Cartografia</a></li>
           </ul>
          </li>
          <li>
            <a href="#">Estudiantes</a>
            <ul class="sub-menu">
            <li><a href="../HTMLS/cuentas.html">Cuenta</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSegqGsI6QiB6x8ia3ti4WMJG3drLg2lw0n2jTUocH0RsgPqcA/viewform" target="_blank" rel="noopener noreferrer">Bitacora</a></li>
            <li><a href="../HTMLS/informe.html">Informe</a></li>
            </ul>
          </li>
          <li><a href="../HTMLS/nosotros.html">Nosotros</a></li>
          <li><a href="../HTMLS/contacto.html">Contacto</a></li>
        </ul>
      </nav>
`;
footer.innerHTML = `
<div class="footer-bottom">
    <p>Trabajo Comunal Universitario | UTN </p>
</div>
`;
