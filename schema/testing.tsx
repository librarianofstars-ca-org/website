import Ajv, { JSONSchemaType } from "ajv";

import example_schema from "@/schema/example.json";
import example_data from "@/data/example_test.json";

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
type schema_data = JSONSchemaType<typeof example_data>;

const validate = ajv.compile(example_schema);
const valid = validate(example_data);

export default function Example(
  // { data }: { data: schema_data }

) {
  if (!valid) console.log(validate.errors);
  else console.log(valid);
  return <span className="example">{example_data.test}</span>;
}
