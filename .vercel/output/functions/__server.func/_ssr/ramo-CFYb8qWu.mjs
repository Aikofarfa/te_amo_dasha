//#region node_modules/.nitro/vite/services/ssr/assets/ramo-CFYb8qWu.js
var FLOWERS = [
	{
		id: 1,
		name: "Alegría",
		line: "Para los días en los que te ríes sin motivo.",
		kind: "sunflower"
	},
	{
		id: 2,
		name: "Cariño",
		line: "El cotidiano, el que no necesita ocasión.",
		kind: "rose"
	},
	{
		id: 3,
		name: "Luz",
		line: "Porque llegas y se aclara la habitación.",
		kind: "daisy"
	},
	{
		id: 4,
		name: "Calma",
		line: "Un lugar quieto para cuando el mundo corre.",
		kind: "rose"
	},
	{
		id: 5,
		name: "Valor",
		line: "Por las veces que sigues aunque tengas miedo.",
		kind: "sunflower"
	},
	{
		id: 6,
		name: "Ternura",
		line: "La que cabe en un mensaje a deshoras.",
		kind: "daisy"
	},
	{
		id: 7,
		name: "Promesa",
		line: "No de perfección. De quedarme.",
		kind: "rose"
	},
	{
		id: 8,
		name: "Verano",
		line: "Aunque sea septiembre, contigo siempre hay sol.",
		kind: "sunflower"
	},
	{
		id: 9,
		name: "Suerte",
		line: "La de haberte encontrado.",
		kind: "daisy"
	},
	{
		id: 10,
		name: "Casa",
		line: "No un lugar: una persona.",
		kind: "rose"
	},
	{
		id: 11,
		name: "Tiempo",
		line: "El que quiero seguir gastando a tu lado.",
		kind: "sunflower"
	},
	{
		id: 12,
		name: "Risa",
		line: "Esa que se te escapa y me desarma.",
		kind: "daisy"
	},
	{
		id: 13,
		name: "Paz",
		line: "Un ramo para bajar los hombros.",
		kind: "rose"
	},
	{
		id: 14,
		name: "Deseo",
		line: "Que todo te salga bien. En serio. Todo.",
		kind: "sunflower"
	},
	{
		id: 15,
		name: "Recuerdo",
		line: "De este 21 de septiembre, y de los que vengan.",
		kind: "daisy"
	},
	{
		id: 16,
		name: "Cuidado",
		line: "El silencio en el que te miro para ver si estás bien.",
		kind: "rose"
	},
	{
		id: 17,
		name: "Juego",
		line: "Porque quererte también es hacer tonterías.",
		kind: "sunflower"
	},
	{
		id: 18,
		name: "Mañana",
		line: "Un pétalo para lo que todavía no hemos vivido.",
		kind: "daisy"
	},
	{
		id: 19,
		name: "Abrazo",
		line: "Este no ocupa espacio en el florero.",
		kind: "rose"
	},
	{
		id: 20,
		name: "Lealtad",
		line: "Amarte en los días lentos, no solo en los bonitos.",
		kind: "sunflower"
	},
	{
		id: 21,
		name: "Para ti",
		line: "La última. La que no se marchita.",
		kind: "daisy"
	}
];
function clip(value, max) {
	if (typeof value !== "string") return "";
	return value.trim().slice(0, max);
}
function parseRamoSearch(search) {
	return {
		para: clip(search.para, 48),
		de: clip(search.de, 48),
		nota: clip(search.nota, 1600)
	};
}
function defaultLetter(para, de) {
	const who = para.trim() || "tú";
	return [
		para.trim() ? `Para ${who}:` : "Para ti:",
		"No pude ir a la floristería.",
		"El sueldo de un programador a veces alcanza para el café, no para veintiún girasoles de verdad.",
		"Así que hice esto: un jardín que cabe en tu bolsillo, que no pide agua, y que puedes abrir todas las veces que quieras.",
		"Dicen que las flores amarillas se regalan para desear que todo te salga bien. Yo las mando para eso. Y para decirte que, aunque no pueda llenarte la casa, sí puedo llenarte una página.",
		"Toca cada flor. Son veintiuna. Una por cada día de este mes que termina en ti.",
		`Con todo,\n${de.trim() ? de.trim() : "Alguien que te quiere"}`
	];
}
function letterParagraphs(search) {
	if (search.nota.trim()) {
		const who = search.para.trim();
		const body = search.nota.trim().split(/\n+/).map((p) => p.trim()).filter(Boolean);
		const signed = search.de.trim() ? [...body, `Con todo,\n${search.de.trim()}`] : body;
		return who ? [`Para ${who}:`, ...signed] : signed;
	}
	return defaultLetter(search.para, search.de);
}
function pageTitle(para) {
	return para.trim() ? `Flores amarillas para ${para.trim()}` : "Flores amarillas";
}
function buildRamoPath(para, de, nota) {
	const params = new URLSearchParams();
	if (para.trim()) params.set("para", para.trim());
	if (de.trim()) params.set("de", de.trim());
	if (nota.trim()) params.set("nota", nota.trim());
	const query = params.toString();
	return query ? `/?${query}` : "/";
}
//#endregion
export { parseRamoSearch as a, pageTitle as i, buildRamoPath as n, letterParagraphs as r, FLOWERS as t };
