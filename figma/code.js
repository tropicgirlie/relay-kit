// Generated from src/tokens.css and figma/library.js
const colors = {
  "paper": "#f6f8fc",
  "surface": "#ffffff",
  "ink": "#16213e",
  "muted": "#53627c",
  "line": "#d9e1ee",
  "pine": "#1d3b72",
  "mint": "#bfe8f7",
  "violet": "#f3e4f5",
  "sand": "#f9ead3"
};
// The build prepends colors from the shared token stylesheet.
async function createLibrary() {
  const font = { family: "Inter", style: "Regular" };
  await figma.loadFontAsync(font);
  const page = figma.createPage();
  page.name = "Relay Kit · Foundations";
  await figma.setCurrentPageAsync(page);
  const collection = figma.variables.createVariableCollection(
    "Relay Kit · " + page.id,
  );
  const variables = {};
  for (const [name, hex] of Object.entries(colors)) {
    const variable = figma.variables.createVariable(name, collection, "COLOR");
    const channels = [1, 3, 5].map(
      (start) => parseInt(hex.slice(start, start + 2), 16) / 255,
    );
    variable.setValueForMode(collection.defaultModeId, {
      r: channels[0],
      g: channels[1],
      b: channels[2],
    });
    variables[name] = variable;
  }
  function paint(name) {
    return [
      figma.variables.setBoundVariableForPaint(
        { type: "SOLID", color: { r: 0, g: 0, b: 0 } },
        "color",
        variables[name],
      ),
    ];
  }
  function label(text, size, parent) {
    const node = figma.createText();
    node.fontName = font;
    node.fontSize = size;
    node.characters = text;
    node.fills = paint("ink");
    parent.appendChild(node);
    return node;
  }
  const heading = label("Relay Kit / Foundations", 32, page);
  Object.keys(colors).forEach((name, i) => {
    const swatch = figma.createFrame();
    swatch.name = "Color / " + name;
    swatch.resize(150, 72);
    swatch.x = (i % 4) * 170;
    swatch.y = 70 + Math.floor(i / 4) * 120;
    swatch.cornerRadius = 12;
    swatch.fills = paint(name);
    const caption = label(name + "  " + colors[name], 13, page);
    caption.x = swatch.x;
    caption.y = swatch.y + 78;
  });
  const states = ["Ready", "In review", "Approved", "Declined"];
  const variants = states.map((state, i) => {
    const part = figma.createComponent();
    part.name = "Status=" + state;
    part.layoutMode = "HORIZONTAL";
    part.primaryAxisSizingMode = "AUTO";
    part.counterAxisSizingMode = "AUTO";
    part.paddingLeft = part.paddingRight = 10;
    part.paddingTop = part.paddingBottom = 4;
    part.cornerRadius = 24;
    part.fills = paint(["mint", "sand", "mint", "violet"][i]);
    label(state, 12, part);
    part.x = i * 118;
    part.y = 500;
    return part;
  });
  const set = figma.combineAsVariants(variants, page);
  set.name = "StatusPill";
  figma.viewport.scrollAndZoomIntoView([heading, set]);
}
createLibrary()
  .then(() => figma.closePlugin("Relay Kit foundations created."))
  .catch((error) => figma.closePlugin(String(error)));
