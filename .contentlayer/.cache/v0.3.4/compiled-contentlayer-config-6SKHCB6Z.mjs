// contentlayer.config.ts
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";
var Image = defineNestedType(() => ({
  name: "Image",
  fields: {
    "src": { type: "string", required: true },
    "width": { type: "number", required: true },
    "height": { type: "number", requried: true }
  }
}));
var Portfolio = defineDocumentType(() => ({
  name: "Portfolio",
  filePathPattern: "portfolio/*.md",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    slug: { type: "string", required: true },
    notionID: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: false },
    image: { type: "nested", of: Image, required: true }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Portfolio]
});
export {
  Portfolio,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-6SKHCB6Z.mjs.map
