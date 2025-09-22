// Array de canciones con datos de ejemplo
        let songsArray = [
            {
                song: "Canción Feliz", 
                singer: "Banda Alegría", 
                label: "Universal Music Group", 
                duration: "03:10", 
                nationality: "Colombiana", 
                cover: "https://images.portaldisc.com/l/discos/430/7848.jpg"
            },
            {
                song: "Sabor Latino", 
                singer: "Ritmo Tropical", 
                label: "Warner Music Group", 
                duration: "03:30", 
                nationality: "Cubana", 
                cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/83/67/33/83673352-eb2b-9325-6887-81c09aeb3ad5/8435609923665.jpg/1200x630bb.jpg"
            },
            {
                song: "Cumpleaños Feliz", 
                singer: "Parchis", 
                label: "Discos Belter", 
                duration: "03:30", 
                nationality: "España", 
                cover: "https://cdn-images.dzcdn.net/images/cover/a10d09e9362bbba963a045927feda833/0x1900-000000-80-0-0.jpg"
            }
        ];

        // Inicializar la aplicación
        function iniciar() {
            displaySongs();
            document.getElementById("frmSong").addEventListener("submit", function(e){
                e.preventDefault();
                if(validarFormulario(this)) crearCancion(this);
            });
        }

        // Validar el formulario
        function validarFormulario(form){
            const soloTexto = /^[^0-9]+$/;
            const duracion = /^([0-5]?[0-9]):([0-5][0-9])$/;
            
            if(!form.txtSong.value.trim() || !soloTexto.test(form.txtSong.value.trim())) { 
                alert("El nombre de la canción es obligatorio y no puede contener números."); 
                return false;
            }
            if(!form.txtSinger.value.trim() || !soloTexto.test(form.txtSinger.value.trim())) { 
                alert("El nombre del cantante es obligatorio y no puede contener números."); 
                return false;
            }
            if(!form.txtLabel.value.trim() || !soloTexto.test(form.txtLabel.value.trim())) { 
                alert("La discográfica es obligatoria y no puede contener números."); 
                return false;
            }
            if(!form.txtNationality.value.trim() || !soloTexto.test(form.txtNationality.value.trim())) { 
                alert("La nacionalidad es obligatoria y no puede contener números."); 
                return false;
            }
            if(!duracion.test(form.txtDuration.value.trim())) { 
                alert("La duración debe tener formato mm:ss"); 
                return false;
            }
            return true;
        }

        // Crear una nueva canción
        function crearCancion(form){
            // Obtener los valores del formulario
            const songName = form.txtSong.value.trim();
            const singer = form.txtSinger.value.trim();
            const label = form.txtLabel.value.trim();
            const duration = form.txtDuration.value.trim();
            const nationality = form.txtNationality.value.trim();
            let coverUrl = form.txtCover.value.trim();
            
            console.log("URL de la imagen ingresada:", coverUrl); // Para debugging
            
            // Si no se proporciona una URL de imagen, usar una por defecto
            if (!coverUrl) {
                coverUrl = "https://picsum.photos/180/180?random=" + Math.floor(Math.random() * 1000);
            }
            
            const nuevaCancion = {
                song: songName,
                singer: singer,
                label: label,
                duration: duration,
                nationality: nationality,
                cover: coverUrl
            };
            
            console.log("Nueva canción agregada:", nuevaCancion); // Para debugging
            
            songsArray.push(nuevaCancion);
            displaySongs();
            form.reset();
            
            alert("Canción agregada correctamente!");
        }

        // Mostrar las canciones en la tabla
        function displaySongs(){
            const songList = document.getElementById('songList');
            songList.innerHTML = "";
            
            songsArray.forEach((cancion, index) => {
                const fila = document.createElement('tr');
                
                fila.innerHTML = `
                    <td>${index + 1}</td>
                    <td>
                        <img src="${cancion.cover}" 
                             alt="Portada de ${cancion.song}" 
                             class="song-cover"
                             onerror="this.src='https://via.placeholder.com/60.png?text=Imagen+no+disponible'">
                    </td>
                    <td>${cancion.song}</td>
                    <td>${cancion.singer}</td>
                    <td>${cancion.label}</td>
                    <td>${cancion.duration}</td>
                    <td>${cancion.nationality}</td>
                    <td>
                        <button class="btn btn-sm play-btn" onclick="playSong(${index})">
                            ¡Dale Play!
                        </button>
                    </td>
                `;
                
                songList.appendChild(fila);
            });
        }

        // Reproducir una canción (mostrar detalles)
        function playSong(index){
            const cancion = songsArray[index];
            
            console.log("Reproduciendo canción:", cancion); // Para debugging
            
            // Actualizar el header
            document.getElementById('now-playing-title').textContent = cancion.singer;
            document.getElementById('now-playing-details').innerHTML = 
                `<strong>${cancion.song}</strong><br>${cancion.label}`;
            
            // Actualizar la portada
            const coverContainer = document.getElementById('coverImageContainer');
            coverContainer.innerHTML = '';
            coverContainer.className = '';
            
            const img = document.createElement('img');
            img.src = cancion.cover;
            img.alt = `Portada de ${cancion.song}`;
            img.className = 'cover-img';
            img.onerror = function() {
                // Si la imagen no carga, mostrar un placeholder
                coverContainer.innerHTML = '<span>Imagen no disponible</span>';
                coverContainer.className = 'default-cover';
            };
            
            coverContainer.appendChild(img);
            
            // Actualizar los detalles
            document.getElementById('nowPlayingDetails').innerHTML = `
                <h5>${cancion.song}</h5>
                <p><strong>Cantante:</strong> ${cancion.singer}</p>
                <p><strong>Discográfica:</strong> ${cancion.label}</p>
                <p><strong>Duración:</strong> ${cancion.duration}</p>
                <p><strong>Nacionalidad:</strong> ${cancion.nationality}</p>
            `;
        }

        // Inicializar la aplicación cuando se carga la página
        window.onload = iniciar;
