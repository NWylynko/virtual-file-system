import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupLchown = (fileSystem: FileSystem, options: FsOptions) => {
  const lchown = async () => {
    return;
  };

  return lchown;
};

export type lchown = ReturnType<typeof setupLchown>;
