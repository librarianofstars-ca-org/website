import Ajv, { JSONSchemaType } from "ajv";

import example_schema from "@/schema/example.json";
import example_data from "@/data/example_test.json";

const ajv = new Ajv({ strict: true }); // options can be passed, e.g. {allErrors: true}
// type schema_data = JSONSchemaType<typeof example_data>;

const validate_example = ajv.compile(example_schema);

export default function Example({ data }) {
  const valid = validate_example(data);
  if (!valid) console.log(validate_example.errors);
  else console.log(valid);
  return (
    <span
      className="example"
      key={example_data.other}
    >
      {example_data.test}
    </span>
  );
}
