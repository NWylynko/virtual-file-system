import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupRmdir = (fileSystem: FileSystem, options: FsOptions) => {
  const rmdir = async () => {
    return;
  };

  return rmdir;
};

export type rmdir = ReturnType<typeof setupRmdir>;
