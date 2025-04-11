document.addEventListener("mousemove", (e) => {
  const eyes = document.querySelectorAll(".eye-ball");

  eyes.forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const dx = e.clientX - eyeCenterX;
    const dy = e.clientY - eyeCenterY;

    const angle = Math.atan2(dy, dx);
    const radius = 6; // Max pupil movement in px

    const pupilX = radius * Math.cos(angle);
    const pupilY = radius * Math.sin(angle);

    const pupil = eye.querySelector("::after"); // doesn't work, so instead use manual manipulation
    eye.style.setProperty("--pupil-x", `${pupilX}px`);
    eye.style.setProperty("--pupil-y", `${pupilY}px`);

    // Manual fallback for now:
    const after = eye.querySelector("div");
    if (after) {
      after.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    }
  });
});
