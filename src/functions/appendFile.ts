import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

// Asynchronously append data to a file, creating the file if it does not yet exist. data can be a string or a <Buffer>.
// If options is a string, then it specifies the encoding.
// The mode option only affects the newly created file. See fs.open() for more details.
// The path may be specified as a <FileHandle> that has been opened for appending (using fsPromises.open()).

export const setupAppendFile = (fileSystem: FileSystem, options: FsOptions) => {
  const appendFile = async (
    path: string,
    data: string,
    options: {
      encoding?: string;
      mode?: number;
      flag?: string;
    } = {
      encoding: "utf8",
      mode: 0o666,
      flag: "a",
    },
  ): Promise<undefined> => {
    return;
  };

  return appendFile;
};

export type appendFile = ReturnType<typeof setupAppendFile>;
