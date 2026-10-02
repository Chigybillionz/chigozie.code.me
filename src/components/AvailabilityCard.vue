<template>
  <div class="availability-card">
    <div class="status-icon">
      <span class="status-dot"></span>
    </div>

    <div class="divider"></div>

    <p class="availability-text">
      <span class="available">Available</span>
      <span> for roles & freelance</span>
    </p>

    <div class="orb-group" aria-hidden="true">
      <span class="orb orb-1"></span>
      <span class="orb orb-2"></span>
      <span class="orb orb-3"></span>
    </div>
  </div>
</template>

<style scoped>
.availability-card {
  position: relative;
  display: inline-flex;
  align-items: center;

  width: auto;
  max-width: 100%;
  min-height: 56px;

  padding: 0 20px;

  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 999px;

  background:
    radial-gradient(
      circle at 15% 50%,
      rgba(0, 255, 170, 0.08),
      transparent 28%
    ),
    linear-gradient(
      110deg,
      rgba(255, 255, 255, 0.035),
      rgba(255, 255, 255, 0.012)
    );

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.035),
    0 10px 30px rgba(0, 0, 0, 0.35);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  overflow: hidden;
  transition: all 0.3s ease;
}

.availability-card:hover {
  border-color: rgba(0, 232, 154, 0.25);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 12px 35px rgba(0, 232, 154, 0.08);
}

/* subtle inner highlight */
.availability-card::before {
  content: "";
  position: absolute;
  inset: 0;

  border-radius: inherit;

  background: linear-gradient(
    100deg,
    rgba(0, 255, 170, 0.06),
    transparent 22%,
    transparent 75%,
    rgba(0, 255, 170, 0.025)
  );

  pointer-events: none;
}

/* status circle */
.status-icon {
  position: relative;

  display: grid;
  place-items: center;

  width: 36px;
  height: 36px;

  flex-shrink: 0;

  border: 1px solid rgba(0, 255, 170, 0.2);
  border-radius: 50%;

  background: rgba(0, 255, 170, 0.03);

  box-shadow:
    inset 0 0 15px rgba(0, 255, 170, 0.06);
}

.status-dot {
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: #00e89a;

  box-shadow:
    0 0 10px rgba(0, 232, 154, 0.9),
    0 0 20px rgba(0, 232, 154, 0.4);

  animation: pulse 2.5s ease-in-out infinite;
}

/* vertical divider */
.divider {
  width: 1px;
  height: 22px;

  margin-left: 14px;
  margin-right: 16px;

  background: rgba(255, 255, 255, 0.1);
}

/* text */
.availability-text {
  margin: 0;

  color: rgba(255, 255, 255, 0.7);

  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.015em;

  white-space: nowrap;
}

.available {
  color: #00e89a;
  font-weight: 600;
}

/* right-side decorative orbs */
.orb-group {
  position: relative;

  width: 42px;
  height: 24px;

  margin-left: 20px;

  flex-shrink: 0;
}

.orb {
  position: absolute;

  width: 14px;
  height: 14px;

  border-radius: 50%;

  background: rgba(0, 232, 154, 0.18);

  box-shadow:
    inset 0 0 6px rgba(255, 255, 255, 0.06),
    0 0 10px rgba(0, 232, 154, 0.08);
}

.orb-1 {
  right: 18px;
  top: 5px;
  opacity: 0.35;
}

.orb-2 {
  right: 9px;
  top: 4px;
  opacity: 0.55;
}

.orb-3 {
  right: 1px;
  top: 2px;
  opacity: 0.85;
}

/* status pulse */
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.85;
  }

  50% {
    transform: scale(1.22);
    opacity: 1;
  }
}

/* larger desktop scaling */
@media (min-width: 1024px) {
  .availability-card {
    min-height: 64px;
    padding: 0 24px;
  }

  .status-icon {
    width: 42px;
    height: 42px;
  }

  .status-dot {
    width: 9px;
    height: 9px;
  }

  .divider {
    height: 26px;
    margin-left: 18px;
    margin-right: 20px;
  }

  .availability-text {
    font-size: 15px;
  }

  .orb-group {
    width: 48px;
    height: 28px;
    margin-left: 28px;
  }

  .orb {
    width: 16px;
    height: 16px;
  }

  .orb-1 {
    right: 20px;
    top: 6px;
  }

  .orb-2 {
    right: 10px;
    top: 5px;
  }

  .orb-3 {
    right: 1px;
    top: 3px;
  }
}

/* mobile */
@media (max-width: 640px) {
  .availability-card {
    min-height: 48px;
    padding: 0 14px;
    width: 100%;
    justify-content: flex-start;
  }

  .status-icon {
    width: 30px;
    height: 30px;
  }

  .status-dot {
    width: 7px;
    height: 7px;
  }

  .divider {
    margin-left: 10px;
    margin-right: 12px;
    height: 18px;
  }

  .availability-text {
    font-size: 12px;
  }

  .orb-group {
    margin-left: auto;
    width: 34px;
    height: 20px;
  }

  .orb {
    width: 11px;
    height: 11px;
  }

  .orb-1 {
    right: 14px;
    top: 4px;
  }

  .orb-2 {
    right: 7px;
    top: 3px;
  }

  .orb-3 {
    right: 1px;
    top: 2px;
  }
}
</style>
