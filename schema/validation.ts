import AJV from "ajv"

import schema_test from "@/schema/example.json"
import data_test from "@/data/example_test.json"

const ajv_instance = new AJV({ strict: true })

ajv_instance.compile(schema_test)
// ajv_instance.addSchema(schema_test) // what is better for this case?

ajv_instance.validate(schema_test, data_test)
const validate_example = ajv_instance.getSchema<typeof data_test>("https://librarianofstars.ca/schema/example")
// ajv_instance.getSchema<typeof data_test>("https://librarianofstars.ca/schema/example")(data_test)
