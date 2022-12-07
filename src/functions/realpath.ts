import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupRealpath = (fileSystem: FileSystem, options: FsOptions) => {
  const realpath = async () => {
    return;
  };

  return realpath;
};

export type realpath = ReturnType<typeof setupRealpath>;
