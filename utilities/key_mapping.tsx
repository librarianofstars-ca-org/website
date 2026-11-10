import { validate_against_schema } from "@/schema/validation";

export function to_key_index_name(index: number, name: string) {
  return index.toString() + "-" + name.toLowerCase();
}

interface Key {
  name: string;
  index: number;
}

export function to_key(key: Key) {
  if (
    validate_against_schema("https://librarianofstars.ca/schema/types/key", key)
  ) {
    return key.name + "-" + key.index;
  } else {
    return "undefined_key";
  }
}
