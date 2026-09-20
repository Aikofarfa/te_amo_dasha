import { i as __toESM } from "../_runtime.mjs";
import { r as letterParagraphs, t as FLOWERS } from "./ramo-CFYb8qWu.mjs";
import { R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as cn, t as Button } from "./button-0Ofrz9uA.mjs";
import { n as Route$1 } from "./router-Cv3ueCaN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CumwJm-R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CHIPS = [
	{
		left: "6%",
		delay: "0s",
		dur: "14s",
		drift: "18px",
		spin: "120deg",
		size: 10
	},
	{
		left: "14%",
		delay: "-2s",
		dur: "16s",
		drift: "-22px",
		spin: "-160deg",
		size: 14
	},
	{
		left: "22%",
		delay: "-5s",
		dur: "13s",
		drift: "30px",
		spin: "90deg",
		size: 8
	},
	{
		left: "31%",
		delay: "-1s",
		dur: "18s",
		drift: "-12px",
		spin: "200deg",
		size: 12
	},
	{
		left: "39%",
		delay: "-7s",
		dur: "15s",
		drift: "26px",
		spin: "-80deg",
		size: 9
	},
	{
		left: "48%",
		delay: "-3s",
		dur: "17s",
		drift: "-28px",
		spin: "150deg",
		size: 13
	},
	{
		left: "57%",
		delay: "-9s",
		dur: "14s",
		drift: "10px",
		spin: "-140deg",
		size: 11
	},
	{
		left: "66%",
		delay: "-4s",
		dur: "16s",
		drift: "-18px",
		spin: "70deg",
		size: 8
	},
	{
		left: "74%",
		delay: "-6s",
		dur: "19s",
		drift: "24px",
		spin: "-200deg",
		size: 15
	},
	{
		left: "82%",
		delay: "-8s",
		dur: "13s",
		drift: "-30px",
		spin: "110deg",
		size: 10
	},
	{
		left: "90%",
		delay: "-2.5s",
		dur: "15s",
		drift: "16px",
		spin: "-90deg",
		size: 12
	},
	{
		left: "96%",
		delay: "-11s",
		dur: "18s",
		drift: "-8px",
		spin: "170deg",
		size: 9
	}
];
function FallingPetals() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": "true",
		children: CHIPS.map((chip, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "petal-chip absolute top-0 rounded-[100%_0_100%_0] bg-petal/85",
			style: {
				left: chip.left,
				width: chip.size,
				height: chip.size * 1.35,
				["--delay"]: chip.delay,
				["--dur"]: chip.dur,
				["--drift"]: chip.drift,
				["--spin"]: chip.spin
			}
		}, i))
	});
}
function Cover({ para, leaving, onOpen }) {
	const forWhom = para.trim() ? `para ${para.trim()}` : "para ti";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: leaving ? "cover-leave relative min-h-dvh overflow-hidden" : "relative min-h-dvh overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/field.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FallingPetals, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh max-w-lg flex-col items-center justify-center px-6 py-16 text-center text-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal font-display text-xs tracking-kicker uppercase text-paper/80",
						children: "21 de septiembre"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "reveal mt-5 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl",
						children: ["Flores amarillas ", forWhom]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal mt-5 max-w-sm text-base leading-relaxed text-paper/85",
						style: { animationDelay: "80ms" },
						children: "No pude comprarte un ramo. Así que te escribí un jardín."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onOpen,
						className: "reveal group mt-10 flex flex-col items-center gap-3",
						style: { animationDelay: "160ms" },
						"aria-label": "Abrir el ramo",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-20 items-center justify-center rounded-full bg-wax text-wax-fg shadow-wax transition-transform duration-150 ease-out group-hover:scale-105 group-active:scale-[0.96]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaxMark, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm tracking-kicker uppercase text-paper",
							children: "Abrir"
						})]
					})
				]
			})
		]
	});
}
function WaxMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className: "size-10",
		"aria-hidden": "true",
		children: [
			Array.from({ length: 12 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "32",
				cy: "14",
				rx: "4",
				ry: "12",
				fill: "currentColor",
				opacity: "0.92",
				transform: `rotate(${i * 30} 32 32)`
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "8",
				fill: "var(--color-wax)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "4.5",
				fill: "currentColor",
				opacity: "0.85"
			})
		]
	});
}
function Finale({ para, de, personalized }) {
	const who = para.trim() || "ti";
	const from = de.trim();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-xl px-4 pb-24 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "overflow-hidden rounded-xl bg-paper-deep shadow-letter",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/bouquet.jpg",
					alt: "Un ramo de flores amarillas",
					className: "aspect-3/4 w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-kicker uppercase text-muted",
						children: "El ramo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium tracking-tight text-ink",
						children: "Estas flores no se marchitan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto mt-4 max-w-md text-base leading-relaxed text-ink/85",
						children: [
							"Un 21 de septiembre, ",
							from ? `${from} juntó` : "junté",
							" veintiún flores amarillas para ",
							who,
							". No caben en un florero. Caben aquí, todas las veces que quieras volver."
						]
					})
				]
			}),
			!personalized ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-center text-sm text-muted",
				children: [
					"Si este ramo es para alguien más,",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/personalizar",
						className: "text-ink underline decoration-petal decoration-2 underline-offset-4",
						children: "ponle su nombre"
					}),
					"."
				]
			}) : null
		]
	});
}
function petals(count, inner = false) {
	return Array.from({ length: count }, (_, i) => ({
		i,
		angle: 360 / count * i + (inner ? 360 / count / 2 : 0)
	}));
}
function FlowerHead({ flower, picked }) {
	const kind = flower.kind;
	const count = kind === "sunflower" ? 18 : kind === "daisy" ? 12 : 9;
	const rx = kind === "sunflower" ? 5 : kind === "daisy" ? 7 : 8;
	const ry = kind === "sunflower" ? 20 : kind === "daisy" ? 22 : 18;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 96",
		className: "h-full w-full",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "40",
				y1: "52",
				x2: "40",
				y2: "94",
				stroke: "var(--color-leaf)",
				strokeWidth: "2.2",
				strokeLinecap: "round",
				opacity: picked ? .9 : .45
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 70 C 28 64, 22 74, 30 78",
				fill: "none",
				stroke: "var(--color-leaf)",
				strokeWidth: "1.6",
				opacity: picked ? .8 : .3
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				style: {
					transformOrigin: "40px 40px",
					transform: picked ? "scale(1)" : "scale(0.22)",
					transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)"
				},
				children: [petals(count).map(({ i, angle }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "40",
					cy: "22",
					rx,
					ry,
					fill: "currentColor",
					opacity: .92 - i % 3 * .06,
					transform: `rotate(${angle} 40 40)`
				}, `a-${i}`)), kind === "rose" ? petals(7, true).map(({ i, angle }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "40",
					cy: "28",
					rx: "6",
					ry: "12",
					fill: "var(--color-petal-deep)",
					opacity: "0.85",
					transform: `rotate(${angle} 40 40)`
				}, `b-${i}`)) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: picked ? kind === "sunflower" ? 11 : 7 : 6,
				fill: kind === "sunflower" ? "var(--color-ink)" : "var(--color-petal-deep)"
			}),
			kind === "sunflower" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: picked ? 7 : 3.5,
				fill: "var(--color-petal-deep)"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "2.6",
				fill: "var(--color-paper)",
				opacity: "0.7"
			})
		]
	});
}
function BloomFlower({ flower, picked, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "flex flex-col items-center gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onPick(flower.id),
			"aria-pressed": picked,
			"aria-label": picked ? `${flower.name}: ${flower.line}` : `Abrir la flor ${flower.name}`,
			className: cn("size-20 rounded-full text-petal transition-[transform,filter] duration-200 ease-out", "hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petal/70", "active:scale-[0.96]", picked ? "bloom-glow" : "opacity-90"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowerHead, {
				flower,
				picked
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "max-w-28 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm font-medium text-ink",
				children: flower.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-0.5 text-xs leading-snug text-muted transition-[opacity,transform,filter] duration-300 ease-out", picked ? "translate-y-0 opacity-100 blur-0" : "h-0 overflow-hidden translate-y-1 opacity-0 blur-[2px]"),
				children: flower.line
			})]
		})]
	});
}
function Garden({ picked, onPick, onPickAll }) {
	const count = picked.size;
	const remaining = FLOWERS.length - count;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-4 pb-8 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 flex flex-col items-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-kicker uppercase text-muted",
					children: "El jardín"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-medium tracking-tight text-ink",
					children: count === 0 ? "Toca una flor para abrirla" : count === FLOWERS.length ? "Las veintiuna, para ti" : `${count} de ${FLOWERS.length} flores`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-md text-sm leading-relaxed text-muted",
					children: count === FLOWERS.length ? "Ya no les falta agua. Este ramo no se marchita." : "Cada una guarda una línea. No hay prisa."
				}),
				remaining > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "mt-3",
					onClick: onPickAll,
					children: "Abrir todas"
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-3 gap-x-2 gap-y-6 sm:grid-cols-4 sm:gap-x-4 md:grid-cols-5",
			children: FLOWERS.map((flower) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BloomFlower, {
				flower,
				picked: picked.has(flower.id),
				onPick
			}, flower.id))
		})]
	});
}
function Letter({ search }) {
	const paragraphs = letterParagraphs(search);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "relative mx-auto max-w-xl rounded-xl bg-paper px-6 py-10 shadow-letter sm:px-10 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/pressed.jpg",
				alt: "",
				className: "mx-auto mb-8 h-28 w-full max-w-xs rounded-md object-cover opacity-90 sm:h-36"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-center text-xs tracking-kicker uppercase text-muted",
				children: "Una carta, y veintiún flores"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-5",
				children: paragraphs.map((block, index) => {
					const isGreeting = index === 0 && block.startsWith("Para");
					const isSignoff = index === paragraphs.length - 1 && block.startsWith("Con todo");
					if (isGreeting) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-medium leading-snug text-ink",
						children: block
					}, index);
					if (isSignoff) {
						const [lead, name] = block.split("\n");
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "pt-2 font-display text-lg leading-relaxed text-ink",
							children: [lead, name ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: name
							})] }) : null]
						}, index);
					}
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-ink/90",
						children: block
					}, index);
				})
			})
		]
	});
}
function Home() {
	const search = Route$1.useSearch();
	const [opened, setOpened] = (0, import_react.useState)(false);
	const [leaving, setLeaving] = (0, import_react.useState)(false);
	const [picked, setPicked] = (0, import_react.useState)(() => /* @__PURE__ */ new Set());
	const personalized = Boolean(search.para.trim() || search.de.trim() || search.nota.trim());
	const onOpen = (0, import_react.useCallback)(() => {
		if (leaving || opened) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setOpened(true);
			return;
		}
		setLeaving(true);
		window.setTimeout(() => setOpened(true), 480);
	}, [leaving, opened]);
	const onPick = (0, import_react.useCallback)((id) => {
		setPicked((prev) => {
			if (prev.has(id)) return prev;
			const next = new Set(prev);
			next.add(id);
			return next;
		});
	}, []);
	const onPickAll = (0, import_react.useCallback)(() => {
		setPicked(new Set(FLOWERS.map((flower) => flower.id)));
	}, []);
	if (!opened) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
		para: search.para,
		leaving,
		onOpen
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "garden-enter min-h-dvh bg-paper-deep",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative h-72 overflow-hidden sm:h-96",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/field.jpg",
						alt: "Un campo de flores amarillas al atardecer",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-b from-ink/25 via-ink/15 to-paper-deep" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex h-full flex-col items-center justify-end px-6 pb-16 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs tracking-kicker uppercase text-paper",
							children: "21 de septiembre"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl",
							children: search.para.trim() ? `Para ${search.para.trim()}` : "Para ti"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 -mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Letter, { search })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Garden, {
					picked,
					onPick,
					onPickAll
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Finale, {
					para: search.para,
					de: search.de,
					personalized
				})
			})
		]
	});
}
//#endregion
export { Home as component };
