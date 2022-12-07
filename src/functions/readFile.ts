import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupReadFile = (fileSystem: FileSystem, options: FsOptions) => {
  const readFile = async () => {
    return;
  };

  return readFile;
};

export type readFile = ReturnType<typeof setupReadFile>;
