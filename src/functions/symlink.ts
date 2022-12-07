import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupSymlink = (fileSystem: FileSystem, options: FsOptions) => {
  const symlink = async () => {
    return;
  };

  return symlink;
};

export type symlink = ReturnType<typeof setupSymlink>;
