import { createReadStream, createWriteStream } from "fs";
import path from "path";

const inputFilePath = path.join(import.meta.dirname, "input.txt");
const outputFilePath = path.join(import.meta.dirname, "output.txt");

const readFileData = createReadStream(inputFilePath, {
  encoding: "utf-8",
  highWaterMark: 16,
});

const writeFileData = createWriteStream(outputFilePath);

//join or copying data from the readFileData to the writeFileData.
// readFileData.pipe(writeFileData);

//Listens for the data chunks
readFileData.on("data", (chunk) => {
  console.log("Buffer Chunk", Buffer.from(chunk)); //convert the chunk from the buffer
  console.log("received chunk", chunk);
  writeFileData.write(chunk);
});

//handle stream end.
writeFileData.on("end", () => {
  console.log("fileRead successfully");
  writeFileData.end();
});
