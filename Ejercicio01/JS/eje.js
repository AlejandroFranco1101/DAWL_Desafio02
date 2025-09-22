 const songsArray = [
      {
        song: "Canción Feliz",
        singer: "Banda Alegría",
        label: "Universal Music Group",
        duration: "3:10",
        nationality: "Colombiana",
        cover: "https://i.imgur.com/vV6fCwO.png"
      },
      {
        song: "Sabor Latino",
        singer: "Ritmo Tropical",
        label: "Warner Music Group",
        duration: "3:30",
        nationality: "Cubana",
        cover: "https://i.imgur.com/vsM2t4F.png"
      }
    ];

    function iniciar() {
      displaySongs();
      document.getElementById("frmSong").addEventListener("submit", function () {
        createSongObject(this);
      });
    }

    function createSongObject(form) {
      const newSong = {
        song: form.txtSong.value,
        singer: form.txtSinger.value,
        label: form.txtLabel.value,
        duration: form.txtDuration.value,
        nationality: form.txtNationality.value,
        cover: form.txtCover.value || "https://i.imgur.com/vV6fCwO.png"
      };
      songsArray.push(newSong);
      displaySongs();
      form.reset();
    }

    function displaySongs() {
      let songList = document.getElementById('songList');
      songList.innerHTML = "";
      songsArray.forEach((song, index) => {
        songList.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${song.song}</td>
            <td>${song.singer}</td>
            <td>${song.label}</td>
            <td>${song.duration}</td>
            <td>${song.nationality}</td>
            <td><button class="btn btn-sm play-btn" onclick="playSong(${index})">¡Dale Play!</button></td>
          </tr>
        `;
      });
    }

    function playSong(index) {
      const song = songsArray[index];
      document.getElementById('now-playing-title').textContent = song.singer;
      document.getElementById('now-playing-details').innerHTML = `${song.song} <br> ${song.label}`;
      document.getElementById('nowPlayingDetails').innerHTML = `
        <h5>${song.song}</h5>
        <p><strong>Cantante:</strong> ${song.singer}</p>
        <p><strong>Discográfica:</strong> ${song.label}</p>
        <p><strong>Duración:</strong> ${song.duration}</p>
        <p><strong>Nacionalidad:</strong> ${song.nationality}</p>
      `;
      document.getElementById('coverImage').src = song.cover;
      document.getElementById('nowPlayingPanel').style.display = 'block';
    }

    window.onload = iniciar;