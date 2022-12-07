import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupOpendir = (fileSystem: FileSystem, options: FsOptions) => {
  const opendir = async () => {
    return;
  };

  return opendir;
};

export type opendir = ReturnType<typeof setupOpendir>;
