import fs from "fs"
import path from "path"

const current_path_for_directory = path.dirname(import.meta.filename)

let filepath_complile_maps: [string, string][] = [
  [
    "./tests/compiler/one.json",
    "./tests/compiler/compiled/one.json",
  ],
  [
    "./tests/compiler/two.json",
    "./tests/compiler/compiled/two.json",
  ],
  [
    "./tests/compiler/three.json",
    "./tests/compiler/compiled/three.json",
  ],
  [
    "./tests/compiler/four.json",
    "./tests/compiler/compiled/four.json",
  ],
]

function complile_json_data(input_filepath: string, output_filepath: string) {
  let read_file_path = path.resolve(current_path_for_directory, input_filepath)
  let write_file_path = path.resolve(current_path_for_directory, output_filepath)
  let inital_json_data = get_json_from_file(read_file_path)
  let replaced_json_data = JSON.stringify(inital_json_data, replace_data_links, 0)
  fs.writeFileSync(write_file_path, replaced_json_data)
  console.log("Changed", write_file_path, "to:", replaced_json_data, "from:", read_file_path)
}

function get_json_from_file(filepath: string) {
  return JSON.parse(
    fs.readFileSync(
      path.resolve(current_path_for_directory, filepath),
      'utf8'
    )
  )
}

function replace_data_links(
  key: string,
  value: { datalink: string | undefined }
): any{
  if (value.datalink != undefined ) {
    return get_json_from_file(value.datalink)
  } else return value // no change
}

filepath_complile_maps.forEach(
  (filepath_map) => {
    complile_json_data(filepath_map[0], filepath_map[1])
  }
)
