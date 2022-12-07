import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupMkdir = (fileSystem: FileSystem, options: FsOptions) => {
  const mkdir = async () => {
    return;
  };

  return mkdir;
};

export type mkdir = ReturnType<typeof setupMkdir>;
