// Helper function for random range
const randomRange = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
};

// Generate snowflakes locally in JS to replicate the SCSS logic
// SCSS logic:
// $total: 200;
// random-x: random(1000000) * 0.0001vw
// random-offset: random_range(-100000, 100000) * 0.0001vw;
// random-x-end: $random-x + $random-offset;
// random-x-end-yoyo: $random-x + ($random-offset / 2);
// random-yoyo-time: random_range(30000, 80000) / 100000;
// random-yoyo-y: $random-yoyo-time * 100vh;
// random-scale: random(10000) * 0.0001;
// fall-duration: random_range(10, 30) * 1s;
// fall-delay: random(30) * -1s;
// opacity: random(10000) * 0.0001;

const totalSnowflakes = 200;
let styleSheetContent = '';

for (let i = 1; i <= totalSnowflakes; i++) {
    const random_x = Math.random() * 100; // 0 to 100 vw
    const random_offset = randomRange(-10, 10); // -10 to 10 vw
    const random_x_end = random_x + random_offset;
    const random_x_end_yoyo = random_x + (random_offset / 2);
    const random_yoyo_time = randomRange(30000, 80000) / 100000;
    const random_yoyo_y = random_yoyo_time * 100; // vh
    const random_scale = Math.random(); // 0 to 1
    const fall_duration = randomRange(10, 30); // s
    const fall_delay = randomRange(0, 30) * -1; // s
    const opacity = Math.random();

    // Create the snowflake element
    const snow = document.createElement('div');
    snow.classList.add('snow');
    snow.classList.add(`snow-${i}`); // Add unique class
    document.body.appendChild(snow);

    // Generate CSS for this snowflake
    // Note: We use a specific class .snow-${i} instead of nth-child to be safer if other elements exist
    styleSheetContent += `
        .snow-${i} {
            opacity: ${opacity};
            transform: translate(${random_x}vw, -10px) scale(${random_scale});
            animation: fall-${i} ${fall_duration}s ${fall_delay}s linear infinite;
        }

        @keyframes fall-${i} {
            ${random_yoyo_time * 100}% {
                transform: translate(${random_x_end}vw, ${random_yoyo_y}vh) scale(${random_scale});
            }

            to {
                transform: translate(${random_x_end_yoyo}vw, 100vh) scale(${random_scale});
            }
        }
    `;
}

// Inject styles
const styleParams = document.createElement('style');
styleParams.innerHTML = styleSheetContent;
document.head.appendChild(styleParams);
