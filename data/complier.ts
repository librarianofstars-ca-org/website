import fs from "fs"

function replace_data_links(key, value){
  if (key == "test"){
    return "one"
  } else return value
}

console.log(JSON.stringify({"test":1, "other": "string_test"}, replace_data_links, 0))
