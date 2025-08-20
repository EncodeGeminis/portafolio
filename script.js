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
        "media/android/android_1.jpeg",
        "media/android/android_2.jpeg",
        "media/android/android_3.jpeg",
        "media/android/android_4.jpeg",
        "media/android/android_5.jpeg",
        "media/android/android_6.jpeg",
        "media/android/android_7.jpeg",
        "media/android/android_8.jpeg",
        "media/android/android_9.jpeg"
    ]
};

let currentProject = "";
let currentIndex = 0;

function openCarousel(projectName) {
    currentProject = projectName;
    currentIndex = 0;
    document.getElementById("carousel-img").src = imagesByProject[projectName][currentIndex];
    document.getElementById("carousel-modal").classList.remove("hidden");
}

function closeCarousel() {
    document.getElementById("carousel-modal").classList.add("hidden");
}

function nextImage() {
    const images = imagesByProject[currentProject];
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("carousel-img").src = images[currentIndex]; // ✅
}

function prevImage() {
    const images = imagesByProject[currentProject];
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("carousel-img").src = images[currentIndex]; // ✅
}

function toggleBlogList() {
    document.getElementById("blog-list").classList.toggle("hidden");
}
