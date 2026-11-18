export interface IconShape {
  tag: "path" | "rect" | "circle";
  attrs: Record<string, string | number>;
}

const p = (d: string): IconShape => ({ tag: "path", attrs: { d } });
const r = (x: number, y: number, width: number, height: number, rx: number): IconShape => ({
  tag: "rect",
  attrs: { x, y, width, height, rx },
});
const c = (cx: number, cy: number, rad: number): IconShape => ({
  tag: "circle",
  attrs: { cx, cy, r: rad },
});

export const iconShapes = {
  shield: [p("M12 3 4.5 6v5.5c0 4.6 3.1 8.4 7.5 9.5 4.4-1.1 7.5-4.9 7.5-9.5V6L12 3Z")],
  shieldCheck: [
    p("M12 3 4.5 6v5.5c0 4.6 3.1 8.4 7.5 9.5 4.4-1.1 7.5-4.9 7.5-9.5V6L12 3Z"),
    p("m8.8 12.2 2.3 2.3 4.2-4.6"),
  ],
  check: [p("m5 12.5 4.5 4.5L19 7.5")],
  chevronDown: [p("m6 9 6 6 6-6")],
  mail: [r(3, 5, 18, 14, 2), p("m3.5 7 8.5 6 8.5-6")],
  phone: [
    p("M5 4h3.5l1.7 4.2-2.1 1.3a11 11 0 0 0 6.4 6.4l1.3-2.1L20 15.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"),
  ],
  menu: [p("M4 7h16M4 12h16M4 17h16")],
  close: [p("M6 6l12 12M18 6 6 18")],
  fileSign: [
    p("M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"),
    p("M14 3v5h5M9 14.5c1-1.5 1.8-1.5 2.2-.3.4 1.2 1.2 1 2.3-.7"),
  ],
  searchShield: [c(10.5, 10.5, 6), p("m15 15 5.5 5.5M8 10.5l1.8 1.8L13 9")],
  report: [r(4, 3, 16, 18, 2), p("M8 8h8M8 12h8M8 16h5")],
  graduation: [
    p("m2.5 9.5 9.5-5 9.5 5-9.5 5-9.5-5Z"),
    p("M6.5 12v4.2c0 1.2 2.5 2.8 5.5 2.8s5.5-1.6 5.5-2.8V12M21.5 9.5v6"),
  ],
  pin: [p("M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"), c(12, 10, 2.5)],
  store: [
    p("M4 9.5 5.5 4h13L20 9.5M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0M5 12.5V20h14v-7.5M10 20v-4.5h4V20"),
  ],
  tag: [
    p("M3 12.2V4.5A1.5 1.5 0 0 1 4.5 3h7.7a1.5 1.5 0 0 1 1.06.44l7.3 7.3a1.5 1.5 0 0 1 0 2.12l-7.7 7.7a1.5 1.5 0 0 1-2.12 0l-7.3-7.3A1.5 1.5 0 0 1 3 12.2Z"),
    c(8, 8, 1.3),
  ],
  handshake: [
    p("m3 11 4-4 4 1.5L14 6l7 6-3 3M3 11l5 5m0 0 2 2m-2-2-1 1m4-1 2 2m-2-2 1.5-1.5M13 17l2 2m-2-2-1 1"),
  ],
  lockOpen: [r(5, 11, 14, 10, 2), p("M8 11V8a4 4 0 0 1 7.6-1.7M12 15v2")],
  puzzle: [
    p("M10 4a2 2 0 1 1 4 0v2h4v4h-2a2 2 0 1 0 0 4h2v4h-4v-2a2 2 0 1 0-4 0v2H6v-4H4a2 2 0 1 1 0-4h2V6h4V4Z"),
  ],
  clock: [c(12, 12, 9), p("M12 7v5l3 2")],
} satisfies Record<string, IconShape[]>;

export type IconName = keyof typeof iconShapes;
