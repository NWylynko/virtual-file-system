import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupOpen = (fileSystem: FileSystem, options: FsOptions) => {
  const open = async () => {
    return;
  };

  return open;
};

export type open = ReturnType<typeof setupOpen>;
