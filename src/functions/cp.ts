import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupCp = (fileSystem: FileSystem, options: FsOptions) => {
  const cp = async () => {
    return;
  };

  return cp;
};

export type cp = ReturnType<typeof setupCp>;
