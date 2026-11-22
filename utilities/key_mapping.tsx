import { validate_against_schema } from "@/schema/validation";

export function to_key_index_name(index: number, name: string) {
  return index.toString() + "-" + name.toLowerCase();
}

export interface Key {
  name: string;
  index: number;
}

export interface keyed_list {
  id: Key;
  contents: object | object[] | string | string[] | boolean;
  // should only be objects - later change some aspects of blocks
}

export function to_key(key: Key) {
  if (
    validate_against_schema(
      "https://librarianofstars.ca/schema/types/key.json",
      key,
    )
  ) {
    return key.name + "-" + key.index;
  } else {
    return "undefined_key";
  }
}
