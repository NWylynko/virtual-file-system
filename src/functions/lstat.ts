import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupLstat = (fileSystem: FileSystem, options: FsOptions) => {
  const lstat = async () => {
    return;
  };

  return lstat;
};

export type lstat = ReturnType<typeof setupLstat>;
