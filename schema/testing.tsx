import example_schema from "@/schema/example.json";
import example_data from "@/data/example_test.json";

import { ajv_instance } from "@/schema/validation";

const validate_example = ajv_instance.compile(example_schema);

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
