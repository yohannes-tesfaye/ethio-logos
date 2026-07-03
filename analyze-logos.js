import fs from "fs";
import path from "path";

const srcDir = path.resolve("./src");
const outputJsonPath = path.resolve("./app/logos-metadata.json");

function getFormatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  return `${kb.toFixed(1)} KB`;
}

try {
  console.log("Analyzing SVG components in", srcDir);
  const files = fs.readdirSync(srcDir);
  const metadataList = [];

  for (const file of files) {
    if (!file.endsWith(".tsx") || file === "index.ts") {
      continue;
    }

    const filePath = path.join(srcDir, file);
    const stats = fs.statSync(filePath);
    const content = fs.readFileSync(filePath, "utf-8");

    const componentName = file.replace(".tsx", "");
    
    // Check if the component contains <image or xlinkHref or base64
    const isRaster = content.includes("<image") || content.includes("xlinkHref") || content.includes("base64");
    
    metadataList.push({
      name: componentName,
      filename: file,
      type: isRaster ? "Raster Image" : "Pure Vector",
      sizeBytes: stats.size,
      sizeFormatted: getFormatSize(stats.size),
      isRaster: isRaster
    });
  }

  // Sort by name for alphabetical order
  metadataList.sort((a, b) => a.name.localeCompare(b.name));

  fs.writeFileSync(outputJsonPath, JSON.stringify(metadataList, null, 2), "utf-8");
  console.log(`Successfully generated metadata for ${metadataList.length} logos! Saved to ${outputJsonPath}`);
} catch (error) {
  console.error("Error analyzing logos:", error);
}
