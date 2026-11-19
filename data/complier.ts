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

function resolve_path_to_root_dir(filepath: string){
  return path.resolve(
    DIRECTORY_ROOT_DATA,
    filepath,
  )
}

function get_json_from_file(filepath: string): object | object[] {
  return JSON.parse(
    fs.readFileSync(
      /* path: */ resolve_path_to_root_dir(filepath),
      /* options: */'utf8'
    )
  )
}

export function complile_json_data(input_filepath: string, output_filepath: string): void {
  fs.writeFileSync(
    /* file: */ resolve_path_to_root_dir(
      output_filepath,
    ),
    /* data: */ JSON.stringify(
      /* value: */ get_json_from_file(
        input_filepath,
      ),
      /* replacer: */ replace_data_links,
      /* space: */ 0,
    ),
  )
}


function replace_data_links(
  key: string, // not used but needed for function signature
  value: { datalink: string | undefined }
): any{
  if (value.datalink != undefined ) {
    return get_json_from_file(value.datalink)
  } else return value // no change
}

// Run for all maps of filepaths
filepath_complile_maps.forEach(
  (filepath_map) => {
    complile_json_data(...filepath_map)
  }
)
