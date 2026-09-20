import { i as __toESM } from "../_runtime.mjs";
import { n as buildRamoPath } from "./ramo-CFYb8qWu.mjs";
import { R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as cn, t as Button } from "./button-0Ofrz9uA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/personalizar-Crh8ENGk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-line bg-paper px-3 text-base text-ink shadow-none transition-[border-color,box-shadow] duration-150", "placeholder:text-muted/70", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petal/70", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-ink", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-40 w-full rounded-lg border border-line bg-paper px-3 py-3 text-base text-ink transition-[border-color,box-shadow] duration-150", "placeholder:text-muted/70", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petal/70", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Personalizar() {
	const [para, setPara] = (0, import_react.useState)("");
	const [de, setDe] = (0, import_react.useState)("");
	const [nota, setNota] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [origin, setOrigin] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setOrigin(window.location.origin);
	}, []);
	const path = (0, import_react.useMemo)(() => buildRamoPath(para, de, nota), [
		para,
		de,
		nota
	]);
	const shareUrl = origin ? `${origin}${path}` : path;
	async function copyLink() {
		const url = `${window.location.origin}${path}`;
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1800);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-dvh bg-paper px-4 py-12 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-kicker uppercase text-muted",
					children: "Para quien arma el ramo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-medium tracking-tight text-ink",
					children: "Ponle su nombre"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base leading-relaxed text-muted",
					children: "Escribe para quién es, de parte de quién, y si quieres, tu propia carta. Luego copia el link y mándaselo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-10 space-y-5 rounded-xl border border-line bg-paper-deep/40 p-5 sm:p-7",
					onSubmit: (event) => {
						event.preventDefault();
						copyLink();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "para",
								children: "Para"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "para",
								name: "para",
								autoComplete: "off",
								placeholder: "Su nombre",
								value: para,
								onChange: (event) => setPara(event.target.value),
								maxLength: 48
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "de",
								children: "De parte de"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "de",
								name: "de",
								autoComplete: "off",
								placeholder: "Tu nombre",
								value: de,
								onChange: (event) => setDe(event.target.value),
								maxLength: 48
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "nota",
									children: "Carta (opcional)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "nota",
									name: "nota",
									placeholder: "Déjala vacía si quieres la carta que ya está escrita.",
									value: nota,
									onChange: (event) => setNota(event.target.value),
									maxLength: 1600
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [nota.length, " / 1600"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "flex-1",
								children: copied ? "Link copiado" : "Copiar link"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								className: "flex-1",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									search: {
										para,
										de,
										nota
									},
									children: "Ver el ramo"
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 break-all rounded-md bg-paper-deep px-3 py-2 text-xs text-muted",
					children: shareUrl
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center text-sm text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						search: {
							para: "",
							de: "",
							nota: ""
						},
						className: "text-ink underline decoration-petal decoration-2 underline-offset-4",
						children: "Volver al jardín"
					})
				})
			]
		})
	});
}
//#endregion
export { Personalizar as component };
