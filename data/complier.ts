import fs from "fs"
import path from "path"

const current_path_for_directory = path.dirname(import.meta.filename)

let filepath_strings_to_complile: string[] = [
  "./tests/compiler/one.json", 
  "./tests/compiler/two.json",
  "./tests/compiler/three.json",
  "./tests/compiler/four.json",
]

function move_to_compiled_folder(filepath: string) {
  // Edit later to be more general (seperate folder entirely?)
  return path.join(filepath, "/../compiled/", path.basename(filepath))
}

function complile_json_data(filepath: string) {
  let read_file_path = path.join(current_path_for_directory, filepath)
  let write_file_path = move_to_compiled_folder(read_file_path)
  let inital_json_data = get_json_from_file(read_file_path)
  let replaced_json_data = JSON.stringify(inital_json_data, replace_data_links, 0)
  fs.writeFileSync(write_file_path, replaced_json_data)
  console.log("Changed", write_file_path, "to:", replaced_json_data, "from:", read_file_path)
}

function get_json_from_file(filepath) {
  return JSON.parse(fs.readFileSync(path.resolve(current_path_for_directory, filepath), 'utf8'))
}

function replace_data_links(key, value){
  if (key == "test"){
    return "one"
  } else if (value.datalink != undefined ) {
    return get_json_from_file(value.datalink)
  } else return value
}

console.log(JSON.stringify({"test":1, "other": "string_test"}, replace_data_links, 0))
filepath_strings_to_complile.forEach((filepath)=> {complile_json_data(filepath)})
