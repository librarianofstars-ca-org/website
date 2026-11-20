import AJV from "ajv";

import schema_paragraph from "@/schema/components/blocks/paragraph.json";
import schema_gallery from "@/schema/components/blocks/gallery.json";
import schema_links from "@/schema/components/blocks/links.json";

import schema_image from "@/schema/components/elements/image.json";
import schema_navbar from "@/schema/components/elements/structure/navbar.json";
import schema_toc from "@/schema/components/elements/structure/table_of_contents.json";
import schema_foot_sec from "@/schema/components/elements/structure/footer_section.json";

import schema_key from "@/schema/types/key.json";
import schema_link from "@/schema/types/link.json";

import schema_header from "@/schema/components/page/header.json";
import schema_sidebar from "@/schema/components/page/sidebar.json";
import schema_footer from "@/schema/components/page/footer.json";

export const ajv_instance = new AJV({
  strict: true,
  allErrors: true,
  verbose: true,
  schemas: [
    schema_key,
    schema_link,
    schema_image,
    schema_navbar,
    schema_toc,
    schema_foot_sec,
    schema_paragraph,
    schema_gallery,
    schema_links,
    schema_header,
    schema_sidebar,
    schema_footer,
  ],
});

export function validate_against_schema(id: string, data: any): boolean {
  return ajv_instance.validate<typeof data>(id, data);
}

export function validation_function_for_schema(
  id: string,
): (data: any) => boolean {
  const validate = ajv_instance.getSchema(id);
  if (!validate) {
    console.log(ajv_instance.errors);
    return () => false;
  }
  return validate;
}

export function ErrorData(data) {
  return <span className="error">Invalid data: {JSON.stringify(data)}</span>;
}
