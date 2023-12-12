import {defineDocumentType, defineNestedType, makeSource} from "contentlayer/source-files"

    const Image = defineNestedType(() => ({
        name: 'Image',
        fields: {
            "src": { type: "string", required: true},
            "width": { type: "number", required: true},
            "height": { type: "number", requried: true},
        }
    }));

    export const Portfolio = defineDocumentType(() => ({
        name: "Portfolio",
        filePathPattern: "portfolio/*.md",
        fields: {
            title: { type: "string", required: true },
            date: { type: "date", required: true },
            slug: { type: "string", required: true },
            notionID: { type: "string", required: false},
            tags: { type: "list", of: { type: "string" }, required: false},
            image: { type: "nested", of: Image, required: true},
        }
    }));

    export default makeSource({
        contentDirPath: "src/content",
        documentTypes: [Portfolio],
    });