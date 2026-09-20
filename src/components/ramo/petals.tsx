const CHIPS = [
  { left: "6%", delay: "0s", dur: "14s", drift: "18px", spin: "120deg", size: 10 },
  { left: "14%", delay: "-2s", dur: "16s", drift: "-22px", spin: "-160deg", size: 14 },
  { left: "22%", delay: "-5s", dur: "13s", drift: "30px", spin: "90deg", size: 8 },
  { left: "31%", delay: "-1s", dur: "18s", drift: "-12px", spin: "200deg", size: 12 },
  { left: "39%", delay: "-7s", dur: "15s", drift: "26px", spin: "-80deg", size: 9 },
  { left: "48%", delay: "-3s", dur: "17s", drift: "-28px", spin: "150deg", size: 13 },
  { left: "57%", delay: "-9s", dur: "14s", drift: "10px", spin: "-140deg", size: 11 },
  { left: "66%", delay: "-4s", dur: "16s", drift: "-18px", spin: "70deg", size: 8 },
  { left: "74%", delay: "-6s", dur: "19s", drift: "24px", spin: "-200deg", size: 15 },
  { left: "82%", delay: "-8s", dur: "13s", drift: "-30px", spin: "110deg", size: 10 },
  { left: "90%", delay: "-2.5s", dur: "15s", drift: "16px", spin: "-90deg", size: 12 },
  { left: "96%", delay: "-11s", dur: "18s", drift: "-8px", spin: "170deg", size: 9 },
];

export function FallingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {CHIPS.map((chip, i) => (
        <span
          key={i}
          className="petal-chip absolute top-0 rounded-[100%_0_100%_0] bg-petal/85"
          style={{
            left: chip.left,
            width: chip.size,
            height: chip.size * 1.35,
            ["--delay" as string]: chip.delay,
            ["--dur" as string]: chip.dur,
            ["--drift" as string]: chip.drift,
            ["--spin" as string]: chip.spin,
          }}
        />
      ))}
    </div>
  );
}
