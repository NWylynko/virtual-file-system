import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupUnlink = (fileSystem: FileSystem, options: FsOptions) => {
  const unlink = async () => {
    return;
  };

  return unlink;
};

export type unlink = ReturnType<typeof setupUnlink>;
