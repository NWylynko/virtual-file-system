import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupUtimes = (fileSystem: FileSystem, options: FsOptions) => {
  const utimes = async () => {
    return;
  };

  return utimes;
};

export type utimes = ReturnType<typeof setupUtimes>;
