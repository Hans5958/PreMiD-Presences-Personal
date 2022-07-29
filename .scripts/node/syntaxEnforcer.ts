import "source-map-support/register";

// import { yellow } from "chalk";
import { format as prettier, resolveConfig } from "prettier";
import { readFileSync, writeFileSync } from "fs";

import { sync as glob } from "glob";

/**
 * Helper function to read any file as string
 * @param path Path to the file
 */
const readFile = (path: string): string =>
    readFileSync(path, { encoding: "utf8" }),
  /**
   * Helper function to write any data to disk
   * @param data Data to write
   * @param path Path to write the data to
   */
  writeFile = (path: string, data: string): void =>
    writeFileSync(path, data, { encoding: "utf8" }),
  prettify = async (): Promise<void> => {
    // console.time("Total");
    // Grab all TS files and JSON files
    const tsFiles = glob("**", {
      ignore: ["syntaxEnforcer.ts"],
      absolute: true,
      nodir: true
    });

    for (const fileToPrettify of tsFiles) {
      console.time(fileToPrettify)
      // Get the raw data from the file
      const fileContent = readFile(fileToPrettify),
        // Format the file using Prettier
        formatted = prettier(fileContent, {
          ...(await resolveConfig(fileToPrettify)),
          filepath: fileToPrettify
        });
        writeFile(fileToPrettify, formatted);
        console.timeEnd(fileToPrettify)
    }

    // console.timeEnd("Total");
  },
  // Main function that calls the other functions above
  main = async (): Promise<void> => {

    // A clear splitter before prettify
    // console.log(
    //   yellow(
    //     [
    //       "|--------------------------------|",
    //       "| PROCEEDING TO PRETTIFY SOURCES |",
    //       "|--------------------------------|"
    //     ].join("\n")
    //   )
    // );

    await prettify();

    // Exit with the designated exit code to ensure the CI action fails or succeeds
    process.exit();
  };

// Call main
main();
