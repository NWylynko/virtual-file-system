import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupMkdtemp = (fileSystem: FileSystem, options: FsOptions) => {
  const mkdtemp = async () => {
    return;
  };

  return mkdtemp;
};

export type mkdtemp = ReturnType<typeof setupMkdtemp>;
