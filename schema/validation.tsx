import AJV from "ajv";

import schema_key from "@/schema/types/key.json";
import schema_link from "@/schema/types/link.json";

import schema_image from "@/schema/components/elements/image.json";
import schema_icon from "@/schema/components/elements/icon.json";
import schema_seperator from "@/schema/components/elements/seperator.json";
import schema_spacer from "@/schema/components/elements/spacer.json";
import schema_heading from "@/schema/components/elements/heading.json";

import schema_paragraph from "@/schema/components/blocks/paragraph.json";
import schema_gallery from "@/schema/components/blocks/gallery.json";
import schema_links from "@/schema/components/blocks/links.json";
import schema_generic_block from "@/schema/components/blocks/generic.json";

import schema_navbar from "@/schema/components/elements/structure/navbar.json";
import schema_toc from "@/schema/components/elements/structure/table_of_contents.json";

import schema_header_section from "@/schema/components/elements/structure/header_section.json";
import schema_sidebar_section from "@/schema/components/elements/structure/sidebar_section.json";
import schema_main_section from "@/schema/components/elements/structure/main_section.json";
import schema_footer_section from "@/schema/components/elements/structure/footer_section.json";

import schema_header from "@/schema/components/page/header.json";
import schema_sidebar from "@/schema/components/page/sidebar.json";
import schema_footer from "@/schema/components/page/footer.json";
import schema_main from "@/schema/components/page/main.json";

import schema_body from "@/schema/components/meta/body.json";
import schema_head from "@/schema/components/meta/head.json";
import schema_page from "@/schema/components/meta/page.json";

import schema_datalink from "@/schema/datalink.json";
import { JSX } from "react/jsx-runtime";

export const ajv_instance = new AJV({
  strict: true,
  allErrors: true,
  verbose: true,
  schemas: [
    schema_key,
    schema_link,
    schema_image,
    schema_icon,
    schema_seperator,
    schema_spacer,
    schema_heading,
    schema_navbar,
    schema_toc,
    schema_header_section,
    schema_sidebar_section,
    schema_main_section,
    schema_footer_section,
    schema_paragraph,
    schema_gallery,
    schema_links,
    schema_generic_block,
    schema_header,
    schema_sidebar,
    schema_footer,
    schema_main,
    schema_body,
    schema_head,
    schema_page,
    schema_datalink,
  ],
});

export function render_if_valid_data<component_type>(
  schema_id: string,
  data: component_type,
  valid_render: JSX.Element,
) {
  if (ajv_instance.validate<component_type>(schema_id, data)) {
    return valid_render;
  } else {
    console.log(ajv_instance.errors);
    return (
      <span className="error">
        Invalid data: {JSON.stringify(data, null, 2)}
      </span>
    );
  }
}
