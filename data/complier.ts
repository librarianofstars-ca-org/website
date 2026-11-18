import fs from "fs"
import path from "path"

const current_path = path.dirname(import.meta.filename)

let filepath_strings_to_complile: string[] = ["./tests/complier/one.json"]
let filepaths_to_complile = filepath_strings_to_complile.map((filepath)=> {return path.resolve(current_path, filepath)})

function complile_json_data() {
  filepaths_to_complile.forEach((filepath)=> {
    let initial_content_string: string = fs.readFileSync(filepath, 'utf8', 
    //   (error, data) => {
    //   if (error) throw error
    //   return data
    // }
  )
    let inital_json_data = JSON.parse(initial_content_string)
    let replaced_json_data = JSON.stringify(inital_json_data, replace_data_links, 2)
    fs.writeFileSync(filepath, replaced_json_data)
    console.log("Changed", filepath, "to:", replaced_json_data)
  })
}

function replace_data_links(key, value){
  if (key == "test"){
    return "one"
  } else return value
}

console.log(JSON.stringify({"test":1, "other": "string_test"}, replace_data_links, 0))
complile_json_data()
