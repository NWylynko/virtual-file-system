import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupWriteFile = (fileSystem: FileSystem, options: FsOptions) => {
  const writeFile = async () => {
    return;
  };

  return writeFile;
};

export type writeFile = ReturnType<typeof setupWriteFile>;
