// // // // // // // // // // // // // // // // // Manually list all image file names from the /images folder
// // // // // // // // // // // // // // // // const imageFolderPath = "images/";
// // // // // // // // // // // // // // // // const images = [
// // // // // // // // // // // // // // // //   "image1.jpg",
// // // // // // // // // // // // // // // //   "image2.jpg",
// // // // // // // // // // // // // // // //   "image3.jpg",
// // // // // // // // // // // // // // // //   "image4.jpg",
// // // // // // // // // // // // // // // //   "image5.jpg",
// // // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // // // Get the slideshow container
// // // // // // // // // // // // // // // // const slideshowContainer = document.getElementById("slideshow");

// // // // // // // // // // // // // // // // // Function to shuffle an array (Fisher-Yates shuffle)
// // // // // // // // // // // // // // // // function shuffle(array) {
// // // // // // // // // // // // // // // //   let currentIndex = array.length,
// // // // // // // // // // // // // // // //     randomIndex;

// // // // // // // // // // // // // // // //   // While there remain elements to shuffle
// // // // // // // // // // // // // // // //   while (currentIndex !== 0) {
// // // // // // // // // // // // // // // //     randomIndex = Math.floor(Math.random() * currentIndex);
// // // // // // // // // // // // // // // //     currentIndex--;

// // // // // // // // // // // // // // // //     // Swap it with the current element
// // // // // // // // // // // // // // // //     [array[currentIndex], array[randomIndex]] = [
// // // // // // // // // // // // // // // //       array[randomIndex],
// // // // // // // // // // // // // // // //       array[currentIndex],
// // // // // // // // // // // // // // // //     ];
// // // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // // //   return array;
// // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // Shuffle images array so they appear randomly
// // // // // // // // // // // // // // // // const shuffledImages = shuffle(images);

// // // // // // // // // // // // // // // // // Dynamically create image slides
// // // // // // // // // // // // // // // // shuffledImages.forEach((image, index) => {
// // // // // // // // // // // // // // // //   const slide = document.createElement("div");
// // // // // // // // // // // // // // // //   slide.classList.add("slide");
// // // // // // // // // // // // // // // //   if (index === 0) slide.classList.add("active"); // Make the first image visible
// // // // // // // // // // // // // // // //   const img = document.createElement("img");
// // // // // // // // // // // // // // // //   img.src = `${imageFolderPath}${image}`;
// // // // // // // // // // // // // // // //   img.alt = `Slideshow image ${index + 1}`;
// // // // // // // // // // // // // // // //   slide.appendChild(img);
// // // // // // // // // // // // // // // //   slideshowContainer.appendChild(slide);
// // // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // // Function to change the active slide
// // // // // // // // // // // // // // // // let currentSlide = 0;
// // // // // // // // // // // // // // // // function showNextSlide() {
// // // // // // // // // // // // // // // //   const slides = document.querySelectorAll(".slide");
// // // // // // // // // // // // // // // //   slides[currentSlide].classList.remove("active");
// // // // // // // // // // // // // // // //   currentSlide = (currentSlide + 1) % slides.length;
// // // // // // // // // // // // // // // //   slides[currentSlide].classList.add("active");
// // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // Change the image every 3 seconds
// // // // // // // // // // // // // // // // setInterval(showNextSlide, 3000);

// // // // // // // // // // // // // // // // Directory path where the images are stored
// // // // // // // // // // // // // // // const imageFolderPath = "images/";

// // // // // // // // // // // // // // // // Function to read the text file containing image names
// // // // // // // // // // // // // // // async function fetchImageNames() {
// // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // //     const response = await fetch("data/images-list.txt"); // Read the text file
// // // // // // // // // // // // // // //     const text = await response.text(); // Get the content of the text file as a string
// // // // // // // // // // // // // // //     const images = text.split("\n").filter((name) => name.trim() !== ""); // Split by line, remove empty lines
// // // // // // // // // // // // // // //     return images;
// // // // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // // // //     console.error("Error loading image file names:", error);
// // // // // // // // // // // // // // //     return [];
// // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // Function to shuffle an array (Fisher-Yates shuffle)
// // // // // // // // // // // // // // // function shuffle(array) {
// // // // // // // // // // // // // // //   let currentIndex = array.length,
// // // // // // // // // // // // // // //     randomIndex;

// // // // // // // // // // // // // // //   while (currentIndex !== 0) {
// // // // // // // // // // // // // // //     randomIndex = Math.floor(Math.random() * currentIndex);
// // // // // // // // // // // // // // //     currentIndex--;

// // // // // // // // // // // // // // //     [array[currentIndex], array[randomIndex]] = [
// // // // // // // // // // // // // // //       array[randomIndex],
// // // // // // // // // // // // // // //       array[currentIndex],
// // // // // // // // // // // // // // //     ];
// // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // //   return array;
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // Create the slideshow
// // // // // // // // // // // // // // // async function createSlideshow() {
// // // // // // // // // // // // // // //   const slideshowContainer = document.getElementById("slideshow");
// // // // // // // // // // // // // // //   const images = await fetchImageNames();
// // // // // // // // // // // // // // //   if (images.length === 0) {
// // // // // // // // // // // // // // //     console.error("No images to display.");
// // // // // // // // // // // // // // //     return;
// // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // //   // Shuffle the images to display randomly
// // // // // // // // // // // // // // //   const shuffledImages = shuffle(images);

// // // // // // // // // // // // // // //   // Dynamically create image slides
// // // // // // // // // // // // // // //   shuffledImages.forEach((image, index) => {
// // // // // // // // // // // // // // //     const slide = document.createElement("div");
// // // // // // // // // // // // // // //     slide.classList.add("slide");
// // // // // // // // // // // // // // //     if (index === 0) slide.classList.add("active"); // Make the first image visible
// // // // // // // // // // // // // // //     const img = document.createElement("img");
// // // // // // // // // // // // // // //     img.src = `${imageFolderPath}${image}`;
// // // // // // // // // // // // // // //     img.alt = `Slideshow image ${index + 1}`;
// // // // // // // // // // // // // // //     slide.appendChild(img);
// // // // // // // // // // // // // // //     slideshowContainer.appendChild(slide);
// // // // // // // // // // // // // // //   });

// // // // // // // // // // // // // // //   // Function to change the active slide
// // // // // // // // // // // // // // //   let currentSlide = 0;
// // // // // // // // // // // // // // //   function showNextSlide() {
// // // // // // // // // // // // // // //     const slides = document.querySelectorAll(".slide");
// // // // // // // // // // // // // // //     slides[currentSlide].classList.remove("active");
// // // // // // // // // // // // // // //     currentSlide = (currentSlide + 1) % slides.length;
// // // // // // // // // // // // // // //     slides[currentSlide].classList.add("active");
// // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // //   // Change the image every 3 seconds
// // // // // // // // // // // // // // //   setInterval(showNextSlide, 3000);
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // Start the slideshow when the page loads
// // // // // // // // // // // // // // // createSlideshow();

// // // // // // // // // // // // // // // Path to the file containing image paths
// // // // // // // // // // // // // // const imagesListPath = "data/images-list.txt";

// // // // // // // // // // // // // // // Function to read and parse the image paths from images-list.txt
// // // // // // // // // // // // // // async function fetchImagePaths() {
// // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // //     const response = await fetch(imagesListPath);
// // // // // // // // // // // // // //     const text = await response.text();
// // // // // // // // // // // // // //     const images = text.split("\n").filter((path) => path.trim() !== "");
// // // // // // // // // // // // // //     return images;
// // // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // // //     console.error("Error reading image paths from images-list.txt:", error);
// // // // // // // // // // // // // //     return [];
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // Function to shuffle an array (Fisher-Yates shuffle)
// // // // // // // // // // // // // // function shuffle(array) {
// // // // // // // // // // // // // //   let currentIndex = array.length,
// // // // // // // // // // // // // //     randomIndex;

// // // // // // // // // // // // // //   while (currentIndex !== 0) {
// // // // // // // // // // // // // //     randomIndex = Math.floor(Math.random() * currentIndex);
// // // // // // // // // // // // // //     currentIndex--;

// // // // // // // // // // // // // //     [array[currentIndex], array[randomIndex]] = [
// // // // // // // // // // // // // //       array[randomIndex],
// // // // // // // // // // // // // //       array[currentIndex],
// // // // // // // // // // // // // //     ];
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   return array;
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // Function to create and run the slideshow
// // // // // // // // // // // // // // async function createSlideshow() {
// // // // // // // // // // // // // //   const images = await fetchImagePaths();
// // // // // // // // // // // // // //   if (images.length === 0) {
// // // // // // // // // // // // // //     console.error("No images found in images-list.txt.");
// // // // // // // // // // // // // //     return;
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   // Shuffle the images for random display
// // // // // // // // // // // // // //   const shuffledImages = shuffle(images);
// // // // // // // // // // // // // //   let currentSlideIndex = 0;

// // // // // // // // // // // // // //   // Create an image element to display the slideshow
// // // // // // // // // // // // // //   const imageElement = document.createElement("img");
// // // // // // // // // // // // // //   imageElement.style.width = "100%";
// // // // // // // // // // // // // //   imageElement.style.height = "100%";
// // // // // // // // // // // // // //   imageElement.style.objectFit = "cover";

// // // // // // // // // // // // // //   // Append image to the body or any container you want
// // // // // // // // // // // // // //   document.body.appendChild(imageElement);

// // // // // // // // // // // // // //   // Function to update the displayed image
// // // // // // // // // // // // // //   function showNextSlide() {
// // // // // // // // // // // // // //     if (currentSlideIndex >= shuffledImages.length) {
// // // // // // // // // // // // // //       currentSlideIndex = 0; // Loop back to the beginning
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     imageElement.src = shuffledImages[currentSlideIndex];
// // // // // // // // // // // // // //     currentSlideIndex++;
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   // Show the first image immediately
// // // // // // // // // // // // // //   showNextSlide();

// // // // // // // // // // // // // //   // Automatically change the image every 3 seconds
// // // // // // // // // // // // // //   setInterval(showNextSlide, 3000);
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // Run the slideshow as soon as the page loads
// // // // // // // // // // // // // // createSlideshow();

// // // // // // // // // // // Path to the file containing image paths
// // // // // // // // // // const imagesListPath = "data/images-list.txt";

// // // // // // // // // // // Function to read and parse the image paths from images-list.txt
// // // // // // // // // // async function fetchImagePaths() {
// // // // // // // // // //   try {
// // // // // // // // // //     const response = await fetch(imagesListPath);
// // // // // // // // // //     const text = await response.text();
// // // // // // // // // //     const images = text.split("\n").filter((path) => path.trim() !== "");
// // // // // // // // // //     return images;
// // // // // // // // // //   } catch (error) {
// // // // // // // // // //     console.error("Error reading image paths from images-list.txt:", error);
// // // // // // // // // //     return [];
// // // // // // // // // //   }
// // // // // // // // // // }

// // // // // // // // // // async function createCarousel() {
// // // // // // // // // //   const images = await fetchImagePaths();
// // // // // // // // // //   if (images.length === 0) {
// // // // // // // // // //     console.error("No images found in images-list.txt.");
// // // // // // // // // //     return;
// // // // // // // // // //   }

// // // // // // // // // //   const track = document.getElementById("carousel-track");
// // // // // // // // // //   const dotsContainer = document.getElementById("carousel-dots");

// // // // // // // // // //   // Create slides for each image
// // // // // // // // // //   images.forEach((imagePath, index) => {
// // // // // // // // // //     const slide = document.createElement("div");
// // // // // // // // // //     slide.classList.add("carousel-slide");
// // // // // // // // // //     const img = document.createElement("img");
// // // // // // // // // //     img.src = imagePath;
// // // // // // // // // //     img.alt = `Image ${index + 1}`;
// // // // // // // // // //     slide.appendChild(img);
// // // // // // // // // //     track.appendChild(slide);

// // // // // // // // // //     // Create dots
// // // // // // // // // //     const dot = document.createElement("div");
// // // // // // // // // //     dot.classList.add("carousel-dot");
// // // // // // // // // //     if (index === 0) dot.classList.add("active");
// // // // // // // // // //     dot.dataset.index = index;
// // // // // // // // // //     dotsContainer.appendChild(dot);
// // // // // // // // // //   });

// // // // // // // // // //   const slides = Array.from(document.querySelectorAll(".carousel-slide"));
// // // // // // // // // //   const dots = Array.from(document.querySelectorAll(".carousel-dot"));
// // // // // // // // // //   const prevButton = document.getElementById("prevButton");
// // // // // // // // // //   const nextButton = document.getElementById("nextButton");
// // // // // // // // // //   let currentIndex = 0;

// // // // // // // // // //   function updateCarousel() {
// // // // // // // // // //     const width = slides[0].getBoundingClientRect().width;
// // // // // // // // // //     track.style.transform = `translateX(-${currentIndex * width}px)`;

// // // // // // // // // //     // Update active dot
// // // // // // // // // //     dots.forEach((dot) => dot.classList.remove("active"));
// // // // // // // // // //     dots[currentIndex].classList.add("active");
// // // // // // // // // //   }

// // // // // // // // // //   function moveToNextSlide() {
// // // // // // // // // //     currentIndex = (currentIndex + 1) % slides.length;
// // // // // // // // // //     updateCarousel();
// // // // // // // // // //   }

// // // // // // // // // //   function moveToPreviousSlide() {
// // // // // // // // // //     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
// // // // // // // // // //     updateCarousel();
// // // // // // // // // //   }

// // // // // // // // // //   // Event listeners for buttons
// // // // // // // // // //   nextButton.addEventListener("click", moveToNextSlide);
// // // // // // // // // //   prevButton.addEventListener("click", moveToPreviousSlide);

// // // // // // // // // //   // Event listeners for dots
// // // // // // // // // //   dots.forEach((dot) => {
// // // // // // // // // //     dot.addEventListener("click", () => {
// // // // // // // // // //       currentIndex = parseInt(dot.dataset.index, 10);
// // // // // // // // // //       updateCarousel();
// // // // // // // // // //     });
// // // // // // // // // //   });

// // // // // // // // // //   // Set initial position
// // // // // // // // // //   updateCarousel();
// // // // // // // // // // }

// // // // // // // // // // createCarousel();

// // // // // // // // // // const imagesListPath = "data/images-list.txt";

// // // // // // // // // // async function fetchImagePaths() {
// // // // // // // // // //   const response = await fetch(imagesListPath);
// // // // // // // // // //   const text = await response.text();
// // // // // // // // // //   return text.split("\n").filter((path) => path.trim() !== "");
// // // // // // // // // // }

// // // // // // // // // // async function createCarousel() {
// // // // // // // // // //   const images = await fetchImagePaths();
// // // // // // // // // //   if (images.length === 0) {
// // // // // // // // // //     console.error("No images found in images-list.txt.");
// // // // // // // // // //     return;
// // // // // // // // // //   }

// // // // // // // // // //   const track = document.getElementById("carousel-track");
// // // // // // // // // //   const thumbnailRow = document.getElementById("thumbnail-row");
// // // // // // // // // //   let currentIndex = 0;

// // // // // // // // // //   images.forEach((imagePath, index) => {
// // // // // // // // // //     // Main slide
// // // // // // // // // //     const slide = document.createElement("div");
// // // // // // // // // //     slide.classList.add("carousel-slide");
// // // // // // // // // //     const img = document.createElement("img");
// // // // // // // // // //     img.src = imagePath;
// // // // // // // // // //     slide.appendChild(img);
// // // // // // // // // //     track.appendChild(slide);

// // // // // // // // // //     // Thumbnails
// // // // // // // // // //     const thumbnail = document.createElement("div");
// // // // // // // // // //     thumbnail.classList.add("thumbnail");
// // // // // // // // // //     const thumbImg = document.createElement("img");
// // // // // // // // // //     thumbImg.src = imagePath;
// // // // // // // // // //     thumbnail.appendChild(thumbImg);
// // // // // // // // // //     thumbnailRow.appendChild(thumbnail);
// // // // // // // // // //   });

// // // // // // // // // //   const slides = document.querySelectorAll(".carousel-slide");
// // // // // // // // // //   const thumbnails = document.querySelectorAll(".thumbnail");
// // // // // // // // // //   const prevButton = document.getElementById("prevButton");
// // // // // // // // // //   const nextButton = document.getElementById("nextButton");

// // // // // // // // // //   function updateCarousel() {
// // // // // // // // // //     track.style.transform = `translateX(-${currentIndex * 100}%)`;
// // // // // // // // // //     thumbnails.forEach((thumb) => thumb.classList.remove("active"));
// // // // // // // // // //     thumbnails[currentIndex].classList.add("active");
// // // // // // // // // //   }

// // // // // // // // // //   function moveToNextSlide() {
// // // // // // // // // //     currentIndex = (currentIndex + 1) % slides.length;
// // // // // // // // // //     updateCarousel();
// // // // // // // // // //   }

// // // // // // // // // //   function moveToPreviousSlide() {
// // // // // // // // // //     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
// // // // // // // // // //     updateCarousel();
// // // // // // // // // //   }

// // // // // // // // // //   thumbnails.forEach((thumbnail, index) => {
// // // // // // // // // //     thumbnail.addEventListener("click", () => {
// // // // // // // // // //       currentIndex = index;
// // // // // // // // // //       updateCarousel();
// // // // // // // // // //     });
// // // // // // // // // //   });

// // // // // // // // // //   prevButton.addEventListener("click", moveToPreviousSlide);
// // // // // // // // // //   nextButton.addEventListener("click", moveToNextSlide);
// // // // // // // // // //   updateCarousel();
// // // // // // // // // // }

// // // // // // // // // // createCarousel();

// // // // // // // // // // // const imagesListPath = "data/images-list.txt";
// // // // // // // // // // // const NUM_VISIBLE_THUMBNAILS = 5; // Change this number to control the number of visible thumbnails

// // // // // // // // // // // async function fetchImagePaths() {
// // // // // // // // // // //   const response = await fetch(imagesListPath);
// // // // // // // // // // //   const text = await response.text();
// // // // // // // // // // //   return text.split("\n").filter((path) => path.trim() !== "");
// // // // // // // // // // // }

// // // // // // // // // // // async function createCarousel() {
// // // // // // // // // // //   const images = await fetchImagePaths();
// // // // // // // // // // //   if (images.length === 0) {
// // // // // // // // // // //     console.error("No images found in images-list.txt.");
// // // // // // // // // // //     return;
// // // // // // // // // // //   }

// // // // // // // // // // //   const track = document.getElementById("carousel-track");
// // // // // // // // // // //   const thumbnailRow = document.getElementById("thumbnail-row");
// // // // // // // // // // //   let currentIndex = 0;

// // // // // // // // // // //   images.forEach((imagePath, index) => {
// // // // // // // // // // //     // Main slide
// // // // // // // // // // //     const slide = document.createElement("div");
// // // // // // // // // // //     slide.classList.add("carousel-slide");
// // // // // // // // // // //     const img = document.createElement("img");
// // // // // // // // // // //     img.src = imagePath;
// // // // // // // // // // //     slide.appendChild(img);
// // // // // // // // // // //     track.appendChild(slide);

// // // // // // // // // // //     // Thumbnails
// // // // // // // // // // //     if (index < NUM_VISIBLE_THUMBNAILS) {
// // // // // // // // // // //       const thumbnail = document.createElement("div");
// // // // // // // // // // //       thumbnail.classList.add("thumbnail");
// // // // // // // // // // //       const thumbImg = document.createElement("img");
// // // // // // // // // // //       thumbImg.src = imagePath;
// // // // // // // // // // //       thumbnail.appendChild(thumbImg);
// // // // // // // // // // //       thumbnailRow.appendChild(thumbnail);
// // // // // // // // // // //     }
// // // // // // // // // // //   });

// // // // // // // // // // //   const slides = document.querySelectorAll(".carousel-slide");
// // // // // // // // // // //   const thumbnails = document.querySelectorAll(".thumbnail");
// // // // // // // // // // //   const prevButton = document.getElementById("prevButton");
// // // // // // // // // // //   const nextButton = document.getElementById("nextButton");

// // // // // // // // // // //   function updateCarousel() {
// // // // // // // // // // //     track.style.transform = `translateX(-${currentIndex * 100}%)`;
// // // // // // // // // // //     thumbnails.forEach((thumb) => thumb.classList.remove("active"));
// // // // // // // // // // //     if (thumbnails[currentIndex]) {
// // // // // // // // // // //       thumbnails[currentIndex].classList.add("active");
// // // // // // // // // // //     }
// // // // // // // // // // //   }

// // // // // // // // // // //   function moveToNextSlide() {
// // // // // // // // // // //     currentIndex = (currentIndex + 1) % slides.length;
// // // // // // // // // // //     updateCarousel();
// // // // // // // // // // //   }

// // // // // // // // // // //   function moveToPreviousSlide() {
// // // // // // // // // // //     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
// // // // // // // // // // //     updateCarousel();
// // // // // // // // // // //   }

// // // // // // // // // // //   thumbnails.forEach((thumbnail, index) => {
// // // // // // // // // // //     thumbnail.addEventListener("click", () => {
// // // // // // // // // // //       currentIndex = index;
// // // // // // // // // // //       updateCarousel();
// // // // // // // // // // //     });
// // // // // // // // // // //   });

// // // // // // // // // // //   prevButton.addEventListener("click", moveToPreviousSlide);
// // // // // // // // // // //   nextButton.addEventListener("click", moveToNextSlide);
// // // // // // // // // // //   updateCarousel();
// // // // // // // // // // // }

// // // // // // // // // // // createCarousel();

// // // // // // // // // // const imagesListPath = "data/images-list.txt";
// // // // // // // // // // const NUM_VISIBLE_THUMBNAILS = 5; // Change this number to control how many thumbnails are visible at once

// // // // // // // // // // async function fetchImagePaths() {
// // // // // // // // // //   const response = await fetch(imagesListPath);
// // // // // // // // // //   const text = await response.text();
// // // // // // // // // //   return text.split("\n").filter((path) => path.trim() !== "");
// // // // // // // // // // }

// // // // // // // // // // async function createCarousel() {
// // // // // // // // // //   const images = await fetchImagePaths();
// // // // // // // // // //   if (images.length === 0) {
// // // // // // // // // //     console.error("No images found in images-list.txt.");
// // // // // // // // // //     return;
// // // // // // // // // //   }

// // // // // // // // // //   const track = document.getElementById("carousel-track");
// // // // // // // // // //   const thumbnailRow = document.getElementById("thumbnail-row");
// // // // // // // // // //   let currentIndex = 0;

// // // // // // // // // //   images.forEach((imagePath, index) => {
// // // // // // // // // //     // Main slide
// // // // // // // // // //     const slide = document.createElement("div");
// // // // // // // // // //     slide.classList.add("carousel-slide");
// // // // // // // // // //     const img = document.createElement("img");
// // // // // // // // // //     img.src = imagePath;
// // // // // // // // // //     slide.appendChild(img);
// // // // // // // // // //     track.appendChild(slide);

// // // // // // // // // //     // Thumbnails
// // // // // // // // // //     const thumbnail = document.createElement("div");
// // // // // // // // // //     thumbnail.classList.add("thumbnail");
// // // // // // // // // //     const thumbImg = document.createElement("img");
// // // // // // // // // //     thumbImg.src = imagePath;
// // // // // // // // // //     thumbnail.appendChild(thumbImg);
// // // // // // // // // //     thumbnailRow.appendChild(thumbnail);
// // // // // // // // // //   });

// // // // // // // // // //   const slides = document.querySelectorAll(".carousel-slide");
// // // // // // // // // //   const thumbnails = document.querySelectorAll(".thumbnail");
// // // // // // // // // //   const prevButton = document.getElementById("prevButton");
// // // // // // // // // //   const nextButton = document.getElementById("nextButton");

// // // // // // // // // //   function updateCarousel() {
// // // // // // // // // //     track.style.transform = `translateX(-${currentIndex * 100}%)`;
// // // // // // // // // //     thumbnails.forEach((thumb) => thumb.classList.remove("active"));
// // // // // // // // // //     thumbnails[currentIndex].classList.add("active");
// // // // // // // // // //   }

// // // // // // // // // //   function moveToNextSlide() {
// // // // // // // // // //     currentIndex = (currentIndex + 1) % slides.length;
// // // // // // // // // //     updateCarousel();
// // // // // // // // // //   }

// // // // // // // // // //   function moveToPreviousSlide() {
// // // // // // // // // //     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
// // // // // // // // // //     updateCarousel();
// // // // // // // // // //   }

// // // // // // // // // //   thumbnails.forEach((thumbnail, index) => {
// // // // // // // // // //     thumbnail.addEventListener("click", () => {
// // // // // // // // // //       currentIndex = index;
// // // // // // // // // //       updateCarousel();
// // // // // // // // // //     });
// // // // // // // // // //   });

// // // // // // // // // //   prevButton.addEventListener("click", moveToPreviousSlide);
// // // // // // // // // //   nextButton.addEventListener("click", moveToNextSlide);
// // // // // // // // // //   updateCarousel();
// // // // // // // // // // }

// // // // // // // // // // createCarousel();
// // // // // // // // // ////////////////////////////////////////////////////////////
// // // // // // // // // const imagesListPath = "data/images-list.txt";
// // // // // // // // // const NUM_VISIBLE_THUMBNAILS = 5; // Number of visible thumbnails at a time

// // // // // // // // // async function fetchImagePaths() {
// // // // // // // // //   const response = await fetch(imagesListPath);
// // // // // // // // //   const text = await response.text();
// // // // // // // // //   return text.split("\n").filter((path) => path.trim() !== "");
// // // // // // // // // }

// // // // // // // // // async function createCarousel() {
// // // // // // // // //   const images = await fetchImagePaths();
// // // // // // // // //   if (images.length === 0) {
// // // // // // // // //     console.error("No images found in images-list.txt.");
// // // // // // // // //     return;
// // // // // // // // //   }

// // // // // // // // //   const track = document.getElementById("carousel-track");
// // // // // // // // //   const thumbnailRow = document.getElementById("thumbnail-row");
// // // // // // // // //   let currentIndex = 0;

// // // // // // // // //   images.forEach((imagePath, index) => {
// // // // // // // // //     // Main slide
// // // // // // // // //     const slide = document.createElement("div");
// // // // // // // // //     slide.classList.add("carousel-slide");
// // // // // // // // //     const img = document.createElement("img");
// // // // // // // // //     img.src = imagePath;
// // // // // // // // //     slide.appendChild(img);
// // // // // // // // //     track.appendChild(slide);

// // // // // // // // //     // Thumbnails
// // // // // // // // //     const thumbnail = document.createElement("div");
// // // // // // // // //     thumbnail.classList.add("thumbnail");
// // // // // // // // //     const thumbImg = document.createElement("img");
// // // // // // // // //     thumbImg.src = imagePath;
// // // // // // // // //     thumbnail.appendChild(thumbImg);
// // // // // // // // //     thumbnailRow.appendChild(thumbnail);
// // // // // // // // //   });

// // // // // // // // //   const slides = document.querySelectorAll(".carousel-slide");
// // // // // // // // //   const thumbnails = document.querySelectorAll(".thumbnail");
// // // // // // // // //   const prevButton = document.getElementById("prevButton");
// // // // // // // // //   const nextButton = document.getElementById("nextButton");

// // // // // // // // //   function updateCarousel() {
// // // // // // // // //     track.style.transform = `translateX(-${currentIndex * 100}%)`;
// // // // // // // // //     thumbnails.forEach((thumb) => thumb.classList.remove("active"));
// // // // // // // // //     thumbnails[currentIndex].classList.add("active");

// // // // // // // // //     // Scroll thumbnail row
// // // // // // // // //     const visibleThumbnails = Array.from(thumbnails).slice(
// // // // // // // // //       0,
// // // // // // // // //       NUM_VISIBLE_THUMBNAILS
// // // // // // // // //     );
// // // // // // // // //     visibleThumbnails.forEach((thumb, index) => {
// // // // // // // // //       thumb.style.display = index < NUM_VISIBLE_THUMBNAILS ? "block" : "none";
// // // // // // // // //     });
// // // // // // // // //   }

// // // // // // // // //   function moveToNextSlide() {
// // // // // // // // //     currentIndex = (currentIndex + 1) % slides.length;
// // // // // // // // //     updateCarousel();
// // // // // // // // //   }

// // // // // // // // //   function moveToPreviousSlide() {
// // // // // // // // //     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
// // // // // // // // //     updateCarousel();
// // // // // // // // //   }

// // // // // // // // //   thumbnails.forEach((thumbnail, index) => {
// // // // // // // // //     thumbnail.addEventListener("click", () => {
// // // // // // // // //       currentIndex = index;
// // // // // // // // //       updateCarousel();
// // // // // // // // //     });
// // // // // // // // //   });

// // // // // // // // //   prevButton.addEventListener("click", moveToPreviousSlide);
// // // // // // // // //   nextButton.addEventListener("click", moveToNextSlide);
// // // // // // // // //   updateCarousel();
// // // // // // // // // }

// // // // // // // // // createCarousel();

// // // // // // // // const imagesListPath = "data/images-list.txt";
// // // // // // // // const NUM_VISIBLE_THUMBNAILS = 5; // Change the number of visible thumbnails

// // // // // // // // async function fetchImagePaths() {
// // // // // // // //   const response = await fetch(imagesListPath);
// // // // // // // //   const text = await response.text();
// // // // // // // //   return text.split("\n").filter((path) => path.trim() !== "");
// // // // // // // // }

// // // // // // // // async function createCarousel() {
// // // // // // // //   const images = await fetchImagePaths();
// // // // // // // //   if (images.length === 0) {
// // // // // // // //     console.error("No images found in images-list.txt.");
// // // // // // // //     return;
// // // // // // // //   }

// // // // // // // //   const track = document.getElementById("carousel-track");
// // // // // // // //   const thumbnailRow = document.getElementById("thumbnail-row");
// // // // // // // //   let currentIndex = 0;

// // // // // // // //   images.forEach((imagePath, index) => {
// // // // // // // //     const slide = document.createElement("div");
// // // // // // // //     slide.classList.add("carousel-slide");
// // // // // // // //     const img = document.createElement("img");
// // // // // // // //     img.src = imagePath;
// // // // // // // //     slide.appendChild(img);
// // // // // // // //     track.appendChild(slide);

// // // // // // // //     const thumbnail = document.createElement("div");
// // // // // // // //     thumbnail.classList.add("thumbnail");
// // // // // // // //     const thumbImg = document.createElement("img");
// // // // // // // //     thumbImg.src = imagePath;
// // // // // // // //     thumbnail.appendChild(thumbImg);
// // // // // // // //     thumbnailRow.appendChild(thumbnail);
// // // // // // // //   });

// // // // // // // //   const slides = document.querySelectorAll(".carousel-slide");
// // // // // // // //   const thumbnails = document.querySelectorAll(".thumbnail");
// // // // // // // //   const prevButton = document.getElementById("prevButton");
// // // // // // // //   const nextButton = document.getElementById("nextButton");

// // // // // // // //   function updateCarousel() {
// // // // // // // //     track.style.transform = `translateX(-${currentIndex * 100}%)`;
// // // // // // // //     thumbnails.forEach((thumb) => thumb.classList.remove("active"));
// // // // // // // //     thumbnails[currentIndex].classList.add("active");

// // // // // // // //     const thumbnailWidth = thumbnails[0].getBoundingClientRect().width;
// // // // // // // //     const offset = Math.max(
// // // // // // // //       0,
// // // // // // // //       currentIndex - Math.floor(NUM_VISIBLE_THUMBNAILS / 2)
// // // // // // // //     );
// // // // // // // //     thumbnailRow.style.transform = `translateX(-${
// // // // // // // //       offset * (thumbnailWidth + 10)
// // // // // // // //     }px)`;
// // // // // // // //   }

// // // // // // // //   function moveToNextSlide() {
// // // // // // // //     currentIndex = (currentIndex + 1) % slides.length;
// // // // // // // //     updateCarousel();
// // // // // // // //   }

// // // // // // // //   function moveToPreviousSlide() {
// // // // // // // //     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
// // // // // // // //     updateCarousel();
// // // // // // // //   }

// // // // // // // //   thumbnails.forEach((thumbnail, index) => {
// // // // // // // //     thumbnail.addEventListener("click", () => {
// // // // // // // //       currentIndex = index;
// // // // // // // //       updateCarousel();
// // // // // // // //     });
// // // // // // // //   });

// // // // // // // //   prevButton.addEventListener("click", moveToPreviousSlide);
// // // // // // // //   nextButton.addEventListener("click", moveToNextSlide);
// // // // // // // //   updateCarousel();
// // // // // // // // }

// // // // // // // // createCarousel();

// // // // // // // const imagesListPath = "data/images-list.txt";
// // // // // // // const NUM_VISIBLE_THUMBNAILS = 5; // Change the number of visible thumbnails

// // // // // // // async function fetchImagePaths() {
// // // // // // //   const response = await fetch(imagesListPath);
// // // // // // //   const text = await response.text();
// // // // // // //   return text.split("\n").filter((path) => path.trim() !== "");
// // // // // // // }

// // // // // // // async function createCarousel() {
// // // // // // //   const images = await fetchImagePaths();
// // // // // // //   if (images.length === 0) {
// // // // // // //     console.error("No images found in images-list.txt.");
// // // // // // //     return;
// // // // // // //   }

// // // // // // //   const track = document.getElementById("carousel-track");
// // // // // // //   const thumbnailRow = document.getElementById("thumbnail-row");
// // // // // // //   let currentIndex = 0;

// // // // // // //   images.forEach((imagePath, index) => {
// // // // // // //     // Create the main image slide
// // // // // // //     const slide = document.createElement("div");
// // // // // // //     slide.classList.add("carousel-slide");

// // // // // // //     const img = document.createElement("img");
// // // // // // //     img.src = imagePath;
// // // // // // //     slide.appendChild(img);

// // // // // // //     // ** Extract the image name from the file path **
// // // // // // //     const imageName = extractImageName(imagePath);
// // // // // // //     const imageNameElement = document.createElement("div");
// // // // // // //     imageNameElement.classList.add("image-name");
// // // // // // //     imageNameElement.textContent = imageName;
// // // // // // //     slide.appendChild(imageNameElement);

// // // // // // //     track.appendChild(slide);

// // // // // // //     // Create thumbnail
// // // // // // //     const thumbnail = document.createElement("div");
// // // // // // //     thumbnail.classList.add("thumbnail");

// // // // // // //     const thumbImg = document.createElement("img");
// // // // // // //     thumbImg.src = imagePath;
// // // // // // //     thumbnail.appendChild(thumbImg);
// // // // // // //     thumbnailRow.appendChild(thumbnail);
// // // // // // //   });

// // // // // // //   const slides = document.querySelectorAll(".carousel-slide");
// // // // // // //   const thumbnails = document.querySelectorAll(".thumbnail");
// // // // // // //   const prevButton = document.getElementById("prevButton");
// // // // // // //   const nextButton = document.getElementById("nextButton");

// // // // // // //   function updateCarousel() {
// // // // // // //     track.style.transform = `translateX(-${currentIndex * 100}%)`;
// // // // // // //     thumbnails.forEach((thumb) => thumb.classList.remove("active"));
// // // // // // //     thumbnails[currentIndex].classList.add("active");

// // // // // // //     const thumbnailWidth = thumbnails[0].getBoundingClientRect().width;
// // // // // // //     const offset = Math.max(
// // // // // // //       0,
// // // // // // //       currentIndex - Math.floor(NUM_VISIBLE_THUMBNAILS / 2)
// // // // // // //     );
// // // // // // //     thumbnailRow.style.transform = `translateX(-${
// // // // // // //       offset * (thumbnailWidth + 10)
// // // // // // //     }px)`;
// // // // // // //   }

// // // // // // //   function moveToNextSlide() {
// // // // // // //     currentIndex = (currentIndex + 1) % slides.length;
// // // // // // //     updateCarousel();
// // // // // // //   }

// // // // // // //   function moveToPreviousSlide() {
// // // // // // //     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
// // // // // // //     updateCarousel();
// // // // // // //   }

// // // // // // //   thumbnails.forEach((thumbnail, index) => {
// // // // // // //     thumbnail.addEventListener("click", () => {
// // // // // // //       currentIndex = index;
// // // // // // //       updateCarousel();
// // // // // // //     });
// // // // // // //   });

// // // // // // //   prevButton.addEventListener("click", moveToPreviousSlide);
// // // // // // //   nextButton.addEventListener("click", moveToNextSlide);
// // // // // // //   updateCarousel();

// // // // // // //   // ** Create the download link for filename.txt **
// // // // // // //   createDownloadLink(images);
// // // // // // // }

// // // // // // // /**
// // // // // // //  * Extracts the image name from a file path.
// // // // // // //  * Example: "data/images/biltong_droewors-01.jpg" -> "biltong droewors"
// // // // // // //  */
// // // // // // // function extractImageName(filePath) {
// // // // // // //   const fileName = filePath.split("/").pop().split(".")[0]; // Get file name without extension
// // // // // // //   return fileName.replace(/[-_]/g, " ").replace(/\d+/g, "").trim(); // Replace "-" and "_", remove numbers
// // // // // // // }

// // // // // // // /**
// // // // // // //  * Creates the download link for filename.txt
// // // // // // //  */
// // // // // // // function createDownloadLink(images) {
// // // // // // //   const downloadLink = document.getElementById("download-link");
// // // // // // //   const fileContent = images.join("\n"); // Join all images in a new line
// // // // // // //   const blob = new Blob([fileContent], { type: "text/plain" });
// // // // // // //   const url = URL.createObjectURL(blob);
// // // // // // //   downloadLink.href = url;
// // // // // // // }

// // // // // // // createCarousel();

// // // // // // const imagesListPath = "data/images-list.txt";
// // // // // // const NUM_VISIBLE_THUMBNAILS = 5;

// // // // // // async function fetchImagePaths() {
// // // // // //   const response = await fetch(imagesListPath);
// // // // // //   const text = await response.text();
// // // // // //   return text.split("\n").filter((path) => path.trim() !== "");
// // // // // // }

// // // // // // async function createCarousel() {
// // // // // //   const images = await fetchImagePaths();
// // // // // //   if (images.length === 0) {
// // // // // //     console.error("No images found in images-list.txt.");
// // // // // //     return;
// // // // // //   }

// // // // // //   const track = document.getElementById("carousel-track");
// // // // // //   const thumbnailRow = document.getElementById("thumbnail-row");

// // // // // //   images.forEach((imagePath, index) => {
// // // // // //     // Main image slide
// // // // // //     const slide = document.createElement("div");
// // // // // //     slide.classList.add("carousel-slide");

// // // // // //     const img = document.createElement("img");
// // // // // //     img.src = imagePath;
// // // // // //     slide.appendChild(img);

// // // // // //     // Extract image name and display it
// // // // // //     const imageName = extractImageName(imagePath);
// // // // // //     const imageNameElement = document.createElement("div");
// // // // // //     imageNameElement.classList.add("image-name");
// // // // // //     imageNameElement.textContent = imageName;
// // // // // //     slide.appendChild(imageNameElement);

// // // // // //     track.appendChild(slide);
// // // // // //   });

// // // // // //   // Create the download link for filename.txt
// // // // // //   createDownloadLink(images);
// // // // // // }

// // // // // // /**
// // // // // //  * Extract the image name from the file path.
// // // // // //  * "data/images/biltong_droewors-01.jpg" -> "biltong droewors"
// // // // // //  */
// // // // // // function extractImageName(filePath) {
// // // // // //   const fileName = filePath.split("/").pop().split(".")[0];
// // // // // //   return fileName.replace(/[-_]/g, " ").replace(/\d+/g, "").trim();
// // // // // // }

// // // // // // /**
// // // // // //  * Create a download link for filename.txt
// // // // // //  */
// // // // // // function createDownloadLink(images) {
// // // // // //   const downloadLink = document.getElementById("download-link");
// // // // // //   const fileContent = images.join("\n");
// // // // // //   const blob = new Blob([fileContent], { type: "text/plain" });
// // // // // //   const url = URL.createObjectURL(blob);
// // // // // //   downloadLink.href = url;
// // // // // // }

// // // // // // createCarousel();

// // // // // const imagesListPath = "data/images-list.txt";

// // // // // async function fetchImagePaths() {
// // // // //   const response = await fetch(imagesListPath);
// // // // //   const text = await response.text();
// // // // //   return text.split("\n").filter((path) => path.trim() !== "");
// // // // // }

// // // // // async function createCarousel() {
// // // // //   const images = await fetchImagePaths();
// // // // //   if (images.length === 0) {
// // // // //     console.error("No images found in images-list.txt.");
// // // // //     return;
// // // // //   }

// // // // //   const track = document.getElementById("carousel-track");

// // // // //   images.forEach((imagePath) => {
// // // // //     const slide = document.createElement("div");
// // // // //     slide.classList.add("carousel-slide");

// // // // //     const img = document.createElement("img");
// // // // //     img.src = imagePath;
// // // // //     slide.appendChild(img);

// // // // //     const imageName = extractImageName(imagePath);
// // // // //     const imageNameElement = document.createElement("div");
// // // // //     imageNameElement.classList.add("image-name");
// // // // //     imageNameElement.textContent = imageName;
// // // // //     slide.appendChild(imageNameElement);

// // // // //     track.appendChild(slide);
// // // // //   });

// // // // //   createDownloadLink(images);
// // // // // }

// // // // // /**
// // // // //  * Extract image name from the file path.
// // // // //  * Example: "data/images/biltong_droewors-01.jpg" -> "biltong droewors"
// // // // //  */
// // // // // function extractImageName(filePath) {
// // // // //   const fileName = filePath.split("/").pop().split(".")[0];
// // // // //   return fileName.replace(/[-_]/g, " ").replace(/\d+/g, "").trim();
// // // // // }

// // // // // /**
// // // // //  * Create a download link for filename.txt
// // // // //  */
// // // // // function createDownloadLink(images) {
// // // // //   const downloadLink = document.getElementById("download-link");
// // // // //   const fileContent = images.join("\n");
// // // // //   const blob = new Blob([fileContent], { type: "text/plain" });
// // // // //   const url = URL.createObjectURL(blob);
// // // // //   downloadLink.href = url;
// // // // // }

// // // // // createCarousel();

// // // // const imagesListPath = "data/images-list.txt";

// // // // async function fetchImagePaths() {
// // // //   const response = await fetch(imagesListPath);
// // // //   const text = await response.text();
// // // //   return text.split("\n").filter((path) => path.trim() !== "");
// // // // }

// // // // async function createCarousel() {
// // // //   const images = await fetchImagePaths();
// // // //   if (images.length === 0) {
// // // //     console.error("No images found in images-list.txt.");
// // // //     return;
// // // //   }

// // // //   const track = document.getElementById("carousel-track");

// // // //   images.forEach((imagePath) => {
// // // //     const slide = document.createElement("div");
// // // //     slide.classList.add("carousel-slide");

// // // //     const img = document.createElement("img");
// // // //     img.src = imagePath;
// // // //     slide.appendChild(img);

// // // //     const imageName = extractImageName(imagePath);
// // // //     const imageNameElement = document.createElement("div");
// // // //     imageNameElement.classList.add("image-name");
// // // //     imageNameElement.textContent = imageName;
// // // //     slide.appendChild(imageNameElement);

// // // //     track.appendChild(slide);
// // // //   });

// // // //   createDownloadLink(images);
// // // // }

// // // // /**
// // // //  * Extract the image name from the file path.
// // // //  * Example: "data/images/biltong_droewors-01.jpg" -> "biltong droewors"
// // // //  */
// // // // function extractImageName(filePath) {
// // // //   const fileName = filePath.split("/").pop().split(".")[0];
// // // //   return fileName.replace(/[-_]/g, " ").replace(/\d+/g, "").trim();
// // // // }

// // // // /**
// // // //  * Create a download link for filename.txt
// // // //  */
// // // // function createDownloadLink(images) {
// // // //   const downloadLink = document.getElementById("download-link");
// // // //   const fileContent = images.join("\n");
// // // //   const blob = new Blob([fileContent], { type: "text/plain" });
// // // //   const url = URL.createObjectURL(blob);
// // // //   downloadLink.href = url;
// // // // }

// // // // createCarousel();

// // // const imagesListPath = "data/images-list.txt";

// // // async function fetchImagePaths() {
// // //   const response = await fetch(imagesListPath);
// // //   const text = await response.text();
// // //   return text.split("\n").filter((path) => path.trim() !== "");
// // // }

// // // async function createCarousel() {
// // //   const images = await fetchImagePaths();
// // //   const track = document.getElementById("carousel-track");
// // //   const thumbnailRow = document.getElementById("thumbnail-row");

// // //   images.forEach((imagePath, index) => {
// // //     const slide = document.createElement("div");
// // //     slide.classList.add("carousel-slide");

// // //     const img = document.createElement("img");
// // //     img.src = imagePath;
// // //     slide.appendChild(img);

// // //     const imageName = extractImageName(imagePath);
// // //     const imageNameElement = document.createElement("div");
// // //     imageNameElement.classList.add("image-name");
// // //     imageNameElement.textContent = imageName;
// // //     slide.appendChild(imageNameElement);

// // //     track.appendChild(slide);

// // //     const thumbnail = document.createElement("div");
// // //     thumbnail.classList.add("thumbnail");
// // //     const thumbImg = document.createElement("img");
// // //     thumbImg.src = imagePath;
// // //     thumbnail.appendChild(thumbImg);
// // //     thumbnailRow.appendChild(thumbnail);
// // //   });

// // //   createDownloadLink(images);
// // // }

// // // function extractImageName(filePath) {
// // //   const fileName = filePath.split("/").pop().split(".")[0];
// // //   return fileName.replace(/[-_]/g, " ").replace(/\d+/g, "").trim();
// // // }

// // // function createDownloadLink(images) {
// // //   const downloadLink = document.getElementById("download-link");
// // //   const fileContent = images.join("\n");
// // //   const blob = new Blob([fileContent], { type: "text/plain" });
// // //   const url = URL.createObjectURL(blob);
// // //   downloadLink.href = url;
// // // }

// createCarousel();

const imagesListPath = "data/images-list.txt";
const NUM_VISIBLE_THUMBNAILS = 5; // Change the number of visible thumbnails

async function fetchImagePaths() {
  const response = await fetch(imagesListPath);
  const text = await response.text();
  return text.split("\n").filter((path) => path.trim() !== "");
}

async function createCarousel() {
  const images = await fetchImagePaths();
  if (images.length === 0) {
    console.error("No images found in images-list.txt.");
    return;
  }

  const track = document.getElementById("carousel-track");
  const thumbnailRow = document.getElementById("thumbnail-row");
  let currentIndex = 0;

  images.forEach((imagePath, index) => {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");

    const img = document.createElement("img");
    img.src = imagePath;
    slide.appendChild(img);

    // **Extract image name and display it at the top-middle of the image**
    const imageName = extractImageName(imagePath);
    const imageNameElement = document.createElement("div");
    imageNameElement.classList.add("image-name");
    imageNameElement.textContent = imageName;
    slide.appendChild(imageNameElement);

    track.appendChild(slide);

    const thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");
    const thumbImg = document.createElement("img");
    thumbImg.src = imagePath;
    thumbnail.appendChild(thumbImg);
    thumbnailRow.appendChild(thumbnail);
  });

  const slides = document.querySelectorAll(".carousel-slide");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    thumbnails[currentIndex].classList.add("active");

    const thumbnailWidth = thumbnails[0].getBoundingClientRect().width;
    const offset = Math.max(
      0,
      currentIndex - Math.floor(NUM_VISIBLE_THUMBNAILS / 2)
    );
    thumbnailRow.style.transform = `translateX(-${
      offset * (thumbnailWidth + 10)
    }px)`;
  }

  function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  function moveToPreviousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  prevButton.addEventListener("click", moveToPreviousSlide);
  nextButton.addEventListener("click", moveToNextSlide);
  updateCarousel();

  // **Create the download link for filename.txt**
  //   createDownloadLink(images);
  createDownloadLink("data/images.zip");
}

/**
 * Extracts the image name from the file path.
 * Example: "data/images/biltong_droewors-01.jpg" -> "biltong droewors"
 */
function extractImageName(filePath) {
  const fileName = filePath.split("/").pop().split(".")[0];
  return fileName.replace(/[-_]/g, " ").replace(/\d+/g, "").trim();
}

/**
 * Creates a downloadable filename.txt with image paths.
 */
// function createDownloadLink(images) {
//   const downloadLink = document.getElementById("download-link");
//   const fileContent = images.join("\n");
//   const blob = new Blob([fileContent], { type: "text/plain" });
//   const url = URL.createObjectURL(blob);
//   downloadLink.href = url;
// }

function createDownloadLink(zipFilePath) {
  const downloadLink = document.getElementById("download-link");
  downloadLink.href = zipFilePath; // Point directly to the existing ZIP file
  downloadLink.download = zipFilePath.split("/").pop(); // Extract the file name from the path
}

createCarousel();
