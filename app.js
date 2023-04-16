import weaviate from "weaviate-ts-client";
import fs from "fs";

// inits the client
const client = weaviate.client({
  scheme: "http",
  host: "localhost:8080",
});

// creates the schema for the class collection
// const schemaConfig = {
//     'class': 'text2',
//     'vectorizer': 'img2vec-neural',
//     'vectorIndexType': 'hnsw',
//     'moduleConfig': {
//         'img2vec-neural': {
//             'imageFields': [
//                 'image'
//             ],
//             'textFields': [
//                 'text'
//             ]
//         }
//     },
//     'properties': [
//         {
//             'name': 'image',
//             'dataType': ['blob']
//         },
//         {
//             'name': 'text',
//             'dataType': ['string']
//         }
//     ]
// }

// await client.schema
//     .classCreator()
//     .withClass(schemaConfig)
//     .do();

// insert a bunch of images in the collection
// const files = fs.readdirSync("./test-images");

// for (let file of files) {
//   const img = fs.readFileSync("./new/" + file);

//   const b64 = Buffer.from(img).toString("base64");

//   await client.data
//     .creator()
//     .withClassName("Text2")
//     .withProperties({
//       image: b64,
//       text: "another one",
//     })
//     .do();
// }

// get similar images from collection using img2vec-neural
// const test = Buffer.from(fs.readFileSync("./abc.jpg")).toString("base64");

// const resImage = await client.graphql
//   .get()
//   .withClassName("Text2")
//   .withFields(["image", "text"])
//   .withNearImage({ image: ('dGVzdGUgMTIz').toString("base64"), text: "another one" })
//   .do();

// let i = 0;
// for (let item of resImage.data.Get.Text2) {
//   fs.writeFileSync(`./results/${i}.png`, item.image, "base64");
//   console.log(item.text);
//   i++;
// }
