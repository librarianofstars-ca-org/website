import fs from "fs"
import path from "path"

const DIRECTORY_ROOT_DATA = path.dirname(import.meta.filename)

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

function complile_json_data(input_filepath: string, output_filepath: string): void {
  fs.writeFileSync(
    path.resolve(
      DIRECTORY_ROOT_DATA,
      output_filepath,
    ),
    JSON.stringify(
      get_json_from_file(
        path.resolve(
          DIRECTORY_ROOT_DATA,
          input_filepath,
        ),
      ),
      replace_data_links,
      0,
    ),
  )
}

function get_json_from_file(filepath: string): object | object[] {
  return JSON.parse(
    fs.readFileSync(
      path.resolve(DIRECTORY_ROOT_DATA, filepath),
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

// Run for all maps of filepaths
filepath_complile_maps.forEach(
  (filepath_map) => {
    complile_json_data(filepath_map[0], filepath_map[1])
  }
)
