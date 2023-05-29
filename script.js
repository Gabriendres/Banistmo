function addPhoto() {
    const photoUrl = document.getElementById("photo-url").value;
    const petName = document.getElementById("pet-name").value;

    if (photoUrl && petName) {
        const photoCard = document.createElement("div");
        photoCard.className = "photo-card";
        photoCard.innerHTML = `
            <img src="${photoUrl}" alt="${petName}" style="width: 300px; height: 400px;">
            <h3>${petName}</h3>
        `;

        document.getElementById("photo-gallery").appendChild(photoCard);

        // Limpiar los campos del formulario
        document.getElementById("photo-url").value = "";
        document.getElementById("pet-name").value = "";
    }
}
