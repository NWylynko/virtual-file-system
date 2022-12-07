import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupRm = (fileSystem: FileSystem, options: FsOptions) => {
  const rm = async () => {
    return;
  };

  return rm;
};

export type rm = ReturnType<typeof setupRm>;
