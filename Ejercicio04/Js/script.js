const correoNombreRegex = /^([A-Za-zÁÉÍÓÚáéíóúñÑ\s]+)?\s*<?[^\s@]+@[^\s@]+\.[^\s@]+>?$/;

function limpiarError(el) {
    el.classList.remove('error');
    el.classList.remove('valido');
}

function validarCorreo(input) {
    const valor = input.value.trim();
    if (valor === "") {
        input.classList.remove('error');
        input.classList.remove('valido');
        return true;
    }
    const ok = correoNombreRegex.test(valor);
    if (ok) {
        input.classList.remove('error');
        input.classList.add('valido');
    } else {
        input.classList.remove('valido');
        input.classList.add('error');
    }
    return ok;
}

function validarTexto(input) {
    const ok = input.value.trim() !== "";
    if (ok) {
        input.classList.remove('error');
        input.classList.add('valido');
    } else {
        input.classList.remove('valido');
        input.classList.add('error');
    }
    return ok;
}

function validarArchivo(input) {
    const file = input.files && input.files[0];
    if (!file) {
        input.classList.remove('error');
        input.classList.remove('valido');
        return true;
    }
    const permitido = /\.(jpe?g|png|docx|pdf)$/i;
    const ok = permitido.test(file.name);
    if (ok) {
        input.classList.remove('error');
        input.classList.add('valido');
    } else {
        input.classList.remove('valido');
        input.classList.add('error');
    }
    return ok;
}

function enviarCorreo() {
    const de = document.getElementById('de');
    const para = document.getElementById('para');
    const cc = document.getElementById('cc');
    const cco = document.getElementById('cco');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');
    const adj = document.getElementById('adjunto');

    if (!validarCorreo(de) || de.value.trim() === "") {
        alert("Remitente inválido o vacío. Use: Nombre <correo@dominio.com> o correo@dominio.com");
        de.focus();
        return;
    }
    if (!validarCorreo(para) || para.value.trim() === "") {
        alert("Destinatario inválido o vacío. Use: Nombre <correo@dominio.com> o correo@dominio.com");
        para.focus();
        return;
    }
    if (cc.value.trim() !== "" && !validarCorreo(cc)) {
        alert("CC inválido. Use: Nombre <correo@dominio.com> o correo@dominio.com");
        cc.focus();
        return;
    }
    if (cco.value.trim() !== "" && !validarCorreo(cco)) {
        alert("CCO inválido. Use: Nombre <correo@dominio.com> o correo@dominio.com");
        cco.focus();
        return;
    }
    if (!validarTexto(asunto)) {
        alert("El asunto es obligatorio.");
        asunto.focus();
        return;
    }
    if (!validarTexto(mensaje)) {
        alert("El mensaje es obligatorio.");
        mensaje.focus();
        return;
    }
    if (!validarArchivo(adj)) {
        alert("Archivo no permitido. Solo: .jpg, .jpeg, .png, .docx, .pdf");
        adj.focus();
        return;
    }

    // Mostrar datos en la pantalla de resultados
    document.getElementById('rDe').textContent = de.value || "(vacío)";
    document.getElementById('rPara').textContent = para.value || "(vacío)";
    document.getElementById('rCC').textContent = cc.value || "(ninguno)";
    document.getElementById('rCCO').textContent = cco.value || "(ninguno)";
    document.getElementById('rAsunto').textContent = asunto.value;
    document.getElementById('rMensaje').textContent = mensaje.value;
    document.getElementById('rAdjunto').textContent = (adj.files && adj.files[0]) ? adj.files[0].name : "(ninguno)";

    document.getElementById('resultado').style.display = 'block';
    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });

    // Mostrar mensaje de éxito
    const mensajeExito = document.getElementById('mensajeExito');
    mensajeExito.style.display = 'block';
    setTimeout(() => { mensajeExito.style.display = 'none'; }, 3000);

    // Limpiar formulario
    de.value = "";
    para.value = "";
    cc.value = "";
    cco.value = "";
    asunto.value = "";
    mensaje.value = "";
    adj.value = "";
    limpiarError(de);
    limpiarError(para);
    limpiarError(cc);
    limpiarError(cco);
    limpiarError(asunto);
    limpiarError(mensaje);
}

// Alternar modo claro/oscuro
document.getElementById("toggleTema").addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Cambiar icono del botón 🌙 ☀️
    const btn = document.getElementById("toggleTema");
    if (document.body.classList.contains("dark")) {
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
});