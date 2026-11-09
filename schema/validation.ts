import AJV from "ajv"

import schema_test from "@/schema/example.json"
import data_test from "@/data/example_test.json"

import schema_paragraph from "@/schema/components/blocks/paragraph.json"
import schema_key from "@/schema/types/key.json"

export const ajv_instance = new AJV({ strict: true, allErrors:true, verbose:true, schemas:[], })

ajv_instance.compile(schema_key)
ajv_instance.compile(schema_paragraph)

// let schemas = []

// schemas.forEach(schema => {
//   ajv_instance.addSchema(schema)
// });

// ajv_instance.compile(schema_test)
// ajv_instance.addSchema(schema_test) // what is better for this case?

// ajv_instance.validate(schema_test, data_test)
// const validate_example = ajv_instance.getSchema<typeof data_test>("https://librarianofstars.ca/schema/example")
// ajv_instance.getSchema<typeof data_test>("https://librarianofstars.ca/schema/example")(data_test)

export function validate_against_schema(id:string, data: any):  boolean {
  return ajv_instance.validate<typeof data>(id, data)
}

export function validation_function_for_schema(id:string): (data:any) => boolean {
  const validate = ajv_instance.getSchema(id)
  if (!validate) {
    console.log(ajv_instance.errors)
    return () => false
  }
  return validate
}