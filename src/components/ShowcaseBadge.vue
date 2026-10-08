<template>
  <div class="showcase-card">
    <!-- Left visual -->
    <div class="visual-box">
      <img
        src="/cameraman.png"
        alt="Project showcase"
        class="cameraman"
      />
    </div>

    <!-- Text -->
    <div class="showcase-text">
      <span>Project</span>
      <strong>Showcase</strong>
    </div>

    <!-- Animated paper stack -->
    <div class="paper-stack" aria-hidden="true">
      <div class="paper paper-back"></div>
      <div class="paper paper-middle"></div>
      <div class="paper paper-front"></div>
    </div>
  </div>
</template>

<style scoped>
.showcase-card {
  position: relative;

  width: fit-content;
  max-width: 100%;
  min-width: min(100%, 440px);
  height: 84px;

  display: inline-flex;
  align-items: center;

  padding: 0 24px;

  border: 1px solid rgba(159, 91, 255, 0.35);
  border-radius: 999px;

  background:
    radial-gradient(
      circle at 5% 50%,
      rgba(126, 34, 255, 0.1),
      transparent 25%
    ),
    linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.95),
      rgba(247, 243, 255, 0.85)
    );

  box-shadow:
    0 8px 25px rgba(123, 43, 255, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  overflow: hidden;
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
}

:global(.dark) .showcase-card {
  border: 1px solid rgba(159, 91, 255, 0.45);
  background:
    radial-gradient(
      circle at 5% 50%,
      rgba(126, 34, 255, 0.14),
      transparent 25%
    ),
    linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.035),
      rgba(255, 255, 255, 0.012)
    );
  box-shadow:
    0 0 35px rgba(123, 43, 255, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

/* Purple edge lighting */
.showcase-card::before {
  content: "";

  position: absolute;
  inset: 0;

  border-radius: inherit;

  padding: 1px;

  background: linear-gradient(
    90deg,
    rgba(124, 58, 237, 0.9),
    rgba(168, 85, 247, 0.25),
    rgba(124, 58, 237, 0.8)
  );

  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);

  -webkit-mask-composite: xor;
  mask-composite: exclude;

  pointer-events: none;
}

/* --------------------------------
   LEFT IMAGE
-------------------------------- */

.visual-box {
  position: relative;

  width: 56px;
  height: 56px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 18px;

  background:
    radial-gradient(
      circle,
      rgba(145, 70, 255, 0.12),
      rgba(90, 35, 160, 0.03)
    );

  border: 1px solid rgba(168, 85, 247, 0.2);

  box-shadow:
    inset 0 0 25px rgba(138, 43, 226, 0.08),
    0 0 20px rgba(124, 58, 237, 0.08);

  overflow: hidden;
}

:global(.dark) .visual-box {
  background:
    radial-gradient(
      circle,
      rgba(145, 70, 255, 0.16),
      rgba(90, 35, 160, 0.05)
    );
  border: 1px solid rgba(168, 85, 247, 0.25);
}

.cameraman {
  width: 50px;
  height: 50px;

  object-fit: contain;

  transition:
    transform 0.5s ease,
    filter 0.5s ease;
}

.showcase-card:hover .cameraman {
  transform: scale(1.08) translateY(-2px);

  filter:
    drop-shadow(0 8px 15px rgba(0, 0, 0, 0.4));
}

/* --------------------------------
   TEXT
-------------------------------- */

.showcase-text {
  display: flex;
  align-items: center;

  margin-left: 20px;
  margin-right: 20px;

  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  font-size: 21px;

  letter-spacing: -0.04em;

  white-space: nowrap;
}

.showcase-text span {
  color: #1e293b;
  font-weight: 500;
}

:global(.dark) .showcase-text span {
  color: rgba(255, 255, 255, 0.88);
  font-weight: 400;
}

.showcase-text strong {
  margin-left: 7px;
  color: #9333ea;
  font-weight: 700;
}

:global(.dark) .showcase-text strong {
  color: #a855f7;
  font-weight: 650;
  text-shadow:
    0 0 20px rgba(168, 85, 247, 0.25);
}

/* --------------------------------
   PAPER STACK
-------------------------------- */

.paper-stack {
  position: relative;

  width: 52px;
  height: 52px;

  margin-left: auto;

  perspective: 600px;
}

/* Individual sheets */
.paper {
  position: absolute;

  width: 32px;
  height: 40px;

  right: 6px;
  top: 6px;

  border-radius: 7px;

  background:
    linear-gradient(
      145deg,
      rgba(201, 153, 255, 0.55),
      rgba(116, 54, 190, 0.28)
    );

  border: 1px solid rgba(205, 170, 255, 0.35);

  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);

  transform-origin: bottom center;
}

/* Back sheet */
.paper-back {
  transform:
    translate(-8px, 2px)
    rotate(-14deg);

  opacity: 0.35;

  animation: paperBack 4s ease-in-out infinite;
}

/* Middle sheet */
.paper-middle {
  transform:
    translate(-4px, 0)
    rotate(-7deg);

  opacity: 0.58;

  animation: paperMiddle 4s ease-in-out infinite;
}

/* Front sheet */
.paper-front {
  transform:
    translate(0, 0)
    rotate(2deg);

  opacity: 0.9;

  background:
    linear-gradient(
      145deg,
      rgba(216, 180, 255, 0.7),
      rgba(123, 58, 190, 0.4)
    );

  animation: paperFront 4s ease-in-out infinite;
}

/* --------------------------------
   FLIPPING EFFECT
-------------------------------- */

@keyframes paperBack {
  0%,
  100% {
    transform:
      translate(-8px, 2px)
      rotate(-14deg);
  }

  35% {
    transform:
      translate(-13px, -2px)
      rotate(-20deg);
  }

  65% {
    transform:
      translate(-4px, 1px)
      rotate(-8deg);
  }
}

@keyframes paperMiddle {
  0%,
  100% {
    transform:
      translate(-4px, 0)
      rotate(-7deg);
  }

  35% {
    transform:
      translate(-9px, -5px)
      rotate(-13deg);
  }

  65% {
    transform:
      translate(-2px, 0)
      rotate(-2deg);
  }
}

@keyframes paperFront {
  0%,
  100% {
    transform:
      translate(0, 0)
      rotate(2deg);
  }

  35% {
    transform:
      translate(5px, -7px)
      rotate(9deg);
  }

  65% {
    transform:
      translate(2px, 1px)
      rotate(4deg);
  }
}

/* --------------------------------
   HOVER
-------------------------------- */

.showcase-card:hover {
  transform: translateY(-2px);

  box-shadow:
    0 0 45px rgba(123, 43, 255, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

/* --------------------------------
   MOBILE
-------------------------------- */

@media (max-width: 640px) {
  .showcase-card {
    height: 68px;
    padding: 0 16px;
    min-width: 100%;
  }

  .visual-box {
    width: 44px;
    height: 44px;
    border-radius: 12px;
  }

  .cameraman {
    width: 38px;
    height: 38px;
  }

  .showcase-text {
    margin-left: 12px;
    margin-right: 12px;
    font-size: 16px;
  }

  .showcase-text strong {
    margin-left: 5px;
  }

  .paper-stack {
    transform: scale(0.75);
    transform-origin: right center;
  }
}

/* Respect accessibility settings */
@media (prefers-reduced-motion: reduce) {
  .paper,
  .cameraman,
  .showcase-card {
    animation: none;
    transition: none;
  }
}
</style>
