document.addEventListener('DOMContentLoaded', function() {
    console.log("Support Cargado")
    var questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            var isVisible = answer.style.display === 'block';
            
            // Ocultar todas las respuestas
            document.querySelectorAll('.faq-answer').forEach(function(item) {
                item.style.display = 'none';
            });
            
            // Mostrar la respuesta clicada si estaba oculta
            if (!isVisible) {
                answer.style.display = 'block';
            }
        });
    });
});

console.log("se esta cargando la beta")
document.addEventListener('DOMContentLoaded', () => {
    // Alumnos en memoria
    let alumnos = [];

    // Referencias a los elementos del DOM
    const alumnoForm = document.getElementById('alumnoForm');
    const alumnoSelect = document.getElementById('alumnoSelect');
    const alumnoTable = document.getElementById('alumnoTable').getElementsByTagName('tbody')[0];
    const markPresentBtn = document.getElementById('markPresentBtn');
    const markAbsentBtn = document.getElementById('markAbsentBtn');
    const fechaElement = document.getElementById('fecha');
    const verInformeBtn = document.getElementById('verInformeBtn');
    const downloadExcelBtn = document.getElementById('downloadExcelBtn');
    const informeDiv = document.getElementById('informeDiv');
    const informeTable = document.getElementById('informeTable').getElementsByTagName('tbody')[0];
    const materiaSelect = document.getElementById('materiaSelect');
    const asignarMateriaBtn = document.getElementById('asignarMateriaBtn');

    // Función para agregar un nuevo alumno
    alumnoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const dni = document.getElementById('dni').value;

        // Verificamos si el DNI ya existe
        if (alumnos.some(alumno => alumno.dni === dni)) {
            alert('Ya existe un alumno con ese DNI.');
            return;
        }

        // Agregar alumno
        const nuevoAlumno = {
            nombre,
            apellido,
            dni,
            asistencia: [],
            materias: [] // Inicializamos la propiedad 'materias'
        };
        alumnos.push(nuevoAlumno);

        // Limpiar el formulario
        alumnoForm.reset();

        // Actualizar la tabla y el select
        renderTable();
        renderSelectOptions();
    });

    // Función para asignar materia a un alumno
    asignarMateriaBtn.addEventListener('click', () => {
        const alumnoSeleccionado = alumnoSelect.value;
        const materiaSeleccionada = materiaSelect.value;

        if (alumnoSeleccionado && materiaSeleccionada) {
            const alumno = alumnos.find(a => a.dni === alumnoSeleccionado);
            if (alumno) {
                // Asignamos la materia si no estaba ya asignada
                if (!alumno.materias.includes(materiaSeleccionada)) {
                    alumno.materias.push(materiaSeleccionada);
                    alert(`${alumno.nombre} ${alumno.apellido} ha sido asignado a la materia ${materiaSeleccionada}.`);
                } else {
                    alert(`${alumno.nombre} ${alumno.apellido} ya está asignado a la materia ${materiaSeleccionada}.`);
                }
                renderTable(); // Actualizamos la tabla
            }
        } else {
            alert('Por favor, selecciona un alumno y una materia.');
        }
    });

    // Función para marcar al alumno como presente
    markPresentBtn.addEventListener('click', () => {
        const alumnoSeleccionado = alumnoSelect.value;
        const materiaSeleccionada = materiaSelect.value;

        if (alumnoSeleccionado && materiaSeleccionada) {
            const alumno = alumnos.find(a => a.dni === alumnoSeleccionado);
            if (alumno) {
                alumno.asistencia.push(`Presente - ${materiaSeleccionada} (${obtenerFechaActual()})`);
                alert(`${alumno.nombre} ${alumno.apellido} marcado como presente en ${materiaSeleccionada}.`);
                renderTable(); // Actualizamos la tabla
            }
        } else {
            alert('Por favor, selecciona un alumno y una materia.');
        }
    });

    // Función para marcar al alumno como ausente
    markAbsentBtn.addEventListener('click', () => {
        const alumnoSeleccionado = alumnoSelect.value;
        const materiaSeleccionada = materiaSelect.value;

        if (alumnoSeleccionado && materiaSeleccionada) {
            const alumno = alumnos.find(a => a.dni === alumnoSeleccionado);
            if (alumno) {
                alumno.asistencia.push(`Ausente - ${materiaSeleccionada} (${obtenerFechaActual()})`);
                alert(`${alumno.nombre} ${alumno.apellido} marcado como ausente en ${materiaSeleccionada}.`);
                renderTable(); // Actualizamos la tabla
            }
        } else {
            alert('Por favor, selecciona un alumno y una materia.');
        }
    });

    // Función para renderizar la tabla con los alumnos
    function renderTable() {
        alumnoTable.innerHTML = ''; // Limpiar la tabla antes de renderizarla

        alumnos.forEach((alumno) => {
            const row = document.createElement('tr');

            const nombreCell = document.createElement('td');
            nombreCell.textContent = alumno.nombre;

            const apellidoCell = document.createElement('td');
            apellidoCell.textContent = alumno.apellido;

            const dniCell = document.createElement('td');
            dniCell.textContent = alumno.dni;

            const asistenciaCell = document.createElement('td');
            asistenciaCell.textContent = alumno.asistencia.length === 0 ? 'No marcado' : alumno.asistencia.join(', ');

            const materiaCell = document.createElement('td');
            materiaCell.textContent = alumno.materias.length === 0 ? 'No asignada' : alumno.materias.join(', ');

            const accionesCell = document.createElement('td');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.onclick = () => deleteAlumno(alumno.dni);
            accionesCell.appendChild(deleteBtn);

            row.appendChild(nombreCell);
            row.appendChild(apellidoCell);
            row.appendChild(dniCell);
            row.appendChild(asistenciaCell);
            row.appendChild(materiaCell);
            row.appendChild(accionesCell);

            alumnoTable.appendChild(row);
        });
    }

    // Función para eliminar un alumno
    function deleteAlumno(dni) {
        alumnos = alumnos.filter(a => a.dni !== dni);
        renderTable();
        renderSelectOptions();
    }

    // Función para renderizar las opciones del select
    function renderSelectOptions() {
        alumnoSelect.innerHTML = '<option value="">Selecciona un alumno</option>';

        alumnos.forEach((alumno) => {
            const option = document.createElement('option');
            option.value = alumno.dni;
            option.textContent = `${alumno.nombre} ${alumno.apellido}`;
            alumnoSelect.appendChild(option);
        });
    }

    // Función para obtener la fecha actual
    function obtenerFechaActual() {
        const fecha = new Date();
        const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
        return fecha.toLocaleDateString('es-ES', opciones);
    }

    // Mostrar la fecha actual
    fechaElement.textContent = obtenerFechaActual();

    // Mostrar informe de asistencia
    verInformeBtn.addEventListener('click', () => {
        const fechaActual = obtenerFechaActual();
        const informe = alumnos.flatMap((alumno) =>
            alumno.asistencia.map((asistencia) => ({
                nombre: alumno.nombre,
                apellido: alumno.apellido,
                dni: alumno.dni,
                asistencia: asistencia,
                fecha: fechaActual
            }))
        );
        renderInforme(informe);
    });

    // Función para renderizar el informe
    function renderInforme(informe) {
        informeTable.innerHTML = ''; // Limpiar la tabla de informe

        informe.forEach((registro) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${registro.nombre}</td>
                <td>${registro.apellido}</td>
                <td>${registro.dni}</td>
                <td>${registro.asistencia}</td>
                <td>${registro.fecha}</td>
            `;
            informeTable.appendChild(row);
        });

        informeDiv.style.display = 'block'; // Mostrar el informe
    }

    // Descargar informe como Excel
    downloadExcelBtn.addEventListener('click', () => {
        const fechaActual = obtenerFechaActual();
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(alumnos);
        XLSX.utils.book_append_sheet(wb, ws, 'Informe Asistencia');
        XLSX.writeFile(wb, `Informe_Asistencia_${fechaActual}.xlsx`);
    });
});
