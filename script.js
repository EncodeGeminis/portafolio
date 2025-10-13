const imagesByProject = {
    proyecto1: [
        "media/icon_default_2.png",
        "media/icon_default_3.png"
    ],
    proyecto2: [
        "media/icon_default_2.png",
        "media/icon_default_3.png"
    ],
    englishApp: [
        "media/englishApp/english_1.png",
        "media/englishApp/english_2.png",
        "media/englishApp/english_3.png",
        "media/englishApp/english_4.png",
        "media/englishApp/english_5.png"
    ],
    javaProjects: [
        "media/java/java_1.png",
        "media/java/java_2.png",
        "media/java/java_3.png"
    ],
    springSecurity: [
        "media/spring_security/spring_security_1.png",
        "media/spring_security/spring_security_2.png"
    ],
    spring: [
        "media/spring/crud_1.png",
        "media/spring/crud_2.png",
        "media/spring/crud_3.png",
        "media/spring/crud_4.png",
        "media/spring/crud_5.png",
        "media/spring/crud_6.png",
        "media/spring/crud_7.png",
        "media/spring/crud_8.png",
        "media/spring/crud_9.png",
        "media/spring/crud_10.png"
    ],
    android: [
        "media/android/android_1.jpg",
        "media/android/android_2.jpeg",
        "media/android/android_3.jpeg",
        "media/android/android_4.jpg",
        "media/android/android_5.jpg",
        "media/android/android_6.jpg",
        "media/android/android_10.jpg",
        "media/android/android_8.jpeg",
        "media/android/android_9.jpg"
    ]
};

let currentProject = "";
let currentIndex = 0;

const carouselModal = document.getElementById("carousel-modal");
const carouselImg = document.getElementById("carousel-img");

/* 🔹 Abrir el carrusel */
function openCarousel(projectName) {
    currentProject = projectName;
    currentIndex = 0;
    carouselImg.src = imagesByProject[projectName][currentIndex];
    carouselModal.classList.remove("hidden");
}

/* 🔹 Cerrar el carrusel */
function closeCarousel() {
    carouselModal.classList.add("hidden");
}

/* 🔹 Navegación entre imágenes */
function nextImage() {
    const images = imagesByProject[currentProject];
    currentIndex = (currentIndex + 1) % images.length;
    carouselImg.src = images[currentIndex];
}

function prevImage() {
    const images = imagesByProject[currentProject];
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselImg.src = images[currentIndex];
}

/* 🔹 Cerrar al hacer clic fuera de la imagen */
carouselModal.addEventListener("click", (event) => {
    // Si el clic fue directamente sobre el fondo (no en la imagen ni en botones)
    if (event.target === carouselModal) {
        closeCarousel();
    }
});

/* 🔹 (Opcional) cerrar con tecla ESC */
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !carouselModal.classList.contains("hidden")) {
        closeCarousel();
    }
});

/* 🔹 Alternar lista del blog */
function toggleBlogList() {
    document.getElementById("blog-list").classList.toggle("hidden");
}
