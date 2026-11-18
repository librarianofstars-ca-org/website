import fs from "fs"
import path from "path"

const current_path_for_directory = path.dirname(import.meta.filename)

let filepath_strings_to_complile: string[] = ["./tests/complier/one.json"]
// let filepaths_to_complile = filepath_strings_to_complile.map((filepath)=> {return path.resolve(current_path, filepath)})

function complile_json_data(filepath: string) {
  let read_file_path = path.join(current_path_for_directory, filepath)
  let write_file_path = path.join(read_file_path, "/../compiled/", path.basename(read_file_path))
  let initial_content_string: string = fs.readFileSync(read_file_path, 'utf8') 
  //   (error, data) => {
  //   if (error) throw error
  //   return data
  // }
  // )
  let inital_json_data = JSON.parse(initial_content_string)
  let replaced_json_data = JSON.stringify(inital_json_data, replace_data_links, 0)
  fs.writeFileSync(write_file_path, replaced_json_data)
  console.log("Changed", write_file_path, "to:", replaced_json_data, "from:", read_file_path)
}


function replace_data_links(key, value){
  if (key == "test"){
    return "one"
  } else return value
}

console.log(JSON.stringify({"test":1, "other": "string_test"}, replace_data_links, 0))
filepath_strings_to_complile.forEach((filepath)=> {complile_json_data(filepath)})
