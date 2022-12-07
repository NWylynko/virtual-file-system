import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupLchmod = (fileSystem: FileSystem, options: FsOptions) => {
  const lchmod = async () => {
    return;
  };

  return lchmod;
};

export type lchmod = ReturnType<typeof setupLchmod>;
